import { useCart } from '../context/CartProvider'
interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">Rs:{product.price.toFixed(2)}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

