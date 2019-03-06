import React from 'react';
import PetalStroke from './PetalStroke.js';

import './Petal.scss';

const PetalRow = ({ id, petals, translate, offset }) => {
  const petalsArray = [...Array(petals).keys()].reverse();

  console.log(`petal-row-${id}`, petals);

  return (
    <g
      className={`petal-row-${id}`}
      style={{ transform: `translate(${translate})` }}
    >
      {petalsArray.map((n, i) => {
        return <PetalStroke key={i} id={offset + (i + 1)} />;
      })}
    </g>
  );
};

export default PetalRow;
