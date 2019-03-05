import React from 'react';
import Swipe from 'react-easy-swipe';
import PetalRow from './PetalRow';

const Petals = () => {
  const svgWidth = (window.innerWidth / 100) * 80;

  return (
    <svg
      className='viz'
      x='0px'
      y='0px'
      viewBox='0 0 300 300'
      width={svgWidth}
      height={svgWidth}
      style={{ border: '1px solid black', margin: 'auto' }}
    >
      <defs>
        <linearGradient
          id='petalGradient'
          x1='0%'
          y1='0%'
          x2='0%'
          y2='100%'
          gradientUnits='objectBoundingBox'
        >
          <stop offset='0%' stop-color='rgb(217,132,132)' stop-opacity='1' />
          <stop offset='61%' stop-color='rgb(237,207,201)' stop-opacity='1' />
          <stop offset='100%' stop-color='rgb(230,235,237)' stop-opacity='1' />
        </linearGradient>
      </defs>
      <g transform={`translate(105, 20)`}>
        <PetalRow id={3} petals={13} offset={20} />
        <PetalRow id={2} petals={11} offset={9} />
        <PetalRow id={1} petals={9} offset={0} />
      </g>
    </svg>
  );
};

export default Petals;
