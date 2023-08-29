import React, { useEffect } from "react";

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
      <div class="class-card">
        <h3>{this.state.subject}</h3>
      </div>
    )
  }
}

function Classes() {
  useEffect(
    () => {
      const script = document.createElement("script");

      const scriptText = document.createTextNode(`
      function searchClasses() { 
        console.log('hi\n'); 
      }
      `);

      script.appendChild(scriptText);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      }
    }, []
  );
  
  return (
    <div>
      <h3>Classes here</h3>
      <input onkeyup="searchClasses()"></input>
      <Class subject="AP Bio"/>
      <Class subject="Honors bio"/>
      <Class subject="AP Calc"/>
      <Class subject="AP Bio"/>
      <Class subject="Honors bio"/>
    </div>
  );
}

export default Classes;
