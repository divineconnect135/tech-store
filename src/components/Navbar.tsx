import { useState } from "react";
import { Link, NavLink } from "react-router";

import { useCart } from "../context/useCart";

function Navbar() {
  const { cart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  function closeMenu() {
    setMenuOpen(false);
  }

  function navLinkClass({ isActive }: { isActive: boolean }) {
    return isActive
      ? "font-medium text-white"
      : "text-slate-400 transition hover:text-white";
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 text-white backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" onClick={closeMenu} className="text-xl font-bold">
            Tech Store
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/products" className={navLinkClass}>
              Products
            </NavLink>

            <NavLink to="/cart" className={navLinkClass}>
              Cart
              {totalItems > 0 && (
                <span className="ml-2 rounded-full bg-blue-600 px-2 py-0.5 text-xs text-white">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="rounded-lg border border-slate-700 px-3 py-2 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-800 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
                Home
              </NavLink>

              <NavLink
                to="/products"
                onClick={closeMenu}
                className={navLinkClass}
              >
                Products
              </NavLink>

              <NavLink to="/cart" onClick={closeMenu} className={navLinkClass}>
                Cart ({totalItems})
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
