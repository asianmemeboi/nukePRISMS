import background from "./assets/background.jpg";
import "./App.css";
import React, { useEffect } from "react";

function App() {
  return (
    <div ref={scrollRef}>
      <div data-scroll-section style={{ height: "12000px" }}>
        <div
          data-scroll
          data-scroll-speed="0"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "60vh",
          }}
        ></div>

        <div
          data-scroll
          data-scroll-speed="3"
          style={{
            backgroundColor: "darkblue",
            marginTop: "-400px",
            marginLeft: "100px",
            width: "500px",
            height: "390px",
            borderRadius: "60px 60px 0px 0px",
            paddingTop: "70px",
            paddingLeft: "50px",
          }}
        >
          <h1
            style={{ fontSize: "100px", fontWeight: "bold", color: "#e3f2fd" }}
          >
            GNEC <br /> H2O
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
