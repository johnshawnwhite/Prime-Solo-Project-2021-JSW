import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Mountains() {

  const dispatch = useDispatch();
  const history = useHistory();
    // const onSelectOverlay = (OverlayId) => {
    //     history.push(`/overlays/${OverlayId}`);
  
  const handleClick = (latitude, longitude) => {
    event.preventDefault();
    dispatch({
        type: 'SET_OVERLAY_STARTING_POINTS',
        payload: { latitude: latitude, longitude: longitude},
    });
    // alert("You are now searching");
    // console.log('reducer', searchReducer);
    history.push('/overlays');
} ;
  

  return (
    <div className="container">
      <div>
        <p>Here are some possibilties for your favorite spot!</p>
        {/* // save the coordinates in a reducer and call the reducer from the other page?
        // the value of the reducer is the value of the coordinates..

        // or i can send params
        // by using the params i will be using the history
        // the two values in the history params, and the overlay page use the variable  */}
<p>the Summit at SnoQualmie</p>
        <button onClick={() => handleClick( 47.44, -121.426)}>SKILIFT</button>
            
            <p></p>
<p>Mt Baker</p>
        <button onClick={() => handleClick( 48.8552, -121.674)}>SKILIFT</button>
            <p></p>
        
<p>Ht Hood</p>    
        <button onClick={() => handleClick( 45.373, -121.696)}>SKILIFT</button> 
            <p></p>
<p>Stevens Pass</p>
        <button onClick={() => handleClick( 47.74, -121.08)}>SKILIFT</button>
           
      </div>
      {/* <div ref = {this.mapContainer} className = "mapContainer"/> */}
      </div>
  )
}


export default Mountains;