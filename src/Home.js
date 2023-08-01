import background from "./assets/background.jpg";
import free from "./assets/free.png";
import "./App.css";
import React from 'react';
import trust from "./assets/quality.png";
import user from "./assets/friends.png";
import accurate from "./assets/accuracy.png";
import ScrollContainer from "./Parallax/ScrollContainer";
import ParallaxElement from "./Parallax/ParallaxElement"; 

class HomeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: props.name,
      image: props.image,
      imageMargin: props.imageMargin,
      boxHeight: 200,
      marginTop: -250
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.render = this.render.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let scrollTop = window.scrollY;
    this.setState({ boxHeight: Math.min(scrollTop + 200, 400) });
    // this.state.boxHeight = Math.max(30, 200 - scrollTop);
  }

  render() {
    return (
      <div
      className="homescreenbox"
      id="scrollingdiv"
      style={{ marginLeft: this.state.imageMargin,
              height: this.state.boxHeight.toString() + "px",
              marginTop: this.state.marginTop.toString() + "px"}}
    >
        <img src={this.state.image} alt={this.state.name} className="homescreenboximage"></img>
        <h2 className="homescreenboxtext">{this.state.name}</h2>
      </div>
    );
  }
}

function App() {
  return (
    <ScrollContainer>
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
      
      <ParallaxElement dataPercent="20">
        <HomeBox name="Free-to-use" image={free} imageMargin="140px" />
        <HomeBox name="Trustworthy" image={trust} imageMargin="540px" />
        <HomeBox name="User-friendly" image={user} imageMargin="940px" />
        <HomeBox name="Accurate" image={accurate} imageMargin="1340px" />
      </ParallaxElement>

      <div style={{ backgroundColor: "aqua", height: "1000px" }}></div>
    </ScrollContainer>
  );
}

export default App;
