import React from "react";
import circle from "./img/circle.svg";

class Circle extends React.Component {
  render() {
    return (
      <div className="Circle">
        <img src={circle} alt="circle" width="100%" height="100%"></img>
      </div>
    );
  }
}

export default Circle;
