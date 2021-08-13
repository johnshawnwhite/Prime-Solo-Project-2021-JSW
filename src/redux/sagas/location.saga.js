import { put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
function* locationSaga() {
  yield takeEvery("SET_MOUNTAIN_COORDINATES", getOverlayCoordinates);
  yield takeEvery("ADD_MARKER", addMarker);
  yield takeEvery("DELETE_MARKER", deleteMarker);
  yield takeEvery("GET_MARKERS", findMarker);
  yield takeEvery("EDIT_MARKER", updateMarker);
}

//used to go from the mountains page to the overlays page, directly to the mountain of your choice
function* getOverlayCoordinates() {
  try {
    const mountainList = yield axios.get("api/mountain/coordinates");
    console.log("where this is", mountainList.data);
    yield put({ type: "SET_MOUNTAIN_COORDINATES", payload: mountainList });
  } catch (error) {
    console.log("problem getting mountain coordinates", error);
  }
}

function* addMarker(action) {
  try {
    yield axios.post("/api/coordinates/pointsfeatures/", action.payload);
    console.log(action.payload);
    yield put({ type: "GET_MARKERS"});
  } catch (error) {
    console.log("Error adding Marker", error);
  }
}

function* findMarker() {
  try {
    const response = yield axios.get("/api/coordinates/pointsfeatures/");
    yield put({
      type: "SEND_MARKER_LOCATIONS",
      payload: response.data,
    });
  } catch (err) {
    console.log("Error GETing favorite", err);
  }
}

function* deleteMarker(action) {
  console.log(action.payload);
  try {
    yield axios.delete(`/api/coordinates/pointsfeatures/${action.payload}`);
    yield put({ type: "GET_MARKERS" });
  } catch (err) {
    console.log("Error deleting marker", err);
  }
}

function* updateMarker(action) {
  try {
    yield axios.put(`/api/coordinates/pointsfeatures/${action.payload.id}`, action.payload);
    yield put({ type: "GET_MARKERS" });
  } catch (err) {
    console.log("Error Finding Marker DATA", err);
  }
}

export default locationSaga;
