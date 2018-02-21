import React from 'react';

const Button = props => {
  const buttonStyles = {
    color: props.color,
    backgroundColor: props.backgroundColor,
    border: `2px solid ${props.borderColor}`,
    textTransform: 'uppercase',
    padding: "20px",
    borderRadius: "5px"
  }
  return <button style={buttonStyles}>{props.text}</button>
}
 
export default Button;