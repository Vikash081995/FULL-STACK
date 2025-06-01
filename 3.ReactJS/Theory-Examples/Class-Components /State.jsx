import React, { Component } from "react";

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "ford",
      model: "mustang",
      year: "1964",
      color: "red",
    };
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}
        </p>
      </div>
    );
  }
}
