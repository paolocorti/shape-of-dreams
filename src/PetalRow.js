import React from 'react';
import PetalStroke from './PetalStroke.js';

import './Petal.css';

const PetalRow = ({ id, petals, translate, offset }) => {
  const petalsArray = [...Array(petals).keys()].reverse();

  return (
    <g
      className={`petal-row-${id}`}
      style={{ transform: `translate(${translate})` }}
    >
      {petalsArray.map((n, i) => {
        console.log(n);
        return <PetalStroke key={i} id={offset + (i + 1)} />;
      })}
    </g>
  );
};

export default PetalRow;
