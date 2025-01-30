import { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => this.setState({ message: "Thanks for subscribing" })}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default Message;
