class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {        
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}
