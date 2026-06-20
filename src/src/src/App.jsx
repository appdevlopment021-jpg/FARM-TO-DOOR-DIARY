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

  return (
    <>
      <nav
        style={{
          background:"#1b4332",
          color:"white",
          padding:"15px 30px",
          display:"flex",
          justifyContent:"space-between"
        }}
      >
        <h2>FARM TO DOOR DAIRY</h2>
      </nav>

      <section
        style={{
          backgroundImage:"url('/images/hero.jpg')",
          height:"90vh",
          backgroundSize:"cover",
          backgroundPosition:"center",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          color:"white",
          textAlign:"center"
        }}
      >
        <div>
          <h1 style={{fontSize:"60px"}}>
            Fresh Milk From Our Farm To Your Door
          </h1>

          <p>
            Pure • Fresh • Hygienic
          </p>
        </div>
      </section>

      <section className="container">
        <h2>About Us</h2>
        <br/>

        <img
          src="/images/farmer.jpg"
          alt=""
          width="100%"
        />

        <br/><br/>

        <p>
          FARM TO DOOR DAIRY delivers farm-fresh milk,
          curd, paneer and ghee directly from our dairy
          farm in Hyderabad, Telangana.
        </p>
      </section>

      <section
        style={{
          background:"#f5f5f5",
          padding:"60px 0"
        }}
      >
        <div className="container">

          <h2>Our Products</h2>

          <br/>

          <ul>
            <li>Fresh Cow Milk</li>
            <li>Buffalo Milk</li>
            <li>Curd</li>
            <li>Paneer</li>
            <li>Ghee</li>
          </ul>

        </div>
      </section>

      <section className="container">
        <h2>Our Farm</h2>

        <br/>

        <p>
          Healthy cattle, hygienic milking,
          quality feed and direct delivery.
        </p>
      </section>

      <section
        style={{
          background:"#f5f5f5",
          padding:"60px 0"
        }}
      >
        <div className="container">

          <h2>Gallery</h2>

          <br/>

          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
              gap:"20px"
            }}
          >
            {gallery.map((img,index)=>(
              <img
                key={index}
                src={img}
                alt=""
                style={{
                  width:"100%",
                  height:"250px",
                  objectFit:"cover"
                }}
              />
            ))}
          </div>

        </div>
      </section>

      <section
        className="container"
        style={{
          textAlign:"center"
        }}
      >
        <h2>Contact Us</h2>

        <br/>

        <p>📞 +91 99999999</p>
        <p>📍 Hyderabad, Telangana</p>
        <p>✉ info@farmtodoordairy.com</p>

        <br/>

        <a
          href="https://wa.me/9199999999"
          style={{
            background:"green",
            color:"white",
            padding:"12px 20px",
            textDecoration:"none"
          }}
        >
          WhatsApp Us
        </a>
      </section>

      <footer
        style={{
          background:"#1b4332",
          color:"white",
          textAlign:"center",
          padding:"20px",
          marginTop:"30px"
        }}
      >
        © FARM TO DOOR DAIRY
      </footer>
    </>
  );
}
