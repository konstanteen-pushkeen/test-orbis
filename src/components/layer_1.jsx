import React from 'react';
import { Component } from 'react';
import { GeoJSON, FeatureGroup, Popup } from 'react-leaflet';
import { Marker } from 'leaflet';

class GeojsonLayer_1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };    
  }

  render() {
    const data = this.state.data; 
    console.log(data);   
    return (
      <FeatureGroup>
        {data.map(f => {          
          return <GeoJSON key={f.id} data={f}>
             <Popup>{f.properties.name}<br/>{f.properties.adres}</Popup>
          </GeoJSON>         
        })}
      </FeatureGroup>
    );
  }

  componentDidMount() {
    if (this.props.url) {
      console.log(this.props.url);
      this.fetchData(this.props.url);
    }
    console.log('did mount');
  }

  componentWillUnmount() {
    console.log('will unmount');

  }

  fetchData(url) {
    let request = fetch(url);
    request
    /*.then(r => r.text())
    .then(text => console.log(text));*/
      .then(r => r.json())
      .then(data => {
        this.setState({
          data: data.features
        });
      }, (error) => {
        console.error(error);
      });
  }
}

export default GeojsonLayer_1;