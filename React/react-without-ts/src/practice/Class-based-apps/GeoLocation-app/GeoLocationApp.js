import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

class GeoLocationApp extends Compnenent {
  state = {
    latitude: null,
    errorMessage: "",
  };
  componenDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          latitude: position.coords.latitude,
        }),

      (error) =>
        this.setState({
          error: error.message,
        })
    );
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <div>Loading...</div>;
  }
}
