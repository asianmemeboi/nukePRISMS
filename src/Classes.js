import React from "react";
import "./App.css";

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: props.subject
    }
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div className="class-card" style={{}}>
        <h3 style={{color: "#ffffff"}}>{this.state.subject}</h3>
      </div>
    )
  }
}

// const dummyDatabase = {
//   "AP Biology" : {
//     name: "AP Biology",
//     periods : {
//       6 : "Joeseph Bay",
//       6 : "Joeseph Woska",
//       7 : "Random Guy"
//     },
//     subject: "Biology",
//     field: "STEM"
//   },
//   "AP Calculus BC" : {
//     name: "AP Calculus BC",
//     periods : {
//       6 : "Kenneth Jones",
//       8 : "Andrew Bleckner"
//     },
//     subject: "Mathematics",
//     field: "STEM"
//   }
// };

function Classes() {
  // const [query, setQuery] = useState('');
  // const [results, setResults] = useState({
  //   query: '',
  //   list: []
  // });

  const handleChange = (e) => {
    const input = e.target.value.toLowerCase();
    let elements = document.getElementsByClassName("class-card");
    for (let i = 0; i < elements.length; i++) {
      let titleElement = elements[i].firstElementChild;
      let text = titleElement.innerText || titleElement.textContent;

      if (text.toLowerCase().indexOf(input) > -1) {
        elements[i].style.display = ""
      } else {
        elements[i].style.display = "none";
      }
    }
    // setQuery(e.target.value);
    // const r = Object.fromEntries(Object.entries(dummyDatabase).filter(([k,v]) => (k.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)));
    // setResults({
    //   query: e.target.value,
    //   list: r
    // });
  };

  // useEffect(
  //   () => {
  //     const script = document.createElement("script");

  //     const scriptText = document.createTextNode(`
  //     function searchClasses() { 
  //       console.log('hi'); 
  //     }
  //     `);

  //     script.appendChild(scriptText);
  //     document.head.appendChild(script);

  //     return () => {
  //       document.head.removeChild(script);
  //     }
  //   }, []
  // );
  
  return (
    <div>
      <div style={{height: "30vh", backgroundColor: "#032896", paddingTop: "10vh"}}>
        <h2 style={{left: "50%", textAlign: "center", color: "white"}}>Classes</h2>
        <div className="search-box" style={{left: "50%", transform: "translateX(-50%)", position:"absolute"}}>
          <button className="btn-search"><i className="fas fa-search"></i></button>
          <input type="search" onChange={handleChange}  className="input-search" placeholder="AP Bio"/>
        </div>
        
      </div>
      <div style={{height: "10vh", background: "rgb(3,40,150)", background: "linear-gradient(180deg, rgba(3,40,150,1) 29%, rgba(0,55,48,1) 79%, rgba(45,45,45,1) 100%)", paddingTop: "10vh"}}></div>
      
      
      {/* {(results.query === '' ? "" : state.list.values().map(post => {
            return <li key={post.name}>{post.name}</li>
          }))} */}
      <Class subject="AP Bio"/>
      <Class subject="Honors bio"/>
      <Class subject="AP Calc"/>
      <Class subject="AP Bio"/>
      <Class subject="Honors bio"/>
    </div>
  );
}

export default Classes;
