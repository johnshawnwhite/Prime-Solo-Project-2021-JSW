import React, { useState } from "react";
// import {render} from 'react-dom';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
// import {marker, popup} from "react-map-gl";{MapContext}, useEffect
import places from "../data/featureCollection.json";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia2RzemFmcmFuc2tpIiwiYSI6ImNrczZhNGM0NzA4MG0yb210enlhOWkxaHkifQ.GEhDTku0VpkCA5wdnwDBvA"; // Set your mapbox token here

function Overlays() {
  const [viewport, setViewport] = useState({
    width: "60vw",
    height: "40vw",
    latitude: 47.44,
    longitude: -121.437,
    zoom: 11,
  });
  const [selectedMountain, setSelectedMountain] = useState(null);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {places.features.map((mountain) => {
          return (
            <Marker
              key={mountain.properties.id}
              latitude={mountain.geometry.coordinates[1]}
              longitude={mountain.geometry.coordinates[0]}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <button
                class="marker-btn"
                onClick={(event) => {
                  event.preventDefault();
                  setSelectedMountain(mountain);
                }}
              >
                <img src="/snowboard.png" alt="location icon" />
              </button>
            </Marker>
          );
        })}
        {selectedMountain ? (
          <Popup
            latitude={selectedMountain.geometry.coordinates[1]}
            longitude={selectedMountain.geometry.coordinates[0]}
          >
            <div><h4>{selectedMountain.properties.name</h4></div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default Overlays;
