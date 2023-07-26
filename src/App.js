import { useState } from "react";
import { NavBar } from "./components/NavBar";
import background from "./assets/background.jpg";

function App() {
  return (
    <>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "60vh",
        }}
      ></div>
    </>
  );
}

export default App;
