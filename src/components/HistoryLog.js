import React from 'react';

const HistoryLog = (props) => {
  let locationCount = 0;
  const history = props.history.map( location => {
      let listItem = <a className="list-group-item" key={locationCount} onClick={props.handleClick} id={locationCount}>{location.ip}</a>;
      locationCount++;
      return listItem;
  });
  return(
    <div className="form-group">
      {history}
    </div>
  )
}

export default HistoryLog;
