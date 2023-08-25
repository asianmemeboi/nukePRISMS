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
            paddingTop: "30vh"
          }}
        ><h1
        style={{ fontSize: "500%", fontWeight: "bold", color: "#e3f2fd", }}
      >
        nukePRISMS: 
      </h1>
      <h2 style={{ fontSize: "400%", fontWeight: "bold", color: "#e3f2fd", paddingTop: "10vh"}}> Made by Students, For Students</h2>
      </div>
      <CoolBackground />
      </div>
    </div>
  );
}

export default App;
