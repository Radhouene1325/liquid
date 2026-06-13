import type { MetaFunction } from '@remix-run/server-runtime';

export const meta: MetaFunction = () => {
  return [
    { title: 'Products - Hydrogen Store' },
    { name: 'description', content: 'Browse our product collection' },
  ];
};

export default function Products() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Products will be fetched from Shopify API */}
          <div className="bg-white rounded-lg shadow p-4">
            <div className="bg-gray-200 h-48 rounded mb-4"></div>
            <h3 className="font-semibold mb-2">Product Name</h3>
            <p className="text-gray-600 mb-4">$99.99</p>
            <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}