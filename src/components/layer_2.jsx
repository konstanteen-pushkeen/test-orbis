import React from 'react';
import { Component } from 'react';
import { GeoJSON, FeatureGroup, Popup } from 'react-leaflet';

class GeojsonLayer_2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      id: 1,
    };
  }

  render() {
    const date = this.state.data;
    return (
      <FeatureGroup>
        {date.map(f => {
          f.properties.id = this.state.id++;
          console.log(f);
          return <GeoJSON key={f.properties.id} data={f}>
            <Popup>{f.properties.name}<br/>{f.properties.address}</Popup>
          </GeoJSON>          
        })}
      </FeatureGroup>
    );
  }

  componentDidMount = () => {
    if (this.props.url) {
      console.log(this.props.url);
      this.fetchData(this.props.url);
    }
    console.log('did mount');
  }

  componentWillUnmount = () => {
    console.log('will unmount');

  }

  fetchData = (url) => {
    let request = fetch(url);
    request
      /* .then(r => r.text())
      .then(text => console.log(text)); */
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

export default GeojsonLayer_2;