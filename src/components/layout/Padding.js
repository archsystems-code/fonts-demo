import React from 'react';

const Padding = props => {
  return <div className={props.className} style={{padding: props.amount}}>{props.children}</div>
}
 
export default Padding;