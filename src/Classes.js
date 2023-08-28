import React from "react";

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
  return (
    <div>
      <h3>Classes here</h3>
      <Class subject="AP Bio"/>
      <Class subject="Honors bio"/>
      <Class subject="AP Calc"/>
      <Class subject="AP Bio"/>
      <Class subject="Honors bio"/>
    </div>
  );
}

export default Classes;
