import { Link } from "react-router";

import type { Product } from "../types/Product";
import { useCart } from "../context/useCart";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { cart, addToCart } = useCart();

  const cartItem = cart.find((item) => item.product.id === product.id);

  const cartQuantity = cartItem?.quantity ?? 0;

  const reachedStockLimit = cartQuantity >= product.stock;

  const cannotAdd = product.stock === 0 || reachedStockLimit;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition hover:-translate-y-1 hover:border-slate-700">
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 w-full object-cover transition duration-300 hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-medium text-blue-400">{product.category}</p>

        <Link to={`/products/${product.id}`}>
          <h2 className="mt-1 text-lg font-semibold text-white hover:text-blue-400">
            {product.title}
          </h2>
        </Link>

        <p className="mt-2 text-sm text-slate-400">⭐ {product.rating}</p>

        <p
          className={`mt-2 text-sm ${
            product.stock > 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </p>

        <p className="mt-4 text-xl font-bold text-white">
          ${product.price.toFixed(2)}
        </p>

        <div className="mt-auto flex gap-2 pt-5">
          <button
            type="button"
            onClick={() => addToCart(product, 1)}
            disabled={cannotAdd}
            className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
          >
            {product.stock === 0
              ? "Out of Stock"
              : reachedStockLimit
                ? "Max Added"
                : "Add to Cart"}
          </button>

          <Link
            to={`/products/${product.id}`}
            className="rounded-lg border border-slate-700 px-4 py-2 text-center text-sm text-white transition hover:bg-slate-800"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
