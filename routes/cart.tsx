import type { MetaFunction } from '@remix-run/server-runtime';

export const meta: MetaFunction = () => {
  return [
    { title: 'Shopping Cart - Hydrogen Store' },
    { name: 'description', content: 'Review your shopping cart' },
  ];
};

export default function Cart() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow p-8">
          <p className="text-center text-gray-500 py-8">Your cart is empty</p>
          <a href="/products" className="inline-block w-full text-center bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700">
            Continue Shopping
          </a>
        </div>
      </div>
    </main>
  );
}