/* eslint-disable react/prop-types */
import { PureComponent } from "react";

class PureComponents extends PureComponent {
  render() {
    console.log("Pure Comp render");
    return (
      <div>
        PureComponents
        {this.props.name}
      </div>
    );
  }
}

export default PureComponents;
