
import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {render} from 'react-dom';
// import {render} from 'react-dom';
import ReactMapGL, { Marker, Popup, GeolocateControl, MapContext, NavigationControl } from "react-map-gl";
// import {marker, popup} from "react-map-gl";{MapContext}, useEffect
import places from "../data/featureCollection.json";
import Pin from './pin';
import ControlPanel from './control-panel';

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia2RzemFmcmFuc2tpIiwiYSI6ImNrczZhNGM0NzA4MG0yb210enlhOWkxaHkifQ.GEhDTku0VpkCA5wdnwDBvA"; // Set your mapbox token here

function Overlays() {
  const start = useSelector((store) => store.locations.overlayStartingPoints);
  const dispatch = useDispatch();

  const navStyle = {
  position: 'top-right',
  top: 0,
  left: 0,
  padding: '0px'
  };

  const [viewport, setViewport] = useState({
    width: "70vw",
    height: "50vw",
    latitude: start.latitude,
    longitude: start.longitude,
    zoom: 13,
  });

  const [markerb, setMarkerb] = useState({
    latitude: 40,
    longitude: -100
  });
  const [events, logEvents] = useState({});

  const onMarkerbDragStart = useCallback(event => {
    logEvents(_events => ({..._events, onDragStart: event.lngLat}));
  }, []);

  const onMarkerbDrag = useCallback(event => {
    logEvents(_events => ({..._events, onDrag: event.lngLat}));
  }, []);

  const onMarkerbDragEnd = useCallback(event => {
    logEvents(_events => ({..._events, onDragEnd: event.lngLat}));
    setMarkerb({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    });
  });
  
  function CurrentZoomLevel() {
    const context = React.useContext(MapContext);
  
    return <div>{context.viewport.zoom}</div>;
  }

  const [selectedMountain, setSelectedMountain] = useState(null);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [description, setDescription] = useState("");

  const onNextClick = () => {
    const marker = {
      latitude: latitude,
      longitude: longitude,
      description: description,
    };
    //  this function needs to be connected to the database still and correctly adding the marker to the user location collection list,
    console.log("adding a marker to overlay", marker);
    dispatch({
      type: "ADD_MARKER",
      payload: marker,
    });
    // also need to be able to edit and delete the markers, so maybe a list appended to the dom that populates an edit and delete button
    // the edit button......hmmm...

    
    // alert("Prewind for loading");
    // history.push('/checkout');    need to reload map on click event
  };

  const handleClick = () => {
    const markerb = {
      latitude: latitude,
      longitude: longitude,
      description: description,
    };

    dispatch({
      type: "GET_MARKER"
    });
  };

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        CurrentZoomLevel,  
        // latitude: pos.coords.latitude,
        // longitude: pos.coords.longitude,
      });
    });
  }, [viewport]);

  return (
    <div className="mapdiv">
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
      <button onClick={handleClick}>Show me markers!</button>
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {/* <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        /> */}
        
        {places.features.map((mountain, markerb) => {
          return (
            <Marker
              key={mountain.properties.id}
              latitude={markerb.latitude, mountain.geometry.coordinates[1]}
              longitude={markerb.longitude, mountain.geometry.coordinates[0]}
              offsetLeft={-20}
              offsetTop={-10}
              draggable
              onDragStart={onMarkerbDragStart}
              onDrag={onMarkerbDrag}
              onDragEnd={onMarkerbDragEnd}
            >
              <Pin size={20} />
              <button
                className="marker-btn"
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
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </Popup>
        ) : null}
        <div className="nav" style={navStyle}> 
        </div><ControlPanel events={events}></ControlPanel>
        <NavigationControl />
      </ReactMapGL>
      
    </div>
  );
}

export default Overlays;
