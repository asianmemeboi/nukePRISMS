import React, { useState, useEffect } from "react";

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

const dummyDatabase = {
  "AP Biology" : {
    name: "AP Biology",
    periods : {
      6 : "Joeseph Bay",
      6 : "Joeseph Woska",
      7 : "Random Guy"
    },
    subject: "Biology",
    field: "STEM"
  },
  "AP Calculus BC" : {
    name: "AP Calculus BC",
    periods : {
      6 : "Kenneth Jones",
      8 : "Andrew Bleckner"
    },
    subject: "Mathematics",
    field: "STEM"
  }
};

function Classes() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState({
    query: '',
    list: []
  });

  const handleChange = (e) => {
    setQuery(e.target.value);
    const r = Object.fromEntries(Object.entries(dummyDatabase).filter(([k,v]) => (k.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)));
    setResults({
      query: e.target.value,
      list: r
    });
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
      <h3>Classes here</h3>
      <input type="search" value={query} onChange={handleChange} />
      {(results.query === '' ? "" : state.list.values().map(post => {
            return <li key={post.name}>{post.name}</li>
          }))}
      {/* <Class subject="AP Bio"/>
      <Class subject="Honors bio"/>
      <Class subject="AP Calc"/>
      <Class subject="AP Bio"/>
      <Class subject="Honors bio"/> */}
    </div>
  );
}

export default Classes;
