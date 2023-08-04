import background from "./assets/background.jpg";
import free from "./assets/free.png";
import trust from "./assets/quality.png";
import user from "./assets/friends.png";
import accurate from "./assets/accuracy.png";
import water from "./assets/water.png";
import "./App.css";
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

class HomeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: props.name,
      image: props.image,
      imageMargin: props.imageMargin,
      boxText: props.boxText,
      marginTop: 100
    };
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div
      className="homescreenbox"
      id="scrollingdiv"
      style={{ marginLeft: this.state.imageMargin,
              height: "200px",
              marginTop: this.state.marginTop.toString() + "px",
              zIndex: "1",
              overflow: "hidden"}}
    >
        <img src={this.state.image} alt={this.state.name} className="homescreenboximage"></img>
        <h2 className="homescreenboxtext">{this.state.name}</h2>
        <h5 className="homescreenboxtext" style={{padding: "30px"}}>{this.state.boxText}</h5>
      </div>
    );
  }
}

class ProcessSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.header,
      description: props.description,
      image: props.image
    }
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div data-scroll data-scroll-sticky data-scroll-target={`#${this.state.header}`} style={{position: "sticky"}}>
        <div id={this.state.header} style={{position: "relative", top: "-15vh", height: "100vh", float: "left"}}></div>
        <div
        className="process-section-text">
          <h1>{this.state.header}</h1>
          <p>{this.state.description}</p>
        </div>
        <div
        className="process-section-image-wrapper">
          <img className="process-section-image" src={this.state.image} alt={this.state.header}></img>
        </div>
      </div>
    );
  }
}

function updateBoxes(newHeight) {
  let elements = document.getElementsByClassName("homescreenbox");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.height = newHeight.toString() + "px";
  }
}

function App() {
  const scrollRef = React.createRef();

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });

    scroll.on('scroll', (instance) => {
      updateBoxes(Math.min(Math.max(200, instance.scroll.y - 450), 500));
      console.log(instance.scroll.y);
  })

  return () => scroll.destroy();
  });

  return (
    <div ref={scrollRef}>
      <div data-scroll-section style={{height: "10000px"}}>
        <div data-scroll data-scroll-speed="0"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "60vh",
          }}
        ></div>

        <div data-scroll data-scroll-speed="3"
          style={{
            backgroundColor: "darkblue",
            marginTop: "-400px",
            marginLeft: "100px",
            width: "500px",
            height: "390px",
            borderRadius: "60px 60px 0px 0px",
            paddingTop: "70px",
            paddingLeft: "50px",
          }}
        >
          <h1 style={{ fontSize: "100px", fontWeight: "bold", color: "#e3f2fd" }}>
            GNEC <br /> H2O
          </h1>
        </div>

        <div data-scroll data-scroll-speed="3"
          style={{
            marginTop: "-99px",
            backgroundColor: "darkblue",
            height: "400px",
            zIndex: "-100"
          }}
        >
          <h3 style={{fontSize: "70px", color: "#e3f2fd", paddingLeft: "100px"}}>
            <br />
            GNEC H2O is pretty cool <br />
            Test Test Test <br />
            Hi guys, welcome to another video!!!!
          </h3>
        </div>

        <div data-scroll data-scroll-speed="3"
          style={{
            backgroundImage: "linear-gradient(darkblue, aqua)",
            height: "298px",
            marginTop: "-95px",
          }}
        ></div>

        <div data-scroll data-scroll-speed="6" data-scroll-sticky data-scroll-target="#something" style={{position: "relative", zIndex: "1"}}>
          <HomeBox name="Free-to-use" image={free} imageMargin="140px" boxText="hi guys, welcome to another video!!! lorem ipsum I don't know what the hell to write here hee hee hee haw test test test tes tes tes hahahahahahaha"/>
          <HomeBox name="Trustworthy" image={trust} imageMargin="50px" boxText=""/>
          <HomeBox name="User-friendly" image={user} imageMargin="50px" boxText=""/>
          <HomeBox name="Accurate" image={accurate} imageMargin="50px" boxText=""/>
        </div>

        <div data-scroll data-scroll-speed="3" style={{ marginTop: "-211px", backgroundColor: "aqua", height: "1500px", zIndex: "-100" }}></div>

        <div id="something" style={{position: "absolute", top: "1150px", height: "1000px"}}></div>

        <div data-scroll data-scroll-speed="3"
          style={{
            // backgroundImage: `url(${water})`,
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // height: "60vh",
            position:"absolute",
            marginTop: "-400px",
            zIndex: "2",
          }}
        >
          <img src={water} alt="water" style={{zIndex: "2", width: "100vw"}}></img>
        </div>

        <div data-scroll data-scroll-speed="3"
          style={{
            position:"absolute",
            backgroundColor: "#289fdc",
            marginTop: "-530px",
            height: "5000px",
            width: "100vw",
            zIndex: "2"
          }}
        >
        </div>
        
        <div style={{zIndex: "3", position:"absolute"}}>
          <h1 data-scroll data-scroll-speed="4" style={{textAlign: "center", color: "#e3f2fd", fontSize: "100px"}}>Our Process</h1>
          <div style={{height: "20vh"}}></div>
          <ProcessSection header="header" description="description" image={water}/>
          <div style={{height: "150vh"}}></div>
          <ProcessSection header="header2" description="description2" image={water}/>
        </div>

      </div>
    </div>
  );
}

export default App;
