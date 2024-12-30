import { Component } from "react";
import SearchBar from "./Components/SearchBar";
import unplash from "./api/unplash";
import ImageList from "./Components/ImageList";

class App extends Component {
  state = {
    images: [],
  };
  onSearchSubmit(term) {
    unplash
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
        },
      })
      .then((response) => {
        this.setState({ images: response.data.results });
      });
  }
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
