import { useState, type ChangeEvent, type FormEvent } from "react";

import { Link } from "react-router";

import { useCart } from "../context/useCart";

type CheckoutForm = {
  name: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
};

function Checkout() {
  const { cart, clearCart } = useCart();

  const [form, setForm] = useState<CheckoutForm>({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [error, setError] = useState("");

  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const subtotal = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const allFieldsComplete = Object.values(form).every(
      (value) => value.trim().length > 0,
    );

    if (!allFieldsComplete) {
      setError("Please complete all fields.");
      return;
    }

    if (!form.email.includes("@") || !form.email.includes(".")) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    clearCart();
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <main className="bg-slate-950 text-white">
        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="text-5xl">✓</div>

          <h1 className="mt-5 text-4xl font-bold">Order Placed</h1>

          <p className="mt-4 text-slate-400">
            Your demo order was completed successfully. No real payment was
            processed.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
          >
            Continue Shopping
          </Link>
        </section>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="bg-slate-950 text-white">
        <section className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="text-3xl font-bold">Nothing to checkout</h1>

          <p className="mt-4 text-slate-400">Your cart is currently empty.</p>

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

  const inputClass =
    "mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-blue-500";

  return (
    <main className="bg-slate-950 text-white">
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1fr_420px]">
        <div>
          <h1 className="text-3xl font-bold sm:text-4xl">Checkout</h1>

          <p className="mt-3 text-slate-400">
            Enter your shipping information.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Full name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="address" className="text-sm font-medium">
                Address
              </label>

              <input
                id="address"
                type="text"
                name="address"
                autoComplete="street-address"
                value={form.address}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="city" className="text-sm font-medium">
                  City
                </label>

                <input
                  id="city"
                  type="text"
                  name="city"
                  autoComplete="address-level2"
                  value={form.city}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="postalCode" className="text-sm font-medium">
                  Postal code
                </label>

                <input
                  id="postalCode"
                  type="text"
                  name="postalCode"
                  autoComplete="postal-code"
                  value={form.postalCode}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="country" className="text-sm font-medium">
                Country
              </label>

              <input
                id="country"
                type="text"
                name="country"
                autoComplete="country-name"
                value={form.country}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg border border-red-900 bg-red-950/40 p-3 text-sm text-red-400"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              Place Order
            </button>

            <p className="text-center text-xs text-slate-500">
              Demo checkout only. No real payment is processed.
            </p>
          </form>
        </div>

        <aside className="h-fit rounded-xl border border-slate-800 bg-slate-900 p-6 lg:sticky lg:top-24">
          <h2 className="text-xl font-bold">Order Summary</h2>

          <div className="mt-6 space-y-5">
            {cart.map((item) => (
              <div key={item.product.id} className="flex gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="h-14 w-14 rounded-lg object-cover"
                />

                <div className="flex flex-1 justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium">{item.product.title}</p>

                    <p className="mt-1 text-xs text-slate-400">
                      Qty {item.quantity}
                    </p>
                  </div>

                  <p className="text-sm">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-slate-700 pt-6">
            <div className="flex justify-between text-sm text-slate-400">
              <span>Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="mt-4 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Checkout;
