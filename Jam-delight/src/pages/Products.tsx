import { useState } from 'react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Strawberry Jam',
    description: 'Sweet and tangy, perfect for breakfast',
    price: 199,
    image: 'https://res.cloudinary.com/tasky/image/upload/v1741000635/Jamdelight/images/jtkbyx9idqyk7anjttvr.jpg',
  },
  {
    id: 2,
    name: 'Mixed Fruit Jam',
    description: 'Rich in antioxidants and flavor',
    price: 249,
    image: 'https://res.cloudinary.com/tasky/image/upload/v1741000635/Jamdelight/images/fr0dp6nlo05vxoiylotx.jpg',
  },
  {
    id: 3,
    name: 'Grape Jam',
    description: 'Smooth and velvety, a summer favorite',
    price: 199,
    image: 'https://res.cloudinary.com/tasky/image/upload/v1741000635/Jamdelight/images/abkifgirxbsvcg0hmxx6.jpg',
  },
  {
    id: 4,
    name: 'Mango Jam',
    description: 'Bold and earthy, a wild berry delight',
    price: 199,
    image: 'https://res.cloudinary.com/tasky/image/upload/v1741000635/Jamdelight/images/iu3fx2uaibdp6zzedgs2.jpg',
  },
  {
    id: 5,
    name: 'Apple Jam',
    description: 'Sunshine in a jar, perfect for summer',
    price: 199,
    image: 'https://res.cloudinary.com/tasky/image/upload/v1741000635/Jamdelight/images/jtkbyx9idqyk7anjttvr.jpg',
  },
];

export function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Jams</h1>
        <div className="relative">
          {/* Slider Content */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-lg">
              {/* Increased width and height */}
              <ProductCard product={products[currentIndex]} />
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
          >
            &#8249;
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
          >
            &#8250;
          </button>
        </div>
      </main>
    </>
  );
}
