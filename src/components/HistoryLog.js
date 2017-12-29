import React from 'react';

const HistoryLog = (props) => {
  let id = 0;
  const history = props.history.slice(0).reverse().map( location => {
    if (id === props.activeId) return <a className="list-group-item active" key={location.ip} onClick={props.handleClick}>{location.ip}</a>
    else return <a className="list-group-item" key={location.ip} onClick={props.handleClick}>{location.ip}</a>
  });
  return(
    <div className="form-group">
      {history}
    </div>
  )
}

export default HistoryLog;
