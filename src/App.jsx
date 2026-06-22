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
    name: "Fresh Milk",
    price: "₹70 / Litre",
    image: "/images/milk.jpg",
  },
  {
    name: "Curd",
    price: "₹100 / Kg",
    image: "/images/curd.jpg",
  },
  {
    name: "Pure Ghee",
    price: "₹900 / Litre",
    image: "/images/ghee.jpg",
  },
  {
    name: "Paneer",
    price: "₹380 / Kg",
    image: "/images/paneer.jpg",
  },
  {
    name: "Butter",
    price: "₹550 / Kg",
    image: "/images/butter.jpg",
  },
  {
    name: "Cheese",
    price: "₹650 / Kg",
    image: "/images/cheese.jpg",
  },
];

  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">VRINDA FARMS</div>

        <nav>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="hero-content">
          <h1>Fresh Dairy Products From Farm To Door</h1>

          <p>
            Pure Milk • Curd • Ghee • Paneer • Butter • Cheese
          </p>

          <a
            href="https://wa.me/919876543210"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <h2 className="section-title">About VRINDA FARMS</h2>

        <div className="about">
          <p>
            At VRINDA FARMS, we are committed to delivering fresh,
            nutritious, and high-quality dairy products directly from
            our farm to your doorstep. Our cows are cared for with love,
            ensuring purity and freshness in every product we offer.
          </p>
        </div>
      </section>
      
      {/* Products */}
<section id="products">
  <h2 className="section-title">Our Products</h2>

  <div className="products">
    {products.map((product, index) => (
      <div className="product-card" key={index}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="price">{product.price}</p>
      </div>
    ))}
  </div>
</section>

      {/* Gallery */}
<section id="gallery" className="premium-gallery">
  <h2 className="section-title">Life at VRINDA FARMS</h2>

  <div className="gallery-grid">
    {gallery.map((img, index) => (
      <div className="gallery-card" key={index}>
        <img src={img} alt={`Farm ${index + 1}`} />
      </div>
    ))}
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>

        <p>📍 Hyderabad, Telangana</p>
        <p>📞 9876543210</p>

        <a
          href="https://wa.me/919876543210"
          className="whatsapp-btn"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Us
        </a>
      </section>

      <footer>
        © 2026 VRINDA FARMS | Fresh Dairy Products
      </footer>
    </div>
  );
}
