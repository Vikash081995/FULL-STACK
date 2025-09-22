class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  componentDidMount() {
    fetchUsers(this.props.userId).then((user) => this.setState({ user }));
  }

  render() {
    return this.state.user ? <Profile data={this.state.user} /> : null;
  }
}
