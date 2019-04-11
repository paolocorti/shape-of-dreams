import React from 'react';
import NetworkLines from './NetworkLines';
import NetworkLanguages from './NetworkLanguages';
import NetworkTexts from './NetworkTexts';
import NetworkPetals from './NetworkPetals';

const Network = ({}) => {
  const svgWidth = window.innerWidth * 0.9;
  const svgHeight = svgWidth * 1.33;

  return (
    <div className='flex w-100 justify-center items-center flex-column'>
      <svg
        className='viz'
        x='0px'
        y='0px'
        viewBox='0 0 600 800'
        width={svgWidth}
        height={svgHeight}
        style={{ border: '0px solid rgba(0,0,0,1)', margin: 'auto' }}
      >
        <NetworkPetals />
        <NetworkLines />
        <NetworkLanguages />
        <NetworkTexts />
      </svg>
    </div>
  );
};

export default Network;
