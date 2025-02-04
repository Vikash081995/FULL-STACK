class ScrollTracker extends React.Component {
  state = { scrollY: 0 };

  ShouldComponentUpdate(nextProps, nextState) {
    return Math.abs(nextState.scrollY - this.state.scrollY) > 100;
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ scrollY: window.scrollY });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return <div>{this.state.scrollY}</div>;
  }
}
