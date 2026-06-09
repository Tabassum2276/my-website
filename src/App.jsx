import fashion from "./assets/products/fashion.jpeg";
import watch from "./assets/products/watch.jpeg";
import beauty from "./assets/products/beauty.jpeg";
import headphones from "./assets/products/headphones.jpeg";
import handbag from "./assets/products/handbag.jpeg";
import shoes from "./assets/products/shoes.jpeg";



import hero from "./assets/hero2.jpg";
import logo from "./assets/logo.png";



function App() {
  const products = [
    { name: "Fashion Wear", price: "₹999", image: fashion },
    { name: "Smart Watch", price: "₹1,499", image: watch },
    { name: "Beauty Kit", price: "₹799", image: beauty },
    { name: "Headphones", price: "₹1,299", image: headphones },
    { name: "Hand Bag", price: "₹899", image: handbag },
    { name: "Shoes", price: "₹1,199", image: shoes },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 bg-white shadow-2xl">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-purple-700">
            Purple Store
          </h1>
        </div>

        <div className="hidden md:flex gap-6 font-medium">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative h-[80vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white px-4">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-lg">
            Welcome To Purple Store
          </h1>

          <p className="text-lg md:text-2xl max-w-2xl mx-auto">
            Discover amazing products at great prices.
          </p>

          <button className="mt-8 bg-purple-600 px-8 py-3 rounded-full text-white font-bold hover:bg-purple-700">
            Shop Now
          </button>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white text-center py-10 shadow-lg">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          🎉 MEGA SALE 🎉
        </h2>

        <p className="mt-4 text-xl md:text-3xl">
          Up To <span className="text-yellow-300 font-bold">50% OFF</span>
        </p>

        <p className="mt-2 text-lg">
          Limited Time Offer - Shop Now!
        </p>
      </section>

      {/* Categories */}
      {/* Categories */}
      <section id="categories" className="py-16 px-6">
        <h2 className="text-6xl md:text-7xl font-extrabold text-center text-purple-700 mb-16">
          Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-gradient-to-br from-purple-200 to-purple-400 p-12 rounded-3xl text-center shadow-2xl hover:scale-110 transition duration-300">
            <div className="text-6xl mb-4">👗</div>
            <h3 className="text-2xl font-bold">Fashion</h3>
          </div>

          <div className="bg-gradient-to-br from-purple-200 to-purple-400 p-12 rounded-3xl text-center shadow-2xl hover:scale-110 transition duration-300">
            <div className="text-6xl mb-4">📱</div>
            <h3 className="text-2xl font-bold">Electronics</h3>
          </div>

          <div className="bg-gradient-to-br from-purple-200 to-purple-400 p-12 rounded-3xl text-center shadow-2xl hover:scale-110 transition duration-300">
            <div className="text-6xl mb-4">💄</div>
            <h3 className="text-2xl font-bold">Beauty</h3>
          </div>

          <div className="bg-gradient-to-br from-purple-200 to-purple-400 p-12 rounded-3xl text-center shadow-2xl hover:scale-110 transition duration-300">
            <div className="text-6xl mb-4">👜</div>
            <h3 className="text-2xl font-bold">Accessories</h3>
          </div>

        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-700 to-pink-600 text-white text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          Premium Shopping Experience
        </h2>

        <p className="text-xl md:text-2xl max-w-4xl mx-auto">
          Fashion, Electronics, Beauty & Accessories —
          Everything you need in one place.
        </p>
      </section>

      {/* Products */}
      <section id="products" className="py-16 px-6 bg-gray-50">
        <h2 className="text-6xl md:text-7xl font-extrabold text-center text-purple-700 mb-14">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl border-2 border-purple-200 p-8 text-center hover:scale-110 transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 md:h-80 object-contain rounded-2xl mb-6 bg-white"
              />
              <h3 className="text-2xl font-bold mb-2">
                {item.name}
              </h3>

              <p className="text-purple-700 font-bold text-xl">
                {item.price}
              </p>

              <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      {/* Reviews */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-purple-50 p-6 rounded-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Amazing products and fast delivery.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Great quality and support.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Highly recommended store.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Best shopping experience ever.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Excellent customer service.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              Fast shipping and great products.
            </p>
          </div>

        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-purple-700 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Us
        </h2>

        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded text-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded text-black"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-4 rounded text-black"
          ></textarea>

          <button
            type="submit"
            className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-lg"
      >
        WhatsApp
      </a>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100">
        © 2026 Purple Store. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;