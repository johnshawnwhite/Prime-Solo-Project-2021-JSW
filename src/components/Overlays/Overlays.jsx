import React from 'react';
import {useState} from 'react';
import {render} from 'react-dom';
import MapGL from 'react-map-gl';

<h3>This is fun</h3>
function OverlayPage() {
const MAPBOX_TOKEN = 'pk.eyJ1IjoiYmlnYWlyam9uc29uIiwiYSI6ImNrcnM3MmVtazM0ODUyd2tkdXg5bGJsZ2EifQ.1idatnzmiZ46CAl2KvCWvQ'; 

function Root() {
  const [viewport, setViewport] = useState({
    latitude: 47.44,
    longitude: -121.426,
    zoom: 4,
    bearing: 0,
    pitch: 0
  });

  return (
    <MapGL
      {...viewport}
      width="50vw"
      height="80vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}

document.body.style.margin = 0;
return (<Root/>);
// render(<Root />, document.body.appendChild(document.createElement('div'))));
}

export default OverlayPage;