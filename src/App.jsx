
import hero from "./assets/hero2.jpg";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-yellow-600">
        <h1 className="text-3xl font-bold text-yellow-500">
          My Website
        </h1>

        <div className="space-x-6 hidden md:block">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-500 mb-6">
            My Website
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            Premium IT Solutions, Web Development, Mobile Apps,
            Cloud Services and Digital Transformation.
          </p>

          <button className="mt-8 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-500 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              Web Development
            </h3>
            <p className="text-gray-300">
              Responsive websites built with modern technologies.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-500 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              Mobile Apps
            </h3>
            <p className="text-gray-300">
              Android and iOS apps designed for business growth.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-500 hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              Cloud Solutions
            </h3>
            <p className="text-gray-300">
              Secure and scalable cloud infrastructure.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-950">
        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">100+</h3>
            <p>Projects</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">50+</h3>
            <p>Clients</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">10+</h3>
            <p>Experts</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold text-yellow-500">24/7</h3>
            <p>Support</p>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-8 text-center"
      >
        <h2 className="text-4xl font-bold text-yellow-500 mb-6">
          About Us
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-8">
          We help businesses grow through innovative technology,
          modern web applications, cloud infrastructure,
          and digital transformation strategies.
        </p>
      </section>

      <section className="py-20 px-8 bg-black">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
          Client Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl">
            <p>"Amazing service and support."</p>
            <h4 className="mt-4 text-yellow-500">John Smith</h4>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <p>"Professional team and fast delivery."</p>
            <h4 className="mt-4 text-yellow-500">Sarah Johnson</h4>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <p>"Highly recommended for IT solutions."</p>
            <h4 className="mt-4 text-yellow-500">David Wilson</h4>
          </div>
        </div>
      </section>

      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h3 className="text-xl font-bold">
              How long does a website take?
            </h3>
            <p className="text-gray-300">
              Most websites are delivered within 1–3 weeks.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold">
              Do you provide support?
            </h3>
            <p className="text-gray-300">
              Yes, we provide ongoing support and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-4 rounded bg-gray-800 border border-yellow-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-4 rounded bg-gray-800 border border-yellow-500"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-4 rounded bg-gray-800 border border-yellow-500"
        ></textarea>

        <button
          type="submit"
          className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold"
        >
          Send Message
        </button>
      </form>

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
      <footer className="text-center py-6 border-t border-yellow-600">
        © 2026 My Website. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;