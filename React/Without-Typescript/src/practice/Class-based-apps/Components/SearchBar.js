import { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state.term);
  }
  render() {
    <div>
      <form onSubmit={this.onFormSubmit}>
        <label>Search</label>
        <input
          type="text"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    </div>;
  }
}
