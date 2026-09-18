import { Link } from "react-router";

function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-950 px-6 text-white">
      <div className="text-center">
        <p className="text-sm font-semibold text-blue-400">404</p>

        <h1 className="mt-3 text-4xl font-bold">Page not found</h1>

        <p className="mt-4 text-slate-400">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
