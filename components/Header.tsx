import { Link } from '@remix-run/react';

export function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Liquid Store
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link to="/collections" className="hover:text-indigo-600">
              Collections
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-indigo-600">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-indigo-600">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
