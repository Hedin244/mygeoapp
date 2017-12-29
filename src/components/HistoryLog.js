import React from 'react';

const HistoryLog = (props) => {
  let id = -1;
  const history = props.history.slice(0).reverse().map( location => {
      id++;
      return <a className="list-group-item" key={id} onClick={props.handleClick} id={id}>{location.ip}</a>
  });
  return(
    <div className="form-group">
      {history}
    </div>
  )
}

export default HistoryLog;
