/* eslint-disable react/prop-types */
import { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Reg Comp render");
    return <div>RegComp {this.props.name}</div>;
  }
}

export default RegComp;
