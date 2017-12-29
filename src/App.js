import React, { Component } from 'react';
import './App.css';
import HistoryLog from './components/HistoryLog.js';
import DisplayPanel from './components/DisplayPanel.js';
import SearchPanel from './components/SearchPanel.js';

class App extends Component {
  constructor(...args) {
      super(...args);
      this.state = {
        inputValue: "",
        activeHistoryLink: null,
        isAlertOn: false,
        history: []
      };
  }
  getNewLocation = (ip) => {
    const getUrl = 'https://freegeoip.net/json/' + ip;
    fetch(getUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        let newHistory = this.state.history;
        newHistory.push(responseJson);
        this.setState({ history: newHistory });
      })
    .catch((error) => {
      this.setState({ isAlertOn: true });
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue !== "") {
      this.getNewLocation(this.state.inputValue);
      this.setState({
        inputValue: "",
        isAlertOn: false
      });
    }
    else this.setState({ isAlertOn: true });
  }
  handleChange = (e) => {
    const inputValue = e.target.value.trim();
    this.setState({ inputValue });
  }
  handleClickInHistory = (e) => {
    this.setState({ activeHistoryLink: parseInt(e.target.id, 10) });
  }
  componentDidMount = () => {
    this.getNewLocation("");
  }
  render() {
    const lastLocation = this.state.history[this.state.history.length-1];
    const chosenLocation = this.state.history[this.state.activeHistoryLink]
    const alarm = this.state.isAlertOn ? "alert alert-danger" : "alert alert-danger hidden";
    return (
      <div className="container-fluid well">
          <div className="row">

            <div className="col-xs-4">
              <div className="left_list">
                <HistoryLog
                  history={this.state.history}
                  handleClick={this.handleClickInHistory}
                  activeId={this.state.activeHistoryLink}
                />
              </div>
            </div>

            <div className="col-xs-8">
              <DisplayPanel location={lastLocation} />

              <SearchPanel
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                inputValue={this.state.inputValue}/>

                <div className={alarm}>
                  <strong>Error!</strong> Ip or URL You provided was wrong.
                </div>

              <DisplayPanel location={chosenLocation} />
            </div>

          </div>
      </div>
    );
  }
}

export default App;
