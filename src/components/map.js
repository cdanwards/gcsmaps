import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: 900,
      height: 800,
      latitude: 34.8526,
      longitude: -82.394,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    );
  }
}

export default Map;
