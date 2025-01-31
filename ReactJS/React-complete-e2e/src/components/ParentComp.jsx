import { Component } from "react";
import MemoComp from "./MemoComp";
// import RegComp from "./RegComp";
// import PureComponents from "./PureComponents";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishwas",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Vishwas",
      });
    }, 2000);
  }
  render() {
    console.log("Parent Comp render");
    return (
      <>
        {/* <RegComp name={this.state.name} /> */}
        {/* <PureComponents name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </>
    );
  }
}

export default ParentComp;
