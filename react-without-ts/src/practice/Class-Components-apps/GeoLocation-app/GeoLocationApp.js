import React, { Component } from "react";

class GeoLocationApp extends Compnenent {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
        });
      },
      (error) => {
        this.setState({
          error: error.message,
        });
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>;
    }
    return <div>Loading...</div>;
  }
}
