import { useState } from "react";
import { useSearchParams } from "react-router";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

type SortOption = "default" | "price-low" | "price-high" | "rating";

function Products() {
  const [search, setSearch] = useState("");

  const [sort, setSort] = useState<SortOption>("default");

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") ?? "All";

  const filteredProducts = products
    .filter((product) => {
      const normalizedSearch = search.trim().toLowerCase();

      const matchesSearch =
        product.title.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "price-low") {
        return a.price - b.price;
      }

      if (sort === "price-high") {
        return b.price - a.price;
      }

      if (sort === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });

  function handleCategoryChange(newCategory: string) {
    if (newCategory === "All") {
      setSearchParams({});
      return;
    }

    setSearchParams({
      category: newCategory,
    });
  }

  function resetFilters() {
    setSearch("");
    setSort("default");
    setSearchParams({});
  }

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div>
          <p className="text-sm font-semibold text-blue-400">Tech Store</p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Products</h1>

          <p className="mt-3 text-slate-400">
            Find the right gear for your setup.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label
              htmlFor="search"
              className="mb-2 block text-sm text-slate-400"
            >
              Search
            </label>

            <input
              id="search"
              type="search"
              placeholder="Keyboard, mouse..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="mb-2 block text-sm text-slate-400"
            >
              Category
            </label>

            <select
              id="category"
              value={category}
              onChange={(event) => handleCategoryChange(event.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="All">All Categories</option>
              <option value="Keyboards">Keyboards</option>
              <option value="Mice">Mice</option>
              <option value="Headphones">Headphones</option>
              <option value="Monitors">Monitors</option>
            </select>
          </div>

          <div>
            <label htmlFor="sort" className="mb-2 block text-sm text-slate-400">
              Sort
            </label>

            <select
              id="sort"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-blue-500"
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="button"
              onClick={resetFilters}
              className="w-full rounded-lg border border-slate-700 px-4 py-3 transition hover:bg-slate-800"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"} found
        </p>

        {filteredProducts.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="text-xl font-semibold">No products found</h2>

            <p className="mt-2 text-slate-400">
              Try another search or reset your filters.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Products;
