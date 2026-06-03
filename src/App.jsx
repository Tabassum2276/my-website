function App() {
  return (
    <div className="font-sans">

      {/* Navbar */}
      <nav className="bg-slate-900 text-white px-8 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Website</h1>

        <ul className="hidden md:flex gap-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-28 px-6 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          My Website
        </h1>

        <p className="text-xl max-w-3xl mx-auto mb-8">
          Professional IT Solutions, Web Development, Mobile Apps,
          Cloud Services and Digital Transformation for modern businesses.
        </p>

        <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
          Get Started
        </button>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Web Development
            </h3>
            <p>
              Fast, responsive and modern business websites.
            </p>
          </div>

          <div className="shadow-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Mobile Apps
            </h3>
            <p>
              Android and iOS applications built for growth.
            </p>
          </div>

          <div className="shadow-xl p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-3">
              Cloud Solutions
            </h3>
            <p>
              Secure and scalable cloud infrastructure services.
            </p>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 text-white py-20">
        <div className="grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-5xl font-bold">100+</h3>
            <p>Projects</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">50+</h3>
            <p>Clients</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">5+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">24/7</h3>
            <p>Support</p>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-8 bg-gray-100 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          About Us
        </h2>

        <p className="max-w-3xl mx-auto text-lg leading-8">
          My Website is an innovative IT company providing
          software development, web solutions, cloud services,
          and digital transformation strategies for businesses
          worldwide.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Expert Team
            </h3>
            <p>Experienced developers and consultants.</p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Modern Technology
            </h3>
            <p>Latest frameworks and cloud solutions.</p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-bold mb-3">
              Fast Delivery
            </h3>
            <p>On-time project completion and support.</p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-slate-900 text-white py-20 px-8 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Contact Us
        </h2>

        <p>Email: info@mywebsite.com</p>
        <p>Phone: +91 9876543210</p>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        © 2026 My Website. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;