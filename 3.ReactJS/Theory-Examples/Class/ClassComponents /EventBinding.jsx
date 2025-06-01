import { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
  }
  handleClick = () => {
    this.setState({
      message: "Goodbye",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.handleClick()}>Click</button>
      </div>
    );
  }
}

export default EventBinding;
