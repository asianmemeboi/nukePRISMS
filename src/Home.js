import background from "./assets/background.jpg";
import free from "./assets/free.png";
import "./App.css";
import React from 'react';
import trust from "./assets/quality.png";
import user from "./assets/friends.png";
import accurate from "./assets/accuracy.png";

class HomeBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: props.name,
      image: props.image,
      imageMargin: props.imageMargin,
      boxHeight: 300
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
    this.setState({ boxHeight: Math.max(30, 200 - scrollTop) });
    // this.state.boxHeight = Math.max(30, 200 - scrollTop);
  }

  render() {
    return (
      <div
      className="homescreenbox"
      id="scrollingdiv"
      style={{ marginLeft: this.state.imageMargin }}
    >s
        <img src={this.state.image} alt={this.state.name} className="homescreenboximage"></img>
        <h2 className="homescreenboxtext">{this.state.name}</h2>
      </div>
     //<h1>My Favorite Color is {this.state.boxHeight}</h1>
    );
  }
}

// var Component = React.createClass({
//   getInitialState: function() {
//       return {
//           style: {
//               logoHeight: 200
//           }
//       }
//   },

//   componentDidMount: function() {
//       window.addEventListener('scroll', this.handleScroll);
//   },

//   componentWillUnmount: function() {
//       window.removeEventListener('scroll', this.handleScroll);
//   },

//   handleScroll: function(event) {
//       let scrollTop = window.scrollY,
//               minHeight = 30,
//               logoHeight = Math.max(minHeight, 200 - scrollTop);
//       this.setState({
//           style: {
//               logoHeight: logoHeight
//           }
//       });
//   },

//   render: function() {
//       return (
//           <div>
//               <div className="container" style={{height: this.state.style.logoHeight}}>
//                   <img src='https://www.import.io/wp-content/uploads/2017/10/React-logo-1.png' className='logo'/>
//               </div>
//               <div className="empty-space">

//               </div>
//           </div>
//       );
//   }
// });

// function Homebox(name, image, imageMargin) {
//   return (
//     <div
//     className="homescreenbox"
//     id="scrollingdiv"
//     style={{ marginLeft: imageMargin }}
//   >
//       <img src={image} alt={name} className="homescreenboximage"></img>
//       <h2 className="homescreenboxtext">{name}</h2>
//     </div>
//   )
// }

function App() {
  return (
    <>
      
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

      
      {/* { Homebox("Free-to-use", free, "140px") }
      { Homebox("Trustworthy", trust, "540px") }
      { Homebox("User-friendly", user, "940px") }
      { Homebox("Accurate", accurate, "1340px") } */}
      
      <HomeBox name="Free-to-use" image={free} imageMargin="140px" />
      <HomeBox name="Trustworthy" image={trust} imageMargin="540px" />
      <HomeBox name="User-friendly" image={user} imageMargin="940px" />
      <HomeBox name="Accurate" image={accurate} imageMargin="1340px" />

      <div style={{ backgroundColor: "aqua", height: "1000px" }}></div>
    </>
  );
}

// function $(x) {
//   return document.getElementById(x);
// }

// $(window).scroll(function () {
//   var scrollTop = $(window).scrollTop();
//   var maxHeight = -1;
//   if (scrollTop < 200) {
//       maxHeight = 150;
//   } else if (scrollTop > 400) {
//       maxHeight = 75;
//   } else {
//       maxHeight = 150 - 75 * ((scrollTop - 200)) / 200;
//   }
//   $('#scrollingdiv').css({
//       'margin-top': -maxHeight + "px"
//   });
// })

export default App;
