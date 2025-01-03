import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'

export default function Home() {
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
              <Link href="/products" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">Shop Now</Link>
              <Link href="#about" className="border border-purple-600 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-100">Learn More</Link>
            </div>
          </div>
          <div className="hero-image md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/images/hero-jam.jpg"
              alt="Assorted colorful jams in jars"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </section>

        <section id="benefits" className="benefits py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Jam Delight?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image
              src="/images/benefits-infographic.jpg"
              alt="Product Benefits Infographic"
              width={400}
              height={400}
              className="rounded-lg mb-8 md:mb-0 md:mr-8"
            />
            <div className="benefit-features">
              <h3 className="text-2xl font-semibold mb-4">Health-Conscious Choice</h3>
              <ul className="space-y-2">
                <li>✓ Sugar Free</li>
                <li>✓ 100% Natural</li>
                <li>✓ No Artificial Colors</li>
                <li>✓ No Preservatives</li>
                <li>✓ Low Calorie</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="keto-friendly" className="keto-friendly py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect for Keto and Beyond</h2>
            <p className="text-center mb-12">
              Health-conscious living doesn't have to mean sacrificing taste. For those on a Keto diet, Jam Delight is here to bring joy to your breakfast table.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Sweetened with Stevia</h3>
                <p>Our jams are naturally sweetened with Stevia, a plant-based sweetener that's calorie-free and perfect for those with diabetes or following a keto diet.</p>
              </div>
              
              <div className="feature bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Made with Real Fruits</h3>
                <p>We use 60% fruit pulp in our jams, ensuring authentic taste without artificial flavors or colors. Each jar contains the goodness of carefully selected fruits.</p>
              </div>
              
              <div className="feature bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Versatile Use</h3>
                <p>Add a burst of flavor to your favorite Keto recipes—blend it into milkshakes, swirl it into yogurt, pair it with cottage cheese, or spread it on your keto-friendly bread.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about py-16 flex flex-col md:flex-row items-center">
          <div className="about-content md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p>
              We're passionate about creating the finest quality jams using locally sourced fruits and traditional recipes. Our commitment to excellence ensures that every jar is packed with natural goodness and irresistible flavors.
            </p>
          </div>
          <div className="about-image md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/images/jam-making.jpg"
              alt="Jam making process"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </section>

        <section id="contact" className="contact py-16 bg-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <form className="w-full md:w-1/2 md:pr-8">
              <input type="text" placeholder="Your Name" required className="w-full mb-4 p-2 rounded-md" />
              <input type="email" placeholder="Your Email" required className="w-full mb-4 p-2 rounded-md" />
              <textarea placeholder="Your Message" required className="w-full mb-4 p-2 rounded-md h-32"></textarea>
              <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">Send Message</button>
            </form>
            <div className="contact-image w-full md:w-1/2 mt-8 md:mt-0">
              <Image
                src="/images/contact-jars.jpg"
                alt="Jars of jam"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 Jam Delight. All rights reserved.</p>
      </footer>
    </>
  )
}

