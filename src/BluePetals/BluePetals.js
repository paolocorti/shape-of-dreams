import React from 'react';
import { isMobile } from 'react-device-detect';
import BluePetal10 from './BluePetal10';
import BluePetal20 from './BluePetal20';
import BluePetal30 from './BluePetal30';
import BluePetal40 from './BluePetal40';
import BluePetal50 from './BluePetal50';
import BluePetal60 from './BluePetal60';
import BluePetal70 from './BluePetal70';
import BluePetal80 from './BluePetal80';
import BluePetal90 from './BluePetal90';
import BluePetal100 from './BluePetal100';
import './BluePetal.scss';
import Grid from './Grid';
import { scaleLinear } from 'd3-scale';

const languageLabel = {
  EN: 'English',
  AR: 'Arabic',
  ES: 'Spanish',
  FR: 'French',
  PO: 'Portuguese',
  RU: 'Russian',
  JP: 'Japanese',
};

const categoriesLabels = [
  'Animals and insects',
  'Human Body',
  'Family and Relationships',
  'Falling and Flying',
  'Emotions',
  'Food',
  'Natural Elements',
  'Weather events',
  'Traveling and Transportations',
  'Money',
  'Supernatural',
  'Other'
];

const BluePetals = ({
  categories,
  language,
  year,
  selectedPetal,
  setSelectedPetal
}) => {
  const svgWidth = isMobile ? window.innerWidth * 0.8 : 500;
  const dimensionScale = scaleLinear().domain([0, 24]).range([0,100])

  return (
    <div className='flex w-100 justify-center flex-column'>
      <div className='ph3 topic' style={{ fontSize: '22px' }}>
        {selectedPetal === null
          ? 'All the categories'
          : categoriesLabels[selectedPetal]}
      </div>
      <div className='mt0 value' style={{ fontSize: '16px', opacity: 0.6 }}>
        {languageLabel[language]} - {year}
      </div>
      <svg
        className='viz'
        x='0px'
        y='0px'
        viewBox='0 0 600 600'
        width={svgWidth}
        height={svgWidth}
        style={{
          border: '0px solid rgba(0,0,0,1)',
          margin: 'auto',
          marginTop: '15px'
        }}
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
        <Grid
          setSelectedPetal={setSelectedPetal}
          selectedPetal={selectedPetal}
        />
        <g transform={`translate(300, 280)`} id='blupetals'>
          {categories.map((category, i) => {
            const value = dimensionScale(category.value)
            if (value < 11) {
              return (
                <BluePetal10 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (value >= 11 && value <= 20) {
              return (
                <BluePetal20 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (value >= 21 && value <= 30) {
              return (
                <BluePetal30 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (value >= 31 && value <= 40) {
              return (
                <BluePetal40 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (value >= 41 && value <= 50) {
              return (
                <BluePetal50 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (value >= 51 && value <= 60) {
              return (
                <BluePetal60 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (value >= 61 && value <= 70) {
              return (
                <BluePetal70 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (value >= 71 && value <= 80) {
              return (
                <BluePetal80 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (value >= 81 && value <= 90) {
              return (
                <BluePetal90 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (value >= 91 && value <= 100) {
              return (
                <BluePetal100 id={i} key={i} selectedPetal={selectedPetal} />
              );
            }
          })}
          <circle r={5} fill={'#607dbd'} cx={1} cy={20} />
        </g>
      </svg>
    </div>
  );
};

export default BluePetals;
