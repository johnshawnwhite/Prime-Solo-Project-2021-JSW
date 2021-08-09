
import {
  HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import MapPage from '../MapPage/MapPage';
import MountainPage from '../Mountains/Mountain';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import 'mapbox-gl/dist/mapbox-gl.css';
import OverlayPage from '../Overlays/Overlays';

import './App.css';


function App() {
  // const dispatch = useDispatch();
  
  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lng, setLng] = useState(-121.426);
  // const [lat, setLat] = useState(47.44);
  // const [zoom, setZoom] = useState(12);
  // mapboxgl.accessToken = 'pk.eyJ1IjoiYmlnYWlyam9uc29uIiwiYSI6ImNrcnM3MmVtazM0ODUyd2tkdXg5bGJsZ2EifQ.1idatnzmiZ46CAl2KvCWvQ';


  // useEffect(() => {
  //   dispatch({ type: 'FETCH_USER' });
  // }, [dispatch]);

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //   container: mapContainer.current,
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: [lng, lat],
  //   zoom: zoom
  //   });
  //   });

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //     map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //     });
  //     });

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Map Page else shows LoginPage
            exact
            path="/map"
          >
            <MapPage />
          </ProtectedRoute>



          <ProtectedRoute  
          // shows overlay page
            exact
            path="/overlays"
          >
            <OverlayPage />
          </ProtectedRoute>




          {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LoginPage at /login
            exact
            path="/login"
            authRedirect="/user"
          >
            <LoginPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows RegisterPage at "/registration"
            exact
            path="/registration"
            authRedirect="/user"
          >
            <RegisterPage />
          </ProtectedRoute>

          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LandingPage at "/home"
            exact
            path="/home"
            authRedirect="/user"
          >
            <LandingPage />
          </ProtectedRoute>
          <ProtectedRoute
            // with authRedirect:
            // - if logged in, redirects to "/user"
            // - else shows LandingPage at "/home"
            exact
            path="/mountains"
          >
            <MountainPage />
          </ProtectedRoute>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
      {/* <div>
      <div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
<div ref={mapContainer} className="map-container" />
</div> */}
    </Router>
  );
}

export default App;

