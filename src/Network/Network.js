import React, { useState } from 'react';
import NetworkLines from './NetworkLines';
import NetworkLanguages from './NetworkLanguages';
import NetworkTexts from './NetworkTexts';
import NetworkPetals from './NetworkPetals';

const Network = ({}) => {
  const [selected, setSelected] = useState('');
  const svgHeight = window.innerHeight * 0.6;
  const svgWidth = svgHeight / 1.33;

  const selectedCallback = language => {
    const selection = language === selected ? '' : language;
    setSelected(selection);
  };

  console.log('selected', selected);

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
        <NetworkPetals selected={selected} setSelected={selectedCallback} />
        <NetworkLines selected={selected} />
        <NetworkLanguages selected={selected} />
        <NetworkTexts selected={selected} />
      </svg>
    </div>
  );
};

export default Network;
