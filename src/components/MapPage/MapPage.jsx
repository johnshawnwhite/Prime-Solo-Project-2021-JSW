import React from 'react';
import mapboxgl from 'mapbox-gl';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Overlays() {
  return (
    // <div className="container">
    //   <p>Map Page</p>
    // </div>
    <div id="overlay"></div>
  );
}


// var map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11',
//   center: [-121.426, 47.44],
//   zoom: 13
//   });

export default Overlays;
