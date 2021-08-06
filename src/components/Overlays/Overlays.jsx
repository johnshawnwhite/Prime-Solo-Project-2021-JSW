// import React from 'react';


// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


// <script>
// mapboxgl.accessToken = 'pk.eyJ1IjoiYmlnYWlyam9uc29uIiwiYSI6ImNrcnM3MmVtazM0ODUyd2tkdXg5bGJsZ2EifQ.1idatnzmiZ46CAl2KvCWvQ';
// const map = new mapboxgl.Map({
// container: 'map', // container ID
// style: 'mapbox://styles/mapbox/streets-v11', // style URL
// center: [-121.426, 47.44, // starting position [lng, lat]
// zoom: 9 // starting zoom
// });
// map.on('load', function () {
//     // Add an image to use as a custom marker
//     map.loadImage(
//     'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
//     function (error, image) {
//     if (error) throw error;
//     map.addImage('custom-marker', image);
//     // Add a GeoJSON source with 2 points
//     map.addSource('points', {
//     'type': 'geojson',
//     'data': {
//     'type': 'FeatureCollection',
//     'features': [
//     {
//     // feature for Mapbox DC
//     'type': 'Feature',
//     'geometry': {
//     'type': 'Point',
//     'coordinates': [
//     -77.03238901390978, 38.913188059745586
//     ]
//     },
//     'properties': {
//     'title': 'Mapbox DC'
//     }
//     },
//     {
//     // feature for Mapbox SF
//     'type': 'Feature',
//     'geometry': {
//     'type': 'Point',
//     'coordinates': [-122.414, 37.776]
//     },
//     'properties': {
//     'title': 'Mapbox SF'
//     }
//     }
//     ]
//     }
//     });
     
//     // Add a symbol layer
//     map.addLayer({
//     'id': 'points',
//     'type': 'symbol',
//     'source': 'points',
//     'layout': {
//     'icon-image': 'custom-marker',
//     // get the title name from the source's "title" property
//     'text-field': ['get', 'title'],
//     'text-font': [
//     'Open Sans Semibold',
//     'Arial Unicode MS Bold'
//     ],
//     'text-offset': [0, 1.25],
//     'text-anchor': 'top'
//     }
//     });
//     }
//     )
//     });
//     </script>
    
//     function Overlay() {
//     return (
//     <div id='map' style='width: 400px; height: 300px;'>
//              <p>Info Page</p>
//              </div>
//     );
//   }
  
// export default Overlay;