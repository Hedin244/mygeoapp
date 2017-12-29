import React from 'react';

const InfoPanel = (props) => {
  const location = props.location;
  return(
    <div  className="well well-sm">
      <p>Ip:{location.ip}</p>
      <p>Country code: {location.country_code}</p>
      <p>Country name: {location.country_name}</p>
      <p>Region code: {location.region_code}</p>
      <p>Region name: {location.region_name}</p>
      <p>City: {location.city}</p>
      <p>Zip code: {location.zip_code}</p>
      <p>Time zone: {location.time_zone}</p>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  );
};

export default InfoPanel;
