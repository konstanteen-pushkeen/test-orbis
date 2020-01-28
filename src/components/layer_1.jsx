import React from 'react';
import { Component } from 'react';
import { FeatureGroup } from 'react-leaflet';
import GeoLayer from './GeoLayer';


class GeojsonLayer_1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    const data = this.state.data;

    return (
      <FeatureGroup>
        {data.map(f => {
          return <GeoLayer key={f.id}
                           id={f.id}
                           data={f}
                           name={f.properties.name}
                           address={f.properties.adres}
                           activity={f.properties.vid_dejatelnosti}
                           phone={f.properties.telefonfaks}
                           mail={f.properties.jelektronnaja_pochta}></GeoLayer>          
          
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