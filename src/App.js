import * as React from 'react';
import {render} from 'react-dom';
import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
  return (
    <div>
      <link href='https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css' rel='stylesheet' />
      <Map
      initialViewState={{
        latitude: 33.305241,
        longitude: -111.680139,
        zoom: 10
      }}
      style={{width: '100vw', height: '90vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker longitude={-111.680139} latitude={33.305241} color="slateblue" />
      <Marker longitude={-111.680139} latitude={33.306241} color="slateblue" />
      <Marker longitude={-111.680139} latitude={33.304241} color="slateblue" />
    </Map>
    <table>
      <tr>
        <td>EWD1</td>
        <td>EWD2</td>
        <td>EWD3</td>
        <td>EWD4</td>
        <td>EWD5</td>
        <td>EWD6</td>
        <td>EWD7</td>
        <td>EWD8</td>
        <td>EWD9</td>
        <td>EWD10</td>
      </tr>
    </table>
    </div>
  );
}
export default App;
