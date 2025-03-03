import { useCart } from "../context/CartProvider";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard(props: ProductCardProps) {
  const { addToCart } = useCart();
  const { product } = props; // Destructure inside the function

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <div className="w-full h-64 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        {/* Description */}
        <p className="text-gray-600 mb-4">{product.description}</p>
        {/* Footer */}
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold">
            Rs: {product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
