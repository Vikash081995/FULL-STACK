import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({ isToggled: !prevState.isToggled }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>
          {this.state.isToggled ? "ON" : "OFF"}{" "}
        </button>
      </div>
    );
  }
}

export default Toggle;
