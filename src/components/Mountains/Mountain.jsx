import React from 'react';



function Mountains() {
    // const onSelectOverlay = (OverlayId) => {
    //     history.push(`/overlays/${OverlayId}`);

  return (
    <div className="container">
      <div>
        <p>Here are some possibilties for your favorite spot!</p>
        {/* <p></p><button onClick={`/overlays/${OverlayId}`}>Snoqulmie</button> */}
            // click event will take you to the location of summit at snoqualmie
        {/* <p></p><button onClick={`/overlays/${OverlayId}`}>Mt Baker</button> */}
            // click event will take you to the location of Mt Baker
        {/* <p></p><button onClick={`/overlays/${OverlayId}`}>Mt Hood</button> */}
            // click event will take you to the location of Mt hood
        {/* <p></p><button onClick={`/overlays/${OverlayId}`}>Stevens pass</button> */}
            // click event will take you to the location of Stevens Pass
      </div>
      {/* <div ref = {this.mapContainer} className = "mapContainer"/> */}
      </div>
  )
}


export default Mountains;
// import * as React from 'react';
// import {useState} from 'react';
// import {render} from 'react-dom';
// import MapGL from 'react-map-gl';

// const MAPBOX_TOKEN = ''; // Set your mapbox token here

// function Root() {
//   const [viewport, setViewport] = useState({
//     latitude: 37.8,
//     longitude: -122.4,
//     zoom: 14,
//     bearing: 0,
//     pitch: 0
//   });

//   return (
//     <MapGL
//       {...viewport}
//       width="100vw"
//       height="100vh"
//       mapStyle="mapbox://styles/mapbox/dark-v9"
//       onViewportChange={setViewport}
//       mapboxApiAccessToken={MAPBOX_TOKEN}
//     />
//   );
// }

// document.body.style.margin = 0;
// render(<Root />, document.body.appendChild(document.createElement('div')));
