import React, { useEffect } from 'react';
import BluePetal from './BluePetal';

const BluePetals = ({ categories }) => {
  const svgWidth = window.innerWidth * 0.9;

  // useEffect(() => {
  //   nOfPetals = getNumberOfPetals(value);
  //   console.log('nOfPetals', nOfPetals);
  // }, [value]);

  return (
    <div className='flex w-100 justify-center flex-column'>
      <svg
        className='viz'
        x='0px'
        y='0px'
        viewBox='0 0 500 500'
        width={svgWidth}
        height={svgWidth}
        style={{ border: '0px solid rgba(0,0,0,0.2)', margin: 'auto' }}
      >
        <defs>
          <linearGradient
            id='blue_petal_gradient_1'
            gradientUnits='userSpaceOnUse'
            x1='894.2933'
            y1='571.4385'
            x2='1009.0841'
            y2='372.6149'
            gradientTransform='matrix(2.263869e-02 0.9997 0.9997 -2.263869e-02 -361.1819 -922.6556)'
          >
            <stop offset='0' style={{ stopColor: '#E8E8DF' }} />
            <stop offset='0.167' style={{ stopColor: '#DAE8DF' }} />
            <stop offset='0.4789' style={{ stopColor: '#B6E2E7' }} />
            <stop offset='1' style={{ stopColor: '#8993C7' }} />
          </linearGradient>
        </defs>
        <g transform={`translate(240, 140)`}>
          {categories.map((category, i) => {
            return <BluePetal key={i} id={i} value={category.value} />;
          })}
        </g>
      </svg>
    </div>
  );
};

export default BluePetals;
