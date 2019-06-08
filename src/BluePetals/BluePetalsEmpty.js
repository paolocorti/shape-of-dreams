import React from 'react';
import { isMobile } from 'react-device-detect';
import BluePetalEmpty from './BluePetalEmpty';
import './BluePetal.scss';
import Grid from './Grid';
import { scaleLinear } from 'd3-scale';

const languageLabel = {
  EN: 'English',
  AR: 'Arabic',
  SP: 'Spanish',
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

const BluePetalsEmpty = ({
  categories,
  language,
  year,
  selectedPetal,
  setSelectedPetal
}) => {
  const svgWidth = isMobile ? window.innerHeight * 0.4 : window.innerHeight * 0.5;
  const dimensionScale = scaleLinear().domain([0, 24]).range([0, 100])

  return (
    <div className='flex w-100 justify-center flex-column'>
      <div className='ph3 topic' style={{ fontSize: '22px' }}>
        {'No Data'}
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
          <linearGradient id="blue_petal_empty" gradientUnits="userSpaceOnUse" x1="1726.616" y1="1386.1411" x2="1783.4998" y2="1287.6155" gradientTransform="matrix(2.263869e-02 0.9997 0.9997 -2.263869e-02 -1310.4547 -1701.4132)">
            <stop offset="0" style={{ stopColor: '#EDECED' }} />
            <stop offset="4.995037e-02" style={{ stopColor: '#E8E9EA' }} />
            <stop offset="0.3898" style={{ stopColor: '#CADADA' }} />
            <stop offset="1" style={{ stopColor: '#7B8F8C' }} />
          </linearGradient>
        </defs>
        <Grid
          setSelectedPetal={setSelectedPetal}
          selectedPetal={selectedPetal}
        />
        <g transform={`translate(300, 280)`} id='blupetals'>
          <BluePetalEmpty id={0} key={0} selectedPetal={selectedPetal} />
          <BluePetalEmpty id={1} key={1} selectedPetal={selectedPetal} />
          <BluePetalEmpty id={2} key={2} selectedPetal={selectedPetal} />
          <BluePetalEmpty id={3} key={3} selectedPetal={selectedPetal} />
          <BluePetalEmpty id={4} key={4} selectedPetal={selectedPetal} />
          <BluePetalEmpty id={5} key={5} selectedPetal={selectedPetal} />
          <BluePetalEmpty id={6} key={6} selectedPetal={selectedPetal} />
          <BluePetalEmpty id={7} key={7} selectedPetal={selectedPetal} />
          <BluePetalEmpty id={8} key={8} selectedPetal={selectedPetal} />
          <BluePetalEmpty id={9} key={9} selectedPetal={selectedPetal} />
          <BluePetalEmpty id={10} key={10} selectedPetal={selectedPetal} />
          <BluePetalEmpty id={11} key={11} selectedPetal={selectedPetal} />
          <circle r={6} fill={'#607dbd'} cx={1} cy={21} />
        </g>
      </svg>
    </div>
  );
};

export default BluePetalsEmpty;
