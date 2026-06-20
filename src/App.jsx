import React from "react";

export default function App() {
  const gallery = [
    "/images/farm1.jpg",
    "/images/farm2.jpg",
    "/images/farm3.jpg",
    "/images/farm4.jpg",
    "/images/farm5.jpg",
    "/images/farm6.jpg",
  ];

  const products = [
    {
      name: "Fresh Cow Milk",
      price: "₹60 / Litre",
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=800",
    },
    {
      name: "Curd",
      price: "₹80 / Kg",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
    },
    {
      name: "Ghee",
      price: "₹650 / Kg",
      image:
        "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=800",
    },
    {
      name: "Paneer",
      price: "₹350 / Kg",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800",
    },
  ];

  return (
    <div className="bg-white text-gray-800">

      {/* Navbar */}
      <nav className="bg-green-900 text-white px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            FARM TO DOOR DAIRY
          </h1>

          <div className="hidden md:flex gap-6">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#farm">Farm</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('/images/hero.jpg')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Fresh Milk From Our Farm To Your Door
            </h1>

            <p className="text-xl mb-8 max-w-2xl">
              Pure, hygienic and farm fresh dairy products delivered
              directly from our dairy farm in Hyderabad.
            </p>

            <a
              href="#products"
              className="bg-yellow-500 px-8 py-4 rounded-lg text-black font-bold"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <img
            src="/images/farmer.jpg"
            alt=""
            className="rounded-2xl shadow-xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6 text-green-900">
              About Our Farm
            </h2>

            <p className="text-lg leading-8">
              FARM TO DOOR DAIRY is committed to delivering
              fresh and nutritious dairy products directly from our farm.
              Our healthy cattle, clean environment and hygienic
              milking process ensure quality in every drop.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section
        id="products"
        className="bg-gray-100 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Our Products
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {products.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-green-700 font-semibold my-3">
                    {item.price}
                  </p>

                  <button className="bg-green-900 text-white px-5 py-2 rounded">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm */}
      <section id="farm" className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Our Farm
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="font-bold text-2xl mb-3">
                Healthy Cattle
              </h3>

              <p>
                Our cows receive nutritious feed and regular veterinary care.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="font-bold text-2xl mb-3">
                Hygienic Milking
              </h3>

              <p>
                Milk is collected using clean and safe practices.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="font-bold text-2xl mb-3">
                Farm Fresh Delivery
              </h3>

              <p>
                Direct delivery from farm to customer without middlemen.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="gallery"
        className="bg-gray-100 py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Farm Gallery
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="rounded-xl shadow-lg h-72 w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-green-900 mb-8">
            Contact Us
          </h2>

          <p className="text-xl mb-4">
            📞 +91 99999999
          </p>

          <p className="text-xl mb-4">
            📍 Hyderabad, Telangana
          </p>

          <p className="text-xl mb-8">
            ✉ info@farmtodoordairy.com
          </p>

          <a
            href="https://wa.me/9199999999"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold"
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white text-center py-6">
        © 2026 FARM TO DOOR DAIRY | Hyderabad, Telangana
      </footer>
    </div>
  );
}
