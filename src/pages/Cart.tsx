import { Link } from "react-router";

import { useCart } from "../context/useCart";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <main className="bg-slate-950 text-white">
        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="text-3xl font-bold">Your cart is empty</h1>

          <p className="mt-4 text-slate-400">
            Browse our products and add something to your setup.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
          >
            Browse Products
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold sm:text-4xl">Your Cart</h1>

        <p className="mt-2 text-slate-400">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </p>

        <div className="mt-8 space-y-4">
          {cart.map((item) => (
            <article
              key={item.product.id}
              className="rounded-xl border border-slate-800 bg-slate-900 p-4 sm:p-5"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <Link to={`/products/${item.product.id}`}>
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      className="h-20 w-20 rounded-lg object-cover sm:h-24 sm:w-24"
                    />
                  </Link>

                  <div>
                    <Link
                      to={`/products/${item.product.id}`}
                      className="font-semibold hover:text-blue-400"
                    >
                      {item.product.title}
                    </Link>

                    <p className="mt-1 text-slate-400">
                      ${item.product.price.toFixed(2)}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Total: ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.product.title} quantity`}
                    onClick={() => decreaseQuantity(item.product.id)}
                    className="rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800"
                  >
                    −
                  </button>

                  <span className="min-w-6 text-center font-medium">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    aria-label={`Increase ${item.product.title} quantity`}
                    onClick={() => increaseQuantity(item.product.id)}
                    disabled={item.quantity >= item.product.stock}
                    className="rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() => removeFromCart(item.product.id)}
                    className="ml-2 text-sm font-medium text-red-400 hover:text-red-300"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex justify-between text-slate-400">
            <span>Total items</span>
            <span>{totalItems}</span>
          </div>

          <div className="mt-4 flex justify-between text-2xl font-bold">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Shipping and taxes are not calculated in this demo.
          </p>

          <Link
            to="/checkout"
            className="mt-6 block w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold hover:bg-blue-500"
          >
            Proceed to Checkout
          </Link>

          <Link
            to="/products"
            className="mt-5 block text-center text-sm text-blue-400 hover:text-blue-300"
          >
            ← Continue shopping
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Cart;
