import React, {useState}from 'react';
// import {render} from 'react-dom';
import ReactMapGL, {Marker} from 'react-map-gl';
// import {marker, popup} from "react-map-gl";{MapContext}, useEffect
// import * as featureCollection from "./data/featureCollection.json";

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2RzemFmcmFuc2tpIiwiYSI6ImNrczZhNGM0NzA4MG0yb210enlhOWkxaHkifQ.GEhDTku0VpkCA5wdnwDBvA'; // Set your mapbox token here

function Overlays() {
  
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 44.9778,
    longitude: -93.2650,
    zoom: 8
  });

  let [markers, setMarkers] = useState([
    {
      lat: 44.9,
      long: -93.2,
      text: 'thing one',
    },
    {
      lat: 44.8,
      long: -93.2,
      text: 'thing two',
    },
  ]);
  

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
      // mapStyle="mapbox://styles/mapbox/dark-v9"
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
        {markers.map( (item, index) => {
          return (
            <Marker key={index}
              latitude={item.lat} 
              longitude={item.long} 
              offsetLeft={-20} 
              offsetTop={-10}
            >
              <div className="marker">{item.text}</div>
            </Marker>
          )
        })}
      
    </ReactMapGL>
  );
}

export default Overlays;