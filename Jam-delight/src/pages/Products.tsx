import { Header } from '../components/Header'
import { ProductCard } from '../components/ProductCard'

const products = [
  { id: 1, name: 'Strawberry Jam', description: 'Sweet and tangy, perfect for breakfast', price: 9.99, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901325/jam1_nabbq2.jpg' },
  { id: 2, name: 'Blueberry Jam', description: 'Rich in antioxidants and flavor', price: 10.99, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901326/WhatsApp_Image_2025-01-01_at_21.37.04_1ff0f2f6_gmjcrz.jpg' },
  { id: 3, name: 'Apricot Jam', description: 'Smooth and velvety, a summer favorite', price: 8.99, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901325/WhatsApp_Image_2025-01-01_at_21.37.03_250ace17_wbhqxl.jpg' },
  { id: 4, name: 'Raspberry Jam', description: 'Tart and sweet, bursting with flavor', price: 9.99, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901326/pexels-markusspiske-96580_nerlkk.jpg' },
  { id: 5, name: 'Blackberry Jam', description: 'Bold and earthy, a wild berry delight', price: 11.99, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901326/pexels-mathilde-10897666_h6sxvr.jpg' },
  { id: 6, name: 'Peach Jam', description: 'Sunshine in a jar, perfect for summer', price: 10.49, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901326/WhatsApp_Image_2025-01-01_at_21.37.04_1ff0f2f6_gmjcrz.jpg' },
  { id: 7, name: 'Fig Jam', description: 'Rich and complex, ideal for cheese pairings', price: 12.99, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901326/pexels-ella-olsson-572949-3026801_coeiuk.jpg' },
  { id: 8, name: 'Cherry Jam', description: 'Bright and cheerful, a classic favorite', price: 10.99, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901327/pexels-wa2nzup-1051849_uecmxr.jpg' },
  { id: 9, name: 'Mango Jam', description: 'Tropical sweetness, a taste of paradise', price: 11.49, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901326/pexels-mathilde-10897666_h6sxvr.jpg' },
  { id: 10, name: 'Plum Jam', description: 'Deep and luscious, a autumn treasure', price: 9.99, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901326/WhatsApp_Image_2025-01-01_at_21.37.04_1ff0f2f6_gmjcrz.jpg' },
  { id: 11, name: 'Orange Marmalade', description: 'Zesty and bright, a breakfast classic', price: 8.99, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901325/WhatsApp_Image_2025-01-01_at_21.37.03_250ace17_wbhqxl.jpg' },
  { id: 12, name: 'Pear Jam', description: 'Subtle and sophisticated, a refined spread', price: 10.49, image: 'https://res.cloudinary.com/tasky/image/upload/v1735901326/pexels-markusspiske-96580_nerlkk.jpg' }
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

