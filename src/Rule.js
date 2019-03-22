import React from 'react';
import './Rule.css';

function Rule({ score, doScore, name }) {
  if (score === undefined) {
    return (
      <tr className="Rule Rule-active" onClick={doScore}>
        <td className="Rule-name">{name}</td>
        <td className="Rule-score">{score}</td>
      </tr>
    );
  } else {
    return (
      <tr className="Rule Rule-active">
        <td className="Rule-name">{name}</td>
        <td className="Rule-score">{score}</td>
      </tr>
    );
  }
}

export default Rule;
