import { Header } from '../components/Header'
import { ProductCard } from '../components/ProductCard'

const products = [
  { id: 1, name: 'Strawberry Jam', description: 'Sweet and tangy, perfect for breakfast', price: 199, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901325/jam1_nabbq2.jpg' },
  { id: 2, name: 'Mixed fruit Jam', description: 'Rich in antioxidants and flavor', price: 199, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901326/WhatsApp_Image_2025-01-01_at_21.37.04_1ff0f2f6_gmjcrz.jpg' },
  { id: 3, name: 'Grape Jam', description: 'Smooth and velvety, a summer favorite', price: 299, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901325/WhatsApp_Image_2025-01-01_at_21.37.03_250ace17_wbhqxl.jpg' },
  { id: 5, name: 'Mango Jam', description: 'Bold and earthy, a wild berry delight', price: 249, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901326/pexels-mathilde-10897666_h6sxvr.jpg' },
  { id: 6, name: 'Apple Jam', description: 'Sunshine in a jar, perfect for summer', price: 199, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901326/WhatsApp_Image_2025-01-01_at_21.37.04_1ff0f2f6_gmjcrz.jpg' },
 
]

export function Products() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Jams</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  )
}

