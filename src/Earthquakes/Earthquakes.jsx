import React, { Component } from 'react';
import QuakesList from './QuakesList';


class Earthquakes extends Component{
    constructor(){
        super();
        this.state = {
            quakes: []
        }
    }
        getEarthquakes = async () => {
        try {
          const quakes = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson");
          const quakesJson = await quakes.json();
          console.log(quakesJson);
           await this.setState({quakes: quakesJson.features})
            console.log(this.state.quakes)
        } catch(err) {
          console.log(err);
          return err;
        }
      }
  componentDidMount(){
    this.getEarthquakes()
    };
  






  render() {
    return (
      <div className="App">
              <br></br>              
        <QuakesList quakes={this.state.quakes} />

      </div>
    );
  }



}





















export default Earthquakes;