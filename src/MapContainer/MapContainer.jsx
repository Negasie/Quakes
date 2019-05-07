import React, { Component } from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

const mapStyles = {
  width: '40%',
  height: '54%'
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
      google={this.props.google}
      zoom={14}
      style={mapStyles}
      initialcenter={{
        lat: -1.2884,
        lng: 36.8233
      }}
     />
    )
  }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDkZgKOp9wJl6ALYbUo_x6yX-6iU2YFIYU'
  })(MapContainer) 