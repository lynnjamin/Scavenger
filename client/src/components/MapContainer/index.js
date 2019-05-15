import React, { Component } from 'react';
import { GoogleApiWrapper} from 'google-maps-react';
import CurrentLocation from '../../components/Map';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation grabCoords={this.props.grabCoords} centerAroundCurrentLocation google={this.props.google}>

      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB_Eo01IIFO_5EeFAptKcOuWEfAbAxnmN0'
})(MapContainer);


