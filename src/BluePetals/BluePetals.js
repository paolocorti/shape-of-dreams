import React from 'react';
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

const categoriesLabels = [
  'Animals',
  'Body',
  'Flying and falling',
  'Food',
  'Money',
  'Nature',
  'People',
  'Pregnancy',
  'Supernatural',
  'Travels',
  'Weather events',
  'Other'
];

const BluePetals = ({
  categories,
  language,
  year,
  selectedPetal,
  setSelectedPetal
}) => {
  const svgWidth = window.innerWidth * 0.6;
  return (
    <div className='flex w-100 justify-center flex-column'>
      <div className='ph3 topic' style={{ fontSize: '22px' }}>
        {selectedPetal === null
          ? 'Tap on the circles for the categories'
          : categoriesLabels[selectedPetal]}
      </div>
      <div className='mt1 value' style={{ fontSize: '16px', opacity: 0.6 }}>
        {languageLabel[language]} - {year}
      </div>
      <svg
        className='viz'
        x='0px'
        y='0px'
        viewBox='0 0 600 600'
        width={svgWidth}
        height={svgWidth}
        style={{ border: '0px solid rgba(0,0,0,1)', margin: 'auto' }}
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
            if (category.value < 11) {
              return (
                <BluePetal10 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (category.value >= 11 && category.value <= 20) {
              return (
                <BluePetal20 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (category.value >= 21 && category.value <= 30) {
              return (
                <BluePetal30 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (category.value >= 31 && category.value <= 40) {
              return (
                <BluePetal40 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (category.value >= 41 && category.value <= 50) {
              return (
                <BluePetal50 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (category.value >= 51 && category.value <= 60) {
              return (
                <BluePetal60 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (category.value >= 61 && category.value <= 70) {
              return (
                <BluePetal70 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (category.value >= 71 && category.value <= 80) {
              return (
                <BluePetal80 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (category.value >= 81 && category.value <= 90) {
              return (
                <BluePetal90 id={i} key={i} selectedPetal={selectedPetal} />
              );
            } else if (category.value >= 91 && category.value <= 100) {
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
