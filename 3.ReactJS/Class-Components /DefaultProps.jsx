class DefaultProps extends React.Component {
  static defaultProps = { name: "Guest" };
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}
