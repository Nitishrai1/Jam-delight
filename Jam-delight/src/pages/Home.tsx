import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <section id="home" className="hero py-16 flex flex-col md:flex-row items-center">
          <div className="hero-content md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Spread the <span className="text-purple-600">Sweetness</span>
            </h1>
            <p className="mb-6">
              Introducing Jam Delight—the perfect jam for health-conscious individuals and those with sugar sensitivities! If you're on a no-sugar diet, it's time to bid farewell to traditional sugar-free jams loaded with artificial sweeteners. With Jam Delight, you can indulge guilt-free in a jam crafted without preservatives, artificial colors, or harmful chemicals.
            </p>
            <div className="flex space-x-4">
              <Link to="/products" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">Shop Now</Link>
              <a href="#about" className="border border-purple-600 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-100">Learn More</a>
            </div>
          </div>
          <div className="hero-image md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://res.cloudinary.com/tasky/image/upload/v1735901327/pexels-pixabay-48817_wf9xno.jpg"
              alt="Assorted colorful jams in jars"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </section>

        {/* Add the rest of the sections (benefits, keto-friendly, about, contact) here */}
        {/* ... */}

      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Jam Delight. All rights reserved.</p>
      </footer>
    </>
  )
}

