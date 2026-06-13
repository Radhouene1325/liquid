interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image?: string;
  onAddToCart: () => void;
}

export function ProductCard({
  id,
  title,
  price,
  image,
  onAddToCart,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="bg-gray-200 h-48 rounded-t flex items-center justify-center">
        {image && <img src={image} alt={title} className="w-full h-full object-cover" />}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 truncate">{title}</h3>
        <p className="text-indigo-600 font-bold mb-4">${price.toFixed(2)}</p>
        <button
          onClick={onAddToCart}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}