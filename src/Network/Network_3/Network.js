import React, { useState } from 'react';
import NetworkLines from './NetworkLines';
import NetworkLanguages from './NetworkLanguages';
import NetworkTexts from './NetworkTexts';
import NetworkCircles from './NetworkCircles';
import { isMobile, isTablet } from 'react-device-detect';

const languageLabel = {
  EN: 'English',
  AR: 'Arabic',
  SP: 'Spanish',
  FR: 'French',
  PO: 'Portuguese',
  RU: 'Russian',
  JP: 'Japanese',
  IN: 'Indonesian'
};

const Network3 = ({ year }) => {
  const [hovered, setHovered] = useState('');
  const [clicked, setClicked] = useState('');
  const svgWidth = isMobile ? window.innerHeight * 0.7 : window.innerHeight * 0.6;
  const svgHeight = svgWidth;
  const selectedCallback = language => {
    const selection = language === hovered ? '' : language;
    setHovered(selection);
  };

  const selectedClickedCallback = language => {
    const selection = language === clicked ? '' : language;
    setClicked(selection);
  }

  const selected = clicked ? clicked : hovered;

  return (
    <div className='flex w-100 justify-center items-center flex-column'>
      <div className='mt0 value absolute' style={{ fontSize: '22px', opacity: 1, top: '-20px' }}>
        {selected ? languageLabel[selected] : 'All the languages'} - {year}
      </div>
      <svg
        className='viz'
        x='0px'
        y='0px'
        viewBox='0 0 430 430'
        width={svgWidth}
        height={svgHeight}
        style={{ maxWidth: isMobile ? (isTablet ? '500px' : (window.innerHeight < 550 ? '280px' : '400px')) : '520px' }}
      >
        <NetworkLines selected={selected} />
        <NetworkCircles selected={selected} setSelected={selectedCallback} setClicked={selectedClickedCallback} />
        <NetworkLanguages selected={selected} />
        <NetworkTexts selected={selected} />
      </svg>
    </div>
  );
};

export default Network3;
