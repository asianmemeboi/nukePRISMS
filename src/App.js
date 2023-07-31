import NavBar from "./components/NavBar";
import background from "./assets/background.jpg";
import free from "./assets/free.png";
import "./App.css";
import trust from "./assets/quality.png";
import user from "./assets/friends.png";
import accurate from "./assets/accuracy.png";

function Homebox(name, image) {
  return (
    <div
    className="homescreenbox"
    id="scrollingdiv"
    style={{ marginLeft: "140px" }}
  >
      <img src={{image}} alt={name} className="homescreenboximage"></img>
      <h2 className="homescreenboxtext">{name}</h2>
    </div>
  )
}

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

      
      { Homebox("Free-to-use", free) }
      
      <div
        className="homescreenbox"
        id="scrollingdiv"
        style={{ marginLeft: "540px" }}
      >
        <img src={trust} alt="free" className="homescreenboximage"></img>
        <h2 className="homescreenboxtext">Trustworthy</h2>
      </div>
      <div
        className="homescreenbox"
        id="scrollingdiv"
        style={{ marginLeft: "940px" }}
      >
        <img src={user} alt="free" className="homescreenboximage"></img>
        <h2 className="homescreenboxtext" style={{ marginLeft: "-5px" }}>
          User-friendly
        </h2>
      </div>
      <div
        className="homescreenbox"
        id="scrollingdiv"
        style={{ marginLeft: "1340px" }}
      >
        <img src={accurate} alt="free" className="homescreenboximage"></img>
        <h2 className="homescreenboxtext" style={{ marginLeft: "15px" }}>
          Accurate
        </h2>
      </div>
      <div style={{ backgroundColor: "aqua", height: "1000px" }}></div>
    </>
  );
}

export default App;
