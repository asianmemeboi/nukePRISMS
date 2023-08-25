import background from "./assets/background.jpg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <div data-scroll-section style={{ height: "12000px" }}>
        <div
          data-scroll
          data-scroll-speed="0"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        ></div>
          <h1
            style={{ fontSize: "100px", fontWeight: "bold", color: "#e3f2fd" }}
          >
            GNEC H2O
          </h1>
      </div>
    </div>
  );
}

export default App;
