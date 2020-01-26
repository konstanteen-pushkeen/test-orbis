import React from 'react';
import { Component } from 'react';
import { Map, TileLayer, LayersControl } from 'react-leaflet';
import GeojsonLayer_1 from './layer_1';
import GeojsonLayer_2 from './layer_2';

class MapComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: 53.08715,
            lng: 49.44458,
            zoom: 9,
        }
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        const zoom = this.state.zoom;

        return (
            <Map center={position} zoom={zoom}>
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia29uc3RhbnRlZW4tcHVzaGtlZW4iLCJhIjoiY2s1cHF2MWJlMWk4ZzNtcnc5eWE2eDRoOCJ9.j37s-FMoKmaNquWeIFT3Wg"
                    attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
                />
                <LayersControl>
                    <LayersControl.Overlay name="layer-1">
                        <GeojsonLayer_1 url="geojson_1.json"/>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="layer-2">
                        <GeojsonLayer_2 url="geojson_2.json"/>
                    </LayersControl.Overlay>
                </LayersControl>              
            </Map>
        );
    }
}

export default MapComponent;

