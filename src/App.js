import React, { Component } from 'react';
import './App.css';
import InfoPanel from './components/InfoPanel.js';
import Map from './components/Map.js';
import HistoryLog from './components/HistoryLog.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        inputValue: " ",
        history: [
          {
            ip: "0",
            country_code: "0",
            country_name: "0",
            region_code: "0",
            region_name: "0",
            city: "0",
            zip_code: "0",
            time_zone: "0",
            latitude: "0",
            longitude: "0"
          },
          {
            ip: "1",
            country_code: "1",
            country_name: "1",
            region_code: "1",
            region_name: "1",
            city: "1",
            zip_code: "1",
            time_zone: "1",
            latitude: "1",
            longitude: "1"
          },
          {
            ip: "2",
            country_code: "2",
            country_name: "2",
            region_code: "2",
            region_name: "2",
            city: "2",
            zip_code: "2",
            time_zone: "2",
            latitude: "2",
            longitude: "2"
          }
        ]
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  getNewLocation(ip) {
    var getUrl = 'https://freegeoip.net/json/';
    if (typeof ip !== 'undefined') getUrl = 'https://freegeoip.net/json/' + ip;
    console.log('url: ', getUrl);
    fetch(getUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('fetch', responseJson);
        let newHistory = this.state.history;
        newHistory.push(responseJson);
        this.setState({
          history: newHistory
        });
      })
    .catch((error) => {
     //console.error(error);
    });
  }
  handleSubmit(e) {
    console.log('SUBMIT!!!');
    this.getNewLocation(this.state.inputValue);
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  componentWillMount() {
    this.getNewLocation();
  }
  render() {
    return (
      <div className="container-fluid well">
          <div className="row">

      {/* --- Left Panel --- */}
            <div className="col-xs-4">
              <div className="Left_List">
                <HistoryLog history={this.state.history} />
              </div>
            </div>
      {/* --- END Left Panel --- */}

      {/* --- Right Panel --- */}
            <div className="col-xs-8">

      {/* --- Top map and info --- */}
              <div className="row">
                <div className="col-xs-7">
                </div>
                <div className="col-xs-5">
                  <div className="Info">
                    <InfoPanel location={this.state.history[this.state.history.length-1]} />
                  </div>
                </div>
              </div>
        {/* --- END Top map and info --- */}

        {/* --- Search input and button --- */}
              <div className="row top_margin bot_margin">
                <div className="col-xs-10">
                  <input onChange={this.handleChange} className="form-control" />
                </div>
                <div className="col-xs-2">
                  <div><button onClick={this.handleSubmit} className="btn btn-block btn-primary">search</button></div>
                </div>
              </div>
        {/* --- END Search input and button --- */}

        {/* --- Bottom map and info --- */}
              <div className="row">
                <div className="col-xs-7">
                  <p>Map </p>
                </div>
                <div className="col-xs-5">
                  <div className="Info">
                    <InfoPanel location={this.state.history[this.state.history.length-2]} />
                  </div>
                </div>
              </div>
        {/* --- END Bottom map and info --- */}

            </div>
        {/* --- End Right Panel --- */}

          </div>
      </div>
    );
  }
}

export default App;
