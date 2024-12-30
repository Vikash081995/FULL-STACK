/* eslint-disable react/prop-types */
import { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label>Search</label>
          <input
            type="text"
            value={this.state.term}
            placeholder="Search"
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
