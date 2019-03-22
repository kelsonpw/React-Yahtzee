import React from 'react';
import './Die.css';

function Die({ locked, handleClick, idx, val }) {
  return (
    <button
      className="Die"
      style={{ backgroundColor: locked ? 'darkred' : 'red' }}
      onClick={evt => handleClick(idx)}>
      {val}
    </button>
  );
}

export default Die;
