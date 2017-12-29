import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const googleMapsKey = 'AIzaSyD-amUmA9_p9Tnc7-d-SObvO_MVYU2Q7e8&&v=3.exp';

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleMapsKey}&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="map" />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    center={{ lat: parseFloat(props.mapMarker.latitude), lng: parseFloat(props.mapMarker.longitude) }}
  />
);

export default Map;
