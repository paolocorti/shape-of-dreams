import React, { useEffect } from 'react';
import PetalRow from './PetalRow';
import { isMobile } from 'react-device-detect';

const getNumberOfPetals = n => {
  if (n < 50) {
    return 1;
  } else if (n >= 50 && n < 100) {
    return 2;
  } else if (n >= 100 && n < 3000) {
    return Math.floor(n / 100) + 2;
  } else if (n >= 3000 && n < 5000) {
    return 33;
  } else if (n >= 5000) {
    return 33;
  }
};

const languageLabel = {
  EN: 'English',
  AR: 'Arabic',
  ES: 'Spanish',
  FR: 'French',
  PO: 'Portuguese',
  RU: 'Russian',
  JP: 'Japanese',
  IN: 'Indu'
};

const Petals = ({ name, language, year, value, index }) => {
  const svgWidth = isMobile ? window.innerWidth * 0.55 : 250;
  let nOfPetals = getNumberOfPetals(value);

  useEffect(() => {
    nOfPetals = getNumberOfPetals(value);
  }, [value]);

  return (
    <React.Fragment>
      <div className='ph3 topic' style={{ fontSize: '22px' }}>
        {name}
      </div>
      <div className='mt0 value' style={{ fontSize: '16px', opacity: 0.6 }}>
        {languageLabel[language]} - {year}
      </div>
      <svg
        className='viz mt0'
        x='0px'
        y='0px'
        viewBox='0 0 300 300'
        width={svgWidth}
        height={svgWidth}
        style={{
          border: '0px solid rgba(0,0,0,0.2)',
          margin: '0 auto'
        }}
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
            <stop offset='0%' stopColor='rgb(217,132,132)' stopOpacity='1' />
            <stop offset='61%' stopColor='rgb(237,207,201)' stopOpacity='1' />
            <stop offset='100%' stopColor='rgb(230,235,237)' stopOpacity='1' />
          </linearGradient>
        </defs>
        <g transform={`translate(105, 20)`}>
          {nOfPetals > 20 && (
            <PetalRow
              id={3}
              petals={nOfPetals > 20 && nOfPetals < 33 ? nOfPetals - 20 : 13}
              offset={20}
              index={`${index}-${language}-${year}`}
            />
          )}
          {nOfPetals > 9 && (
            <PetalRow
              id={2}
              petals={nOfPetals > 9 && nOfPetals < 20 ? nOfPetals - 9 : 11}
              offset={9}
              index={`${index}-${language}-${year}`}
            />
          )}
          {nOfPetals > 0 && (
            <PetalRow
              id={1}
              petals={nOfPetals > 9 ? 9 : nOfPetals}
              offset={0}
              index={`${index}-${language}-${year}`}
            />
          )}
        </g>
      </svg>
    </React.Fragment>
  );
};

export default Petals;
