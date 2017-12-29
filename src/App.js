import React, { Component } from 'react';
import './App.css';
import HistoryLog from './components/HistoryLog.js';
import DisplayPanel from './components/DisplayPanel.js';
import SearchPanel from './components/SearchPanel.js';
import $ from 'jquery';

class App extends Component {
  constructor(...args) {
      super(...args);
      this.state = {
        inputValue: "",
        activeHistoryLink: null,
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
        this.setState({
          history: newHistory
        });
      })
    .catch((error) => {
      //error
      window.alert("Invalid ip or adress");
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.inputValue !== "") {
      this.getNewLocation(this.state.inputValue);
      this.setState({
        inputValue: ""
      });
    }
  }
  handleChange = (e) => {
    const inputValue = e.target.value.trim();
    this.setState({ inputValue });
  }
  handleClickInHistory = (e) => {
    this.setState({ activeHistoryLink: e.target.id });
    $('.list-group-item').removeClass('active');
    e.target.classList.add("active");
  }
  componentDidMount = () => {
    this.getNewLocation(" ");
  }
  render() {
    const lastLocation = this.state.history[this.state.history.length-1];
    const chosenLocation = this.state.history[this.state.activeHistoryLink]
    return (
      <div className="container-fluid well">
          <div className="row">

            <div className="col-xs-4">
              <div className="Left_List">
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
              <DisplayPanel location={chosenLocation} />
            </div>

          </div>
      </div>
    );
  }
}

export default App;
