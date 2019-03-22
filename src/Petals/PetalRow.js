import React from 'react';
import PetalStroke from './PetalStroke.js';

import './Petal.scss';

const PetalRow = ({ id, petals, translate, offset, index }) => {
  const petalsArray = [...Array(petals).keys()].reverse();

  return (
    <g
      className={`petal-row-${id}`}
      style={{ transform: `translate(${translate})` }}
    >
      {petalsArray.map((n, i) => {
        return <PetalStroke key={i} id={offset + (i + 1)} index={index} />;
      })}
    </g>
  );
};

export default PetalRow;
