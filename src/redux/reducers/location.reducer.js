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
  state = { longitude: -121.437, latitude: 47.44 },
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

export default combineReducers({
  mountainLocations,
  overlayStartingPoints,
});
