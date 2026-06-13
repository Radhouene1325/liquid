import type { MetaFunction } from '@remix-run/server-runtime';

export const meta: MetaFunction = () => {
  return [
    { title: 'Collections - Hydrogen Store' },
    { name: 'description', content: 'Shop by collection' },
  ];
};

export default function Collections() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Collections</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Collections will be fetched from Shopify API */}
          <div className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition">
            <div className="bg-gradient-to-br from-blue-400 to-indigo-600 h-48 rounded mb-4"></div>
            <h3 className="text-2xl font-semibold mb-2">Collection Name</h3>
            <p className="text-gray-600">Browse this collection</p>
          </div>
        </div>
      </div>
    </main>
  );
}