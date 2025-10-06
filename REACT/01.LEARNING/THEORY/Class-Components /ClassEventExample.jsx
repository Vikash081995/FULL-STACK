import { Component } from "react";

export class ClassEventExample extends Component {
  clickHandler() {
    console.log("Class Event Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me </button>
      </div>
    );
  }
}

export default ClassEventExample;
