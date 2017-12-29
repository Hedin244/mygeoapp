import React, { Component } from 'react';
import './App.css';
import HistoryLog from './components/HistoryLog.js';
import DisplayPanel from './components/DisplayPanel.js';
import SearchPanel from './components/SearchPanel.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        inputValue: "",
        activeHistoryLink: null,
        history: []
      };
  }
  getNewLocation = (ip) => {
    let getUrl = 'https://freegeoip.net/json/';
    if (typeof ip !== 'undefined') getUrl = 'https://freegeoip.net/json/' + ip;
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
    });
  }
  handleSubmit = (e) => {
    e.preventDefault;
    this.getNewLocation(this.state.inputValue);
    e.target.value = "";
    this.setState({
      inputValue: ""
    })
  }
  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClickInHistory = (e) => {
    var selector, elems, makeActive;
    selector = 'a';
    elems = document.querySelectorAll(selector);
    makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');

    this.classList.add('active');
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('mousedown', makeActive);
  }
  componentDidMount = () => {
    this.getNewLocation();
  }
  render() {
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
              <DisplayPanel location={this.state.history[this.state.history.length-1]} />
              <SearchPanel handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
              <DisplayPanel location={this.state.history[this.state.activeHistoryLink]} />
            </div>

          </div>
      </div>
    );
  }
}

export default App;
