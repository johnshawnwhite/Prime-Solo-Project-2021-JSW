import React, {useState}from 'react';
// import {render} from 'react-dom';
import ReactMapGL from 'react-map-gl';
// import {marker, popup} from "react-map-gl";{MapContext}, useEffect
// import * as featureCollection from "./data/featureCollection.json";

<h3>This is fun</h3>
function OverlayPage() {
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmlnYWlyam9uc29uIiwiYSI6ImNrcnM3MmVtazM0ODUyd2tkdXg5bGJsZ2EifQ.1idatnzmiZ46CAl2KvCWvQ'; 

// function Root() {
  const [viewport, setViewport] = useState({
    latitude: 47.44,
    longitude: -121.426,
    width: 700,
    height: 400,
    zoom: 3
  });

  return (
    <div>
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      // mapStyle="mapbox://styles/mapbox/dark-v9"
      // onViewportChange={viewport => { 
      //     setViewport(viewport); 
      //   }}
    >
        {/* {featureCollection.features.map((feature) => (
            <marker 
            key={feature.properties.ID} 
            latitude={feature.properties.longitude}
            longitude={feature.properties.latitude}>
                <div></div>

            </marker>
        ))} */}
      {/* { /* Markers and Popup will go here */ } i like apples and bananas
    </ReactMapGL>
  </div>
  
  );
}

// document.body.style.margin = 0;
// return (<Root/>);
// render (<Root />, document.body.appendChild(document.createElement('div')));
// }

export default OverlayPage;