import React, { Component } from 'react';
import Earthquakes from './Earthquakes/Earthquakes';


class App extends Component {


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
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
