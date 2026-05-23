import React, { useState, useEffect } from "react";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [1, 2];
  const footerHeight = 60; // px
  const intervalTime = 5000; // 5 seconds

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden", // hide scrollbars
      }}
    >
      {/* SLIDER WRAPPER */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden", // hide horizontal scrollbar
        }}
      >
        {/* SLIDES */}
        <div
          style={{
            display: "flex",
            width: `${slides.length * 100}%`,
            height: `calc(100vh - ${footerHeight}px)`,
            transform: `translateX(-${currentSlide * 50}%)`, // right-to-left
            transition: "transform 1s ease",
          }}
        >
          {/* SLIDE 1 */}
          <div
            style={{
              width: `${100 / slides.length}%`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#fff3e0",
            }}
          >
            <div
              style={{
                width: "60%",
                padding: "30px",
                textAlign: "center",
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h1 style={{ fontSize: "32px", marginBottom: "15px" }}>
                Madhuram Restaurant: A Royal Beginning 👑
              </h1>
              <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
                In Hyderabad, the locals longed for delicious food. The Nizam
                established Mandhuram Restaurant to satisfy the cravings of food
                lovers.
              </p>
            </div>
          </div>

          {/* SLIDE 2 */}
          <div
            style={{
              width: `${100 / slides.length}%`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#e3f2fd",
            }}
          >
            <div
              style={{
                width: "60%",
                padding: "30px",
                textAlign: "center",
                borderRadius: "15px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h1 style={{ fontSize: "32px", marginBottom: "15px" }}>
                The Famous Royal Thali 👑
              </h1>
              <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
                Our Royal Thali brings together flavors, textures, and aromas on
                a single platter.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          height: `${footerHeight}px`,
          background: "#222",
          color: "#fff",
          textAlign: "center",
          lineHeight: `${footerHeight}px`,
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Madhuram Restaurant — All Rights Reserved
      </div>
    </div>
  );
}

export default Home;