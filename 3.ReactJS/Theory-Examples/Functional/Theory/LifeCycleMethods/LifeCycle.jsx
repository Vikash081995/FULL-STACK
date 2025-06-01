/* eslint-disable no-unused-vars */
import  { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.log('Constructor: Initializing state');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Sync state with props if necessary');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: Component has mounted');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should component re-render?');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Capture pre-update information');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component updated');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Cleanup before unmounting');
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    console.log('Render: Render the UI');
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;