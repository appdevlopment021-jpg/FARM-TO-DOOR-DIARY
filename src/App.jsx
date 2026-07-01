import { useState } from "react";

export default function App() {
  
  const gallery = [
  "/images/farm1.jpg",
  "/images/farm2.jpg",
  "/images/farm3.jpg",
  "/images/farm4.jpg",
  "/images/farm5.jpg",
];
const products = [
  {
    name: "Fresh Milk",
    price: "₹70 / Litre",
    image: "/images/milk.jpg",
    badge: "🥛 Fresh Today",
  },
  {
    name: "Curd",
    price: "₹100 / Kg",
    image: "/images/curd.jpg",
    badge: "🌿 Farm Fresh",
  },
  {
    name: "Pure Ghee",
    price: "₹900 / Litre",
    image: "/images/ghee.jpg",
    badge: "⭐ Best Seller",
  },
  {
    name: "Paneer",
    price: "₹380 / Kg",
    image: "/images/paneer.jpg",
    badge: "🧀 Homemade",
  },
  {
    name: "Butter",
    price: "₹550 / Kg",
    image: "/images/butter.jpg",
    badge: "🥛 Fresh Churned",
  },
  {
    name: "Cheese",
    price: "₹650 / Kg",
    image: "/images/cheese.jpg",
    badge: "🧀 Premium",
  },
];
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div>
      {/* Header */}
  <header>

  <div className="logo">
    <img src="/images/logo.png" alt="Vrinda Farms Logo" />
    <span>VRINDA FARMS</span>
  </div>

  <div
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </div>

  <nav className={menuOpen ? "nav active" : "nav"}>
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
    <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  </nav>

</header>

  {/* Hero */}
<section
  className="hero"
  style={{
    backgroundImage: "url('/images/hero.jpg')",
  }}
>
  <div className="hero-overlay">

    <div className="hero-card">

      <span className="hero-tag">
        🌿 Welcome to Vrinda Farms
      </span>

      <h1>
        Farm Fresh Dairy,
        <br />
        Naturally Pure
      </h1>

      <p>
        Fresh milk, curd, ghee, paneer, butter and cheese
        produced with love and delivered directly from
        our farm to your family.
      </p>

      <div className="hero-buttons">

        <a href="#products" className="primary-btn">
          Explore Products
        </a>

        <a
          href="https://wa.me/919876543210"
          className="secondary-btn"
          target="_blank"
          rel="noreferrer"
        >
          Order on WhatsApp
        </a>

      </div>

      <div className="scroll-down">
        ↓ Scroll Down
      </div>

    </div>

  </div>
</section>

{/* About */}
<section id="about">
  <h2 className="section-title">About Vrinda Farms</h2>

  <div className="about">
    <p>
      At <strong>Vrinda Farms</strong>, we believe every family deserves
      fresh, pure and nutritious dairy products. Our cows are cared for
      with love and raised in a clean environment using quality fodder.

      <br /><br />

      From fresh milk to handcrafted ghee, curd, butter, paneer and
      cheese, every product is prepared with care and delivered directly
      from our farm to your family with complete freshness.
    </p>
  </div>
</section>     
      
     

      {/* Products */}
<section id="products">
  <h2 className="section-title">Our Products</h2>

  <div className="products">
    {products.map((product, index) => (
      <div className="product-card" key={index}>
        <span className="badge">
          {product.badge}
        </span>

        <img src={product.image} alt={product.name} />

        <div className="product-content">
          <h3>{product.name}</h3>

          <p className="price">{product.price}</p>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="order-btn"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    ))}
  </div>
</section>
{/* Why Choose Us */}
<section className="why-us">
  <h2 className="section-title">Why Choose Vrinda Farms?</h2>

  <p className="why-subtitle">
    We are committed to delivering fresh, pure, and high-quality dairy
    products with love, hygiene, and care from our farm to your family.
  </p>

  <div className="features">
    <div className="feature-card">
      <div className="feature-icon">🐄</div>
      <h3>Healthy Cows</h3>
      <p>
        Our cows are raised in a clean environment and cared for with
        nutritious feed to produce healthy, fresh milk.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">🌿</div>
      <h3>100% Natural</h3>
      <p>
        No preservatives. No artificial additives. Just pure farm-fresh
        dairy products.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">🚚</div>
      <h3>Fresh Daily Delivery</h3>
      <p>
        Fresh milk and dairy products are delivered directly from our
        farm to your doorstep every day.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">❤️</div>
      <h3>Hygienically Processed</h3>
      <p>
        Every product is prepared and packed under strict hygiene
        standards to ensure quality and safety.
      </p>
    </div>
  </div>
</section>
      
      {/* Statistics */}
<section className="stats">

  <div className="stat-card">
    <h2>2000+</h2>
    <p>Happy Customers</p>
  </div>

  <div className="stat-card">
    <h2>50+</h2>
    <p>Healthy Cows</p>
  </div>

  <div className="stat-card">
    <h2>10+</h2>
    <p>Years of Experience</p>
  </div>

  <div className="stat-card">
    <h2>200+</h2>
    <p>Fresh Milk Daily</p>
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

      {/* Testimonials */}
<section className="testimonials">
  <h2 className="section-title">What Our Customers Say</h2>

  <div className="testimonial-grid">

    <div className="testimonial-card">
      <p>
        "Fresh milk every morning. Excellent quality and great service!"
      </p>
      <h4>★★★★★</h4>
      <span>— Ramesh Kumar</span>
    </div>

    <div className="testimonial-card">
      <p>
        "The ghee tastes exactly like homemade. My family loves it."
      </p>
      <h4>★★★★★</h4>
      <span>— Priya Sharma</span>
    </div>

    <div className="testimonial-card">
      <p>
        "Very hygienic dairy products with fast delivery."
      </p>
      <h4>★★★★★</h4>
      <span>— Suresh Reddy</span>
    </div>

  </div>
</section>
      

    {/* Contact */}
<section id="contact" className="contact">

  <h2 className="section-title">Get In Touch</h2>

  <div className="contact-box">

    <div className="contact-item">
      <h3>📍 Address</h3>
      <p>Hyderabad, Telangana</p>
    </div>

    <div className="contact-item">
      <h3>📞 Phone</h3>
      <p>+91 9876543210</p>
    </div>

    <div className="contact-item">
      <h3>✉ Email</h3>
      <p>vrindafarms@gmail.com</p>
    </div>

  </div>

  <a
    href="https://wa.me/919876543210"
    className="whatsapp-btn"
    target="_blank"
    rel="noreferrer"
  >
    Order on WhatsApp
  </a>

</section>

      {/* Newsletter */}
<section className="newsletter">
  <div className="newsletter-content">
    <h2>Stay Connected with Vrinda Farms</h2>

    <p>
      Subscribe to receive updates about fresh dairy products,
      special offers, and seasonal farm news.
    </p>

    <form className="newsletter-form">
      <input
        type="email"
        placeholder="Enter your email"
      />

      <button type="submit">
        Subscribe
      </button>
    </form>
  </div>
</section>
      

      <footer>
        © 2026 VRINDA FARMS | Fresh Dairy Products
      </footer>

      {/* Floating WhatsApp */}
<a
  href="https://wa.me/919876543210"
  className="floating-whatsapp"
  target="_blank"
  rel="noreferrer"
>
  💬
</a>
      
    </div>
  );
}
