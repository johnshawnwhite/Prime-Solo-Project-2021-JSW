import { put, takeEvery } from '@redux-saga/core/effects';
import axios from 'axios';
function* locationSaga () {
    
    yield takeEvery('SET_MOUNTAIN_COORDINATES', getOverlayCoordinates);
    yield takeEvery('ADD_MARKER', addMarker);
    yield takeEvery('GET_MARKER_DATA', deleteMarker);
    yield takeEvery('GET_MARKER', findMarker);
    yield takeEvery('CHANGE_MARKER_DATA', updateMarker);
    }

    //used to go from the mountains page to the overlays page, directly to the mountain of your choice
function* getOverlayCoordinates() {
    try{
        const mountainList =
        yield axios.get('api/mountain/coordinates');
        console.log('where this is', mountainList.data);
        yield put({type: 'SET_MOUNTAIN_COORDINATES', payload: mountainList})
    }
    catch(error) {
        console.log('problem getting mountain coordinates', error);
    }
}

function* addMarker(action) {
    try{
        yield axios.post( '/api/coordinates/pointsfeatures/', action.payload);
        console.log(action.payload);
      }
      catch(error) {
        console.log('Error adding Marker', error);
      }
  }


function* findMarker(){
    try{
    const response = yield axios.get('/api/overlays/marker');
    yield put({type: "GET_MARKER", payload: response.data});
    } 
    catch(err) {
        console.log('Error GETing favorite', err);
    }
}


  function* deleteMarker(action){
    console.log(action.payload);
    try{
    yield axios.delete(`/api/overlays/marker/${action.payload.id}`);
    yield put({type: 'GET_MARKER_DATA'});
    } 
    catch(err) {
        console.log('Error deleting marker', err);
    }
}
  
  function* updateMarker(action){
    try{
    yield axios.put(`/api/overlays/marker/${action.payload}`);
    yield put({type: 'CHANGE_MARKER_DATA'});
    } 
    catch(err) {
        console.log('Error Finding Marker DATA', err);
    }
}

export default locationSaga;