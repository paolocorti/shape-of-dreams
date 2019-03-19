import React, { useEffect } from 'react';
import BluePetal from './BluePetal';

const BluePetals = ({ categories }) => {
  const svgWidth = 400;

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
        style={{ border: '1px solid rgba(0,0,0,0.2)', margin: 'auto' }}
      >
        <defs>
          <linearGradient
            id='blue_petal_gradient_1'
            gradientUnits='userSpaceOnUse'
            x1='929.0724'
            y1='567.9146'
            x2='1043.8632'
            y2='369.0911'
            gradientTransform='matrix(2.263869e-02 0.9997 0.9997 -2.263869e-02 -265.4176 -866.1351)'
          >
            x1="929.0724" y1="567.9146" x2="1043.8632" y2="369.0911"
            <stop offset='0' style={{ stopColor: '#E8E8DF' }} />
            <stop offset='0.167' style={{ stopColor: '#DAE8DF' }} />
            <stop offset='0.4789' style={{ stopColor: '#B6E2E7' }} />
            <stop offset='1' style={{ stopColor: '#8993C7' }} />
          </linearGradient>

          <linearGradient
            id='blue_petal_gradient_2'
            gradientUnits='userSpaceOnUse'
            x1='2.002'
            y1='23.5385'
            x2='263.2779'
            y2='17.622'
          >
            <stop offset='0' style={{ stopColor: '#4A68AF' }} />
            <stop
              offset='1'
              style={{ stopColor: '#4A68AF', stopOpacity: 0.2 }}
            />
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
