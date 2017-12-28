import React from 'react';

const HistoryLog = (props) => {
  const history = props.history.slice(0).reverse().map( location => {
    return <li key={location.ip}>{location.ip}</li>
  });
  return(
    <div>
      <ul>{history}</ul>
    </div>
  )
}

export default HistoryLog;
