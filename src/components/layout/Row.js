import React from 'react';

const Row = props => {
  return <div className="App-row">
    <h4 className="App-subtitle" style={{color: "#A1A6A9"}}>{props.title}</h4>
    <hr/>
    {props.children}
  </div>;
}

export default Row;