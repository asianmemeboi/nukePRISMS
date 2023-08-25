// import background from "./assets/background.jpg";
import CoolBackground from "./components/CoolBackground.js";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <div style={{ height: "200vh" }}>
        <CoolBackground />
        <div
          style={{
            // backgroundImage: `url(${background})`,
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            height: "100vh",
            paddingTop: "25vh",
          }}
        >
          <h1
            style={{
              fontSize: "600%",
              fontWeight: "bold",
              color: "#e3f2fd",
              textAlign: "center",
            }}
          >
            nukePRISMS:
          </h1>
          <h2
            style={{
              fontSize: "250%",
              color: "#e3f2fd",
              paddingTop: "2vh",
              textAlign: "center",
            }}
          >
            {" "}
            Made by Students, For Students
          </h2>
          <a className="button glow-button">Get Started</a>
        </div>
      </div>
    </div>
  );
}

export default App;
