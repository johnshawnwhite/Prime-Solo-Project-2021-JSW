import React from 'react';
import {useState, useEffect} from 'react';
import {render} from 'react-dom';
import MapGL, {MapContext} from 'react-map-gl';
import {marker, popup} from "react-map-gl";
// import * as featureCollection from "./data/featureCollection.json";

<h3>This is fun</h3>
function OverlayPage() {
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmlnYWlyam9uc29uIiwiYSI6ImNrcnM3MmVtazM0ODUyd2tkdXg5bGJsZ2EifQ.1idatnzmiZ46CAl2KvCWvQ'; 

function Root() {
  const [viewport, setViewport] = useState({
    latitude: 47.44,
    longitude: -121.426,
    width: "80vw",
    height: "70vh",
    zoom: 11
  });

  return (
    
    <MapGL
      {...viewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      width="60vw"
      height="50vw"
      onViewportChange={viewport => { 
          setViewport(viewport); 
        }}
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
    </MapGL>
  
    // <MapGL
    //   {...viewport}
    //   width="50vw"
    //   height="80vh"
    //   mapStyle="mapbox://styles/mapbox/streets-v11"
    //   onViewportChange={setViewport}
    //   mapboxApiAccessToken={MAPBOX_TOKEN}
    // />
  );
}

document.body.style.margin = 0;
return (<Root/>);
// render(<Root />, document.body.appendChild(document.createElement('div'))));
}

export default OverlayPage;