import * as React from 'react';
import {render} from 'react-dom';
import Map, {Marker} from 'react-map-gl';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Realtimedata } from './components/CRUD';
import 'mapbox-gl/dist/mapbox-gl.css';

const markerSet = () => {
  return(
  <Marker longitude={-111.680139} latitude={33.305241} color="slateblue" />
  );
}

function App() {
  return (
    <div>
      <link href='https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css' rel='stylesheet' />
      {/* <Map
      initialViewState={{
        latitude: 33.305241,
        longitude: -111.680139,
        zoom: 15
      }}
      style={{width: '100vw', height: '77vh'}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker longitude={-111.680139} latitude={33.305241} color="slateblue" />
      <Marker longitude={-111.680139} latitude={33.306241} color="slateblue" />
      <Marker longitude={-111.680139} latitude={33.304241} color="slateblue" />
    </Map> */}
    <Realtimedata></Realtimedata>
    </div>

    // <div>
    //   <CRUD></CRUD>
    // </div>
  );
}
export default App;
