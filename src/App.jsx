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

  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">
  <img src="/images/logo.png" alt="Vrinda Farms Logo" />
  <span>VRINDA FARMS</span>
</div>

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
      At <strong>Vrinda Farms</strong>, we believe that every family deserves
      fresh, pure, and nutritious dairy products. Our cows are cared for with
      love, fed with quality fodder, and raised in a clean environment. From
      fresh milk to handcrafted ghee, paneer, butter, and curd, every product
      is prepared with care and delivered with freshness you can trust.
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

        <p className="price">
          {product.price}
        </p>

        <a
          href="https://wa.me/919876543210"
          className="order-btn"
          target="_blank"
          rel="noreferrer"
        >
          Order on WhatsApp
        </a>

      </div>

    </div>
  ))}
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

  <h2 className="section-title">
    Why Choose Vrinda Farms?
  </h2>

  <p className="why-subtitle">
    We are committed to delivering fresh, healthy and premium dairy
    products with the highest standards of hygiene and care.
  </p>

  <div className="features">

    <div className="feature-card">
      <div className="feature-icon">🐄</div>
      <h3>Healthy Cows</h3>
      <p>
        Our cows are well cared for and fed with nutritious fodder,
        ensuring healthy and quality milk.
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
      <h3>Fresh Delivery</h3>
      <p>
        Milk and dairy products are delivered fresh from our farm every day.
      </p>
    </div>

    <div className="feature-card">
      <div className="feature-icon">❤️</div>
      <h3>Hygienically Processed</h3>
      <p>
        Every product is prepared and packed with strict hygiene standards.
      </p>
    </div>

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
        We never use artificial preservatives. Every dairy product is
        prepared naturally with freshness you can trust.
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
        Every product is prepared, packed, and handled under strict
        hygienic conditions to ensure quality and safety.
      </p>
    </div>
  </div>
</section>
      
{/* Gallery */}
<section id="gallery" className="premium-gallery">
  
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
