import React from 'react';
import { Component } from 'react';
import { GeoJSON, FeatureGroup, Popup } from 'react-leaflet';

class GeojsonLayer_3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    const date = this.state.data;
    return (
      <FeatureGroup>
        {date.map(f => {
          const position = [];
          let lat = +(f.lat);
          let lng = +(f.lon);

          if (isFinite(lat) && isFinite(lng)) {
            lat = lat.toFixed(2);
            lng = lng.toFixed(2);

            position.push(+lat);
            position.push(+lng);
          }          
         
          return (position.length > 0 && <GeoJSON key={f.id_entrance + f.direction + f.direction} data={position}>
            <Popup>{f.id_entrance}<br/>{f.name_ru}</Popup>
          </GeoJSON>);

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

export default GeojsonLayer_3;