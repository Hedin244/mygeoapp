import React, { Component } from 'react';
import InfoPanel from './InfoPanel.js';
import Map from './Map.js';

class DisplayPanel extends Component {
  render() {
    const location = this.props.location;
    return(
      <div className="row">
        <div className="col-xs-7">
          <Map mapMarker={location} />
        </div>
        <div className="col-xs-5">
          <div className="Info">
            <InfoPanel location={location} />
          </div>
        </div>
      </div>
    );
  }
};

DisplayPanel.defaultProps = {
  location: {
               ip: "",
               country_code: "",
               country_name: "",
               region_code: "",
               region_name: "",
               city: "",
               zip_code: "",
               time_zone: "",
               latitude: 0,
               longitude: 0
            }
}

export default DisplayPanel;
