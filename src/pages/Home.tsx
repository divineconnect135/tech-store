import { Link } from "react-router";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Home() {
  const featuredProducts = products.filter((product) =>
    [1, 4, 7, 10].includes(product.id),
  );

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
            Better gear. Better setup.
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Upgrade Your Setup
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Discover keyboards, mice, headphones and monitors designed for
            gaming, productivity and everyday use.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              Shop Products
            </Link>

            <Link
              to="/products?category=Monitors"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-900"
            >
              Browse Monitors
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl">Shop by Category</h2>

        <p className="mt-2 text-slate-400">
          Find products for every part of your setup.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Keyboards", "Mechanical and wireless keyboards."],
            ["Mice", "Gaming and productivity mice."],
            ["Headphones", "Audio for gaming, work and music."],
            ["Monitors", "Displays for gaming and productivity."],
          ].map(([category, description]) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="text-lg font-semibold">{category}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Featured Products
            </h2>

            <p className="mt-2 text-slate-400">
              Popular gear from each category.
            </p>
          </div>

          <Link
            to="/products"
            className="shrink-0 text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            View all →
          </Link>
        </div>

        <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold">Quality Gear</h3>

            <p className="mt-2 text-sm text-slate-400">
              Carefully selected products for modern setups.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Easy Shopping</h3>

            <p className="mt-2 text-sm text-slate-400">
              Search, filter and compare products quickly.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Persistent Cart</h3>

            <p className="mt-2 text-sm text-slate-400">
              Your cart remains saved after refreshing the browser.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
