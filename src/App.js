import React, { Component } from 'react';
import Earthquakes from './Earthquakes/Earthquakes';
import MapContainer from './MapContainer/MapContainer';

class App extends Component {


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
        <MapContainer></MapContainer>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
            <Earthquakes></Earthquakes>
        </div>
      </div>
    );
  }
}

export default App;
