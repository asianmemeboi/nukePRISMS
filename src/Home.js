import background from "./assets/background.jpg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <div data-scroll-section style={{ height: "200vh" }}>
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
            style={{ fontSize: "400%", fontWeight: "bold", color: "#e3f2fd", paddingTop: "-50vh"}}
          >
            GNEC H2O
          </h1>
      </div>
    </div>
  );
}

export default App;
