import { Link } from 'react-router-dom'


export function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/tasky/image/upload/v1735901325/WhatsApp_Image_2024-11-27_at_22.34.12_f1be49ea_ifpxfk.jpg"
            alt="Jam Delight Logo"
            className="w-24 h-12 object-contain"
          />
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-gray-700 hover:text-purple-600">Home</Link></li>
          <li><Link to="/products" className="text-gray-700 hover:text-purple-600">Products</Link></li>
          <li><Link to="/#about" className="text-gray-700 hover:text-purple-600">About</Link></li>
          <li><Link to="/Contact" className="text-gray-700 hover:text-purple-600">Contact</Link></li>
          <li><Link to="/cart" className="text-gray-700 hover:text-purple-600">Cart</Link></li>
        </ul>
      </nav>
    </header>
  )
}
      
