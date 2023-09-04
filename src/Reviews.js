import React from "react";
import ClassInfo from "./assets/Class_Info.json";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ClassInfo[window.location.href.split('#')[2]]
    }
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <div>
        <h3>{this.state.data.name}</h3>
      </div>
    );
  }
}

export default Reviews;