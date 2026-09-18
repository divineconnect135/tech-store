import { Link } from "react-router";

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link to="/" className="text-lg font-bold text-white">
            Tech Store
          </Link>

          <p className="mt-2 text-sm">
            Demo e-commerce frontend built with React and TypeScript.
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white">
            Home
          </Link>

          <Link to="/products" className="hover:text-white">
            Products
          </Link>

          <Link to="/cart" className="hover:text-white">
            Cart
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
