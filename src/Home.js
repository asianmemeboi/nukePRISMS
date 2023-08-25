import background from "./assets/background.jpg";
import CoolBackground from "./components/CoolBackground.js";
import "./App.css";
import React from "react";

function App() {
  return (
    <div>
      <div style={{ height: "200vh" }}>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
            paddingTop: "50vh"
          }}
        ><h1
        style={{ fontSize: "400%", fontWeight: "bold", color: "#e3f2fd", }}
      >
        nukePRISMS: Made by Students, For Students
      </h1></div>
          
      </div>
      <CoolBackground />
    </div>
  );
}

export default App;
