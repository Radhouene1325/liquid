import type { MetaFunction } from '@remix-run/server-runtime';

export const meta: MetaFunction = () => {
  return [
    { title: 'Home - Hydrogen + Oxygen Store' },
    { name: 'description', content: 'Welcome to our Hydrogen powered store' },
  ];
};

export default function Index() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Hydrogen + Oxygen Store
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Powered by Shopify's modern storefront technology
        </p>
        <div className="space-x-4">
          <a
            href="/products"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Shop Products
          </a>
          <a
            href="/collections"
            className="inline-block px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
          >
            Browse Collections
          </a>
        </div>
      </div>
    </main>
  );
}
