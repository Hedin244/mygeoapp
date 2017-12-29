import React from 'react';

const HistoryLog = (props) => {
  const activeId = props.activeId;
  const history = props.history.map((location, index) => {
    if (activeId === index) return <a className="list-group-item active" key={index} onClick={props.handleClick} id={index}>{location.ip}</a>
    else return <a className="list-group-item" key={index} onClick={props.handleClick} id={index}>{location.ip}</a>
  });
  const reverseHistory = history.slice(0).reverse();
  return(
    <div className="form-group">
      {reverseHistory}
    </div>
  )
}

export default HistoryLog;
