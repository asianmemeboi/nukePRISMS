import NavBar from "./components/NavBar";
import background from "./assets/background.jpg";
import free from "./assets/free.png";
import "./App.css";
import trust from "./assets/quality.png";
import user from "./assets/friends.png";
import accurate from "./assets/accuracy.png";

function Homebox(name, image, imageMargin) {
  return (
    <div
    className="homescreenbox"
    id="scrollingdiv"
    style={{ marginLeft: imageMargin }}
  >
      <img src={image} alt={name} className="homescreenboximage"></img>
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
          backgroundAttachment: "fixed",
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

      
      { Homebox("Free-to-use", free, "140px") }
      { Homebox("Trustworthy", trust, "540px") }
      { Homebox("User-friendly", user, "940px") }
      { Homebox("Accurate", accurate, "1340px") }

      <div style={{ backgroundColor: "aqua", height: "1000px" }}></div>
    </>
  );
}

function $(x) {
  return document.getElementById(x);
}

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var maxHeight = -1;
  if (scrollTop < 200) {
      maxHeight = 150;
  } else if (scrollTop > 400) {
      maxHeight = 75;
  } else {
      maxHeight = 150 - 75 * ((scrollTop - 200)) / 200;
  }
  $('#scrollingdiv').css({
      'margin-top': -maxHeight + "px"
  });
})

export default App;
