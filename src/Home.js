// import background from "./assets/background.jpg";
import CoolBackground from "./components/CoolBackground.js";
import "./App.css";
import React, {useEffect} from "react";

function App() {
  useEffect(
    () => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      }
    }, []
  );
  return (
    <div>
      <CoolBackground />
      <div
        style={{
          // backgroundImage: `url(${background})`,
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          height: "94vh",
          paddingTop: "25 vh",
        }}
      >
        <div style={{height: "40vh"}}>
          
        </div>
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
          Made by Students, For Students
        </h2>
        <div style={{ height: "10vh" }}></div>
        <a href="#0" className="button glow-button">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default App;
