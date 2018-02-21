import React from 'react';

const ColorCircle = props => {
  const circleStyle = {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    border: '1px solid grey',
    backgroundColor: props.color
  }
  return <div style={circleStyle} />
}
 
export default ColorCircle;