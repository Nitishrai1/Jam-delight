import { Header } from '@/components/header'
import { ProductCard } from '@/components/product-card'

const products = [
  { id: 1, name: 'Strawberry Jam', description: 'Sweet and tangy, perfect for breakfast', price: 9.99, image: '/images/strawberry-jam.jpg' },
  { id: 2, name: 'Blueberry Jam', description: 'Rich in antioxidants and flavor', price: 10.99, image: '/images/blueberry-jam.jpg' },
  { id: 3, name: 'Apricot Jam', description: 'Smooth and velvety, a summer favorite', price: 8.99, image: '/images/apricot-jam.jpg' },
  { id: 4, name: 'Raspberry Jam', description: 'Tart and sweet, bursting with flavor', price: 9.99, image: '/images/raspberry-jam.jpg' },
]

export default function ProductsPage() {
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

