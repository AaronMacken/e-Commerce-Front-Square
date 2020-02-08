import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapContainer.css";


const mapStyles = {
  height: "100%",
  width: "100%"
};

class MapContainer extends Component {
  render() {
    return (
      <div className="gmap-wrapper">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: this.props.lat, lng: this.props.long }}
        >
          <Marker position={{ lat: this.props.lat, lng: this.props.long }} />
        </Map>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyCYX09XEFWpQ27JpFKW3S-ocQFpkcRmji0" // api key here
})(MapContainer);
