import { NavBar } from "./components/NavBar";
import background from "./assets/background.jpg";
import free from "./assets/free.png";
import "./App.css";
import trust from "./assets/quality.png";
import user from "./assets/friends.png";
import accurate from "./assets/accuracy.png";

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

      <div
        style={{
          backgroundColor: "darkblue",
          marginTop: "-400px",
          marginLeft: "100px",
          width: "500px",
          height: "400px",
          borderRadius: "60px 60px 0px 0px",
          paddingTop: "70px",
          paddingLeft: "50px",
        }}
      >
        <h1 style={{ fontSize: "100px", fontWeight: "bold", color: "#e3f2fd" }}>
          GNEC <br /> H2O
        </h1>
      </div>

      <div
        style={{
          backgroundImage: "linear-gradient(darkblue, aqua)",
          height: "298px",
        }}
      ></div>

      <div className="homescreenbox" style={{ marginLeft: "140px" }}>
        <img src={free} className="homescreenboximage"></img>
        <h2 className="homescreenboxtext">Free-to-use</h2>
      </div>
      <div className="homescreenbox" style={{ marginLeft: "540px" }}>
        <img src={trust} className="homescreenboximage"></img>
        <h2 className="homescreenboxtext">Trustworthy</h2>
      </div>
      <div className="homescreenbox" style={{ marginLeft: "940px" }}>
        <img src={user} className="homescreenboximage"></img>
        <h2 className="homescreenboxtext" style={{ marginLeft: "-5px" }}>
          User-friendly
        </h2>
      </div>
      <div className="homescreenbox" style={{ marginLeft: "1340px" }}>
        <img src={accurate} className="homescreenboximage"></img>
        <h2 className="homescreenboxtext" style={{ marginLeft: "15px" }}>
          Accurate
        </h2>
      </div>
    </>
  );
}

export default App;
