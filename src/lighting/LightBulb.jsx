// LightBulb.js
import React from 'react';

function LightBulb(props) {
  const bulbStyle = {
    width: 100,
    height: 100,
    borderRadius: '50%',
    backgroundColor: props.isLit ? 'yellow' : 'gray',
    margin: 20,
    border: '2px solid black'
  };

  return (
    <div>
      <h3>Bóng đèn</h3>
      <div style={bulbStyle}></div>
    </div>
  );
}

export default LightBulb;