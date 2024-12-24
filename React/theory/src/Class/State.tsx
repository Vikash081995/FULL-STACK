import  { Component } from "react";

interface Props {
  // Add any specific prop types here if needed
  dummy:string
}

class StateExampleInClass extends Component<Props, { count: number }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default StateExampleInClass;
