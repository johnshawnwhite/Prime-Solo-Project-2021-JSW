import { combineReducers } from "redux";

const mountainLocations = (state = [], action) => {
  switch (action.type) {
    case "SET_MOUNTAIN_LOCATIONS":
      console.log("list of mountain coordinates", action.payload);
      return action.payload.data;
    default:
      return state;
  }
};

const overlayStartingPoints = (
  state = { longitude: -121.44288, latitude: 47.43887 },
  action
) => {
  switch (action.type) {
    case "SET_OVERLAY_STARTING_POINTS":
      console.log("list of mountain coordinates", action.payload);
      return action.payload;
    default:
      return state;
  }
};

const markerLocations = (state = [], action) => {
  switch (action.type) {
      case "SEND_MARKER_LOCATIONS":
          console.log('list of marker coordinates', action.payload);
          return action.payload;
          default:
              return state;
  }
};

export default combineReducers({
  mountainLocations,
  overlayStartingPoints,
  markerLocations
});
