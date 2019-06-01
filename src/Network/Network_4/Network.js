import React, { useState } from 'react';
import NetworkLines from './NetworkLines';
import NetworkLanguages from './NetworkLanguages';
import NetworkTexts from './NetworkTexts';
import NetworkCircles from './NetworkCircles';
import { isMobile } from 'react-device-detect';

const Network4 = ({ }) => {
  const [selected, setSelected] = useState('');
  const svgHeight = isMobile ? window.innerHeight * 0.6 : 600;
  const svgWidth = svgHeight;

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
        viewBox='0 0 510.2 510.2'
        width={svgWidth}
        height={svgHeight}
        style={{ border: '0px solid rgba(0,0,0,1)', margin: 'auto' }}
      >
        <NetworkLines selected={selected} />
        <NetworkCircles selected={selected} setSelected={selectedCallback} />
        <NetworkLanguages selected={selected} />
        <NetworkTexts selected={selected} />
      </svg>
    </div>
  );
};

export default Network4;
