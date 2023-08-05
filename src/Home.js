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
      image: props.image,
      id: props.header.replace(/\s/g, ''),
      side: props.side
    }
    this.render = this.render.bind(this);
  }

  render() {
    if (this.state.side === "left") {
      return (
        <div data-scroll data-scroll-sticky data-scroll-target={`#${this.state.id}`} style={{position: "sticky"}}>
          <div id={this.state.id} style={{position: "relative", top: "-15vh", height: "100vh", float: "left"}}></div>
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
    } else {
      return (
        <div data-scroll data-scroll-sticky data-scroll-target={`#${this.state.id}`} style={{position: "sticky"}}>
          <div id={this.state.id} style={{position: "relative", top: "-15vh", height: "100vh", float: "left"}}></div>
          <div
          className="process-section-image-wrapper">
            <img className="process-section-image" src={this.state.image} alt={this.state.header}></img>
          </div>
          <div
          className="process-section-text">
            <h1>{this.state.header}</h1>
            <p>{this.state.description}</p>
          </div>
        </div>
      );
    }
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
            Get comprehensive information on <br />
            water quality from sources all over the world. <br />
            All submissions are carefully vetted and checked.
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
          <HomeBox name="Free-to-use" image={free} imageMargin="140px" boxText="GNEC H2O will send water tests to you, for free. In addition, all data that we collect is available to the public, at no cost."/>
          <HomeBox name="Trustworthy" image={trust} imageMargin="50px" boxText="GNEC H2O carefully vets its submissions and ensures that spam or illegitimate submissions are not entered."/>
          <HomeBox name="User-friendly" image={user} imageMargin="50px" boxText="GNEC H2O is easy to use. Our data can be seen on our website, and we will send easy, simple-to-use water tests to you, free of charge."/>
          <HomeBox name="Accurate" image={accurate} imageMargin="50px" boxText="GNEC H2O uses high quality water tests, and sends them to locations all over the world. We provide high quality water data that's both precise, and accurate."/>
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
            marginTop: "-1230px",
            height: "10000px",
            width: "100vw",
            zIndex: "2"
          }}
        >
        </div>
        
        <div style={{zIndex: "3", position:"absolute"}}>
          <h1 data-scroll data-scroll-speed="4" style={{textAlign: "center", width: "100vw", color: "#e3f2fd", fontSize: "100px"}}>Our Process</h1>
          <div style={{height: "20vh"}}></div>
          <ProcessSection header="Request a Test" description="After signing up or logging in, request a sample from us using the link on the navigation bar, or at the link below. After providing some key information, GNEC H2O will handle everything else, free of charge. This includes obtaining the test and shipping the test. In order to prevent spam or illegitimate submissions, we will not provide tests to accounts for a short period after one has been requested." image={water} side="left"/>
          <div style={{height: "150vh"}}></div>
          <ProcessSection header="Perform the Test" description="Once you have received the test, there will be instructions included to help guide you through using the test properly. If there are any difficulties, GNEC H2O has support agents that can assist you, at any time. We are committed to making water testing as easy and simple as possible, because high-quality water data should be available to everyone." image={water} side="right"/>
          <div style={{height: "150vh"}}></div>
          <ProcessSection header="Send the Test Back" description="After you perform the water test, submit a picture of the water test to GNEC H2O on our website through the link on the navigation bar, or at the link below. Along with the picture, you should also submit the coordinates of where the test was taken. GNEC H2O will then extract the water quality from the picture of the test, and our water quality map will automatically update with your data." image={water} side="left"/>
          <div style={{height: "150vh"}}></div>
          <ProcessSection header="Viewing the Data" description="" image={water} side="right"/>
        </div>

      </div>
    </div>
  );
}

export default App;
