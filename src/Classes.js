import React from "react";
import "./App.css";
import ClassInfo from "./assets/Class_Info.json";
import biobg from "./assets/biobg.jpg";
import mathbg from "./assets/mathbg.jpg";
import chembg from "./assets/chembg.jpg";
import englishbg from "./assets/englishbg.jpg";
import computersciencebg from "./assets/computersciencebg.jpg";
import engineeringbg from "./assets/engineeringbg.jpg";
import physicsbg from "./assets/physicsbg.jpg";
import socialstudiesbg from "./assets/socialstudiesbg.jpeg";
import languagesbg from "./assets/languagesbg.jpg";
import artbg from "./assets/artbg.jpg";

class Subject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: props.subject,
      bgLink: props.bgLink
    }
    this.render = this.render.bind(this);
  }

  render() {
    const list = [];
    list.push(
      <h3 style={{color: "#FFF", textAlign: "center"}}>{this.state.subject}</h3>
    );

    for (const [id, data] of Object.entries(ClassInfo)) {
      if (data.subject === this.state.subject) {
        list.push(
          <Class id={id} data={data} subject={this.state.subject} bgLink={this.state.bgLink}/>
        );
      }
    }

    return list;
  }
}

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      data: props.data,
      subject: props.subject,
      bgLink: props.bgLink
    }
    this.render = this.render.bind(this);
  }

  render() {
    return (     
      <div className={"class-card " + this.state.subject} id={this.state.id} style={{height: "12vh", backgroundImage: `url(${this.state.bgLink})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
        <h3 style={{textAlign: "center", lineHeight: "12vh"}}><a href={"/reviews#" + this.state.id}>{this.state.data.name}</a></h3>
      </div>
    )
  }
}

function Classes() {
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
      <div style={{height: "100vh", background: "linear-gradient(180deg, rgba(3,40,150,1) 29%, rgba(0,55,48,1) 79%, rgba(45,45,45,1) 100%)", backgroundAttachment: "fixed", paddingTop: "10vh"}}>
        <div style={{height: "30vh", paddingTop: "10vh"}}>
          <h2 style={{left: "50%", textAlign: "center", color: "white"}}>Classes</h2>
          <div className="search-box" style={{left: "50%", transform: "translateX(-50%)", position:"absolute"}}>
            <button className="btn-search"><i className="fas fa-search"></i></button>
            <input type="search" onChange={handleChange}  className="input-search" placeholder="AP Bio"/>
          </div>
        </div>
        
      
        <Subject subject="Math" bgLink={mathbg}/>
        <Subject subject="Biology" bgLink={biobg}/>
        <Subject subject="Chemistry" bgLink={chembg} />
        <Subject subject="Physics" bgLink={physicsbg}/>
        <Subject subject="Engineering" bgLink={engineeringbg}/>
        <Subject subject="Computer Science" bgLink={computersciencebg}/>
        <Subject subject="Languages" bgLink={languagesbg}/>
        <Subject subject="English" bgLink={englishbg}/>
        <Subject subject="Art" bgLink={artbg}/>
        <Subject subject="Social Studies" bgLink={socialstudiesbg}/>
      </div>
      
      
      
    </div>
  );
}

export default Classes;
