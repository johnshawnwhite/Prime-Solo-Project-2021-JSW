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

  
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [description, setDescription] = useState('');


  const onNextClick = () => {
    const marker = {
        latitude: latitude,
        longitude: longitude,
        description: description
    }
    //  this function needs to be connected to the database still and correctly adding the marker to the user location collection list, 
    // also need to be able to edit and delete the markers, so maybe a list appended to the dom that populates an edit and delete button
    // the edit button......hmmm...

    console.log('adding a marker to overlay', marker);
    dispatch({
        type: 'ADD_CUSTOMER',
        payload: marker
    });
    alert("Prewind for loading");
    // history.push('/checkout');    need to reload map on click event
}

  return (
    <div class="mapdiv">
      <h1>Add A NEW MARKER</h1>
      <input
        type="text"
        onChange={(event) => setLatitude(event.target.value)}
        placeholder="latitude"
        value={latitude}
      />
      <input
        type="text"
        onChange={(event) => setLongitude(event.target.value)}
        placeholder="Longitude"
        value={longitude}
      />
      <input
        type="text"
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
        value={description}
      />
      <button onClick={onNextClick}>Post it!</button>
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
            onClose={() => {
              setSelectedMountain(null);
            }}
          >
            <div>
              <h6>{selectedMountain.properties.name}</h6>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default Overlays;
