import { useState } from "react";

import { Link, useNavigate, useParams } from "react-router";

import { products } from "../data/products";
import { useCart } from "../context/useCart";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { cart, addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <main className="bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-3xl font-bold">Product not found</h1>

          <Link
            to="/products"
            className="mt-6 inline-block text-blue-400 hover:text-blue-300"
          >
            ← Back to products
          </Link>
        </section>
      </main>
    );
  }

  const cartItem = cart.find((item) => item.product.id === product.id);

  const cartQuantity = cartItem?.quantity ?? 0;

  const remainingStock = product.stock - cartQuantity;

  const canAdd = product.stock > 0 && remainingStock > 0;

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 md:py-16">
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
          <img
            src={product.image}
            alt={product.title}
            className="h-full max-h-137.5 w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium text-blue-400">
            {product.category}
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            {product.title}
          </h1>

          <p className="mt-4 text-slate-400">⭐ {product.rating}</p>

          <p
            className={`mt-4 text-sm ${
              product.stock > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
          </p>

          <p className="mt-6 text-3xl font-bold">${product.price.toFixed(2)}</p>

          <p className="mt-6 leading-7 text-slate-300">{product.description}</p>

          {cartQuantity > 0 && (
            <p className="mt-4 text-sm text-slate-400">
              You already have {cartQuantity} in your cart.
            </p>
          )}

          {canAdd && (
            <div className="mt-8">
              <p className="mb-3 text-sm text-slate-400">Quantity</p>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  disabled={quantity === 1}
                  className="rounded-lg border border-slate-700 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  −
                </button>

                <span className="min-w-8 text-center text-lg font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.min(remainingStock, current + 1),
                    )
                  }
                  disabled={quantity >= remainingStock}
                  className="rounded-lg border border-slate-700 px-4 py-2 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => {
              addToCart(product, quantity);

              navigate("/cart");
            }}
            disabled={!canAdd}
            className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
          >
            {product.stock === 0
              ? "Out of Stock"
              : remainingStock === 0
                ? "Maximum Quantity in Cart"
                : `Add ${quantity} to Cart`}
          </button>

          <Link
            to="/products"
            className="mt-5 inline-block text-sm text-slate-400 hover:text-white"
          >
            ← Back to products
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
