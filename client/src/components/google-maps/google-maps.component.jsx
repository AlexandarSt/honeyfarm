import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const styles = require('./GoogleMapStyles.json');

const GoogleMaps = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=AIzaSyBAlS_RkD7Ki1-_CiMvl60i18vkTZPwtlw&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `320px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 44.098554, lng: 21.430893 }}
    defaultOptions={{
      disableDefaultUI: true, // disable default map UI
      draggable: true, // make map draggable
      keyboardShortcuts: false, // disable keyboard shortcuts
      scaleControl: true, // allow scale control
      scrollwheel: false, // allow scroll wheel
      styles: styles, // change default map styles
      fullscreenControl: true // show fullscreen button
    }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 44.098554, lng: 21.430893 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);


export default GoogleMaps;