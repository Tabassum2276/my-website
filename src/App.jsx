import hero from "./assets/hero2.jpg";
import logo from "./assets/logo.png";

function App() {
  const products = [
    { name: "Fashion Wear", price: "₹999" },
    { name: "Smart Watch", price: "₹1,499" },
    { name: "Beauty Kit", price: "₹799" },
    { name: "Headphones", price: "₹1,299" },
    { name: "Hand Bag", price: "₹899" },
    { name: "Shoes", price: "₹1,199" },
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 shadow-md">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
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

      {/* Categories */}
      <section id="categories" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">
          Categories
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-purple-100 p-6 rounded-xl text-center">👗 Fashion</div>
          <div className="bg-purple-100 p-6 rounded-xl text-center">📱 Electronics</div>
          <div className="bg-purple-100 p-6 rounded-xl text-center">💄 Beauty</div>
          <div className="bg-purple-100 p-6 rounded-xl text-center">👜 Accessories</div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition"
            >
              <div className="h-40 bg-purple-100 rounded-xl mb-4 flex items-center justify-center text-5xl">
                🛍️
              </div>

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