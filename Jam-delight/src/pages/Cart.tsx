import { Header } from '../components/Header'
import { useCart } from '../context/CartProvider'

export function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center">
                    <img
                      src="https://res.cloudinary.com/tasky/image/upload/v1735901327/pexels-shkrabaanthony-4397307_wb6boe.jpg"
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="font-semibold mr-4">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <div>
                <button
                  onClick={clearCart}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full mr-4 hover:bg-gray-300"
                >
                  Clear Cart
                </button>
                <button
                  className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  )
}

