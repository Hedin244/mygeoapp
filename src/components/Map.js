import React from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="Map" />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: parseFloat(props.mapMarker.latitude), lng: parseFloat(props.mapMarker.longitude) }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
);

export default Map;