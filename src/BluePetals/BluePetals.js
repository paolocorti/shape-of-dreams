import React from 'react';
import { isMobile } from 'react-device-detect';
import BluePetal1 from './BluePetal1';
import BluePetal2 from './BluePetal2';
import BluePetal3 from './BluePetal3';
import BluePetal4 from './BluePetal4';
import BluePetal5 from './BluePetal5';
import BluePetal6 from './BluePetal6';
import BluePetal7 from './BluePetal7';
import BluePetal8 from './BluePetal8';
import BluePetal9 from './BluePetal9';
import BluePetal10 from './BluePetal10';
import BluePetal11 from './BluePetal11';
import BluePetal12 from './BluePetal12';
import BluePetal13 from './BluePetal13';
import BluePetal14 from './BluePetal14';
import BluePetal15 from './BluePetal15';
import BluePetal16 from './BluePetal16';
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

const BluePetals = ({
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
          <linearGradient id="blue_petal_gradient_1" x1="2015.78" y1="-1598.61" x2="2062.78" y2="-1517.2" gradientTransform="matrix(0.02, 1, -1, 0.02, -1549.47, -1979.97)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_2" x1="1733.43" y1="-1894.2" x2="1784.95" y2="-1804.96" gradientTransform="matrix(0.02, 1, -1, 0.02, -1829.49, -1693.56)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_3" x1="1451.12" y1="-2189.74" x2="1507.17" y2="-2092.67" gradientTransform="matrix(0.02, 1, -1, 0.02, -2109.5, -1407.14)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_4" x1="1168.76" y1="-2485.58" x2="1229.47" y2="-2380.44" gradientTransform="matrix(0.02, 1, -1, 0.02, -2389.52, -1120.73)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_5" x1="886.52" y1="-2780.84" x2="951.58" y2="-2668.15" gradientTransform="matrix(0.02, 1, -1, 0.02, -2669.53, -834.31)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_6" x1="604.16" y1="-3076.56" x2="673.83" y2="-2955.89" gradientTransform="matrix(0.02, 1, -1, 0.02, -2949.54, -547.9)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_7" x1="321.87" y1="-3372.08" x2="396.03" y2="-3243.62" gradientTransform="matrix(0.02, 1, -1, 0.02, -3229.56, -261.49)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_8" x1="39.65" y1="-3667.26" x2="118.14" y2="-3531.3" gradientTransform="matrix(0.02, 1, -1, 0.02, -3509.57, 24.93)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_9" x1="-242.64" y1="-3962.73" x2="-159.68" y2="-3819.03" gradientTransform="matrix(0.02, 1, -1, 0.02, -3789.59, 311.34)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_10" x1="-525.01" y1="-4258.37" x2="-437.47" y2="-4106.76" gradientTransform="matrix(0.02, 1, -1, 0.02, -4069.6, 597.76)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_11" x1="-807.32" y1="-4553.9" x2="-715.29" y2="-4394.49" gradientTransform="matrix(0.02, 1, -1, 0.02, -4349.61, 884.17)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_12" x1="-1089.65" y1="-4849.53" x2="-993.06" y2="-4682.24" gradientTransform="matrix(0.02, 1, -1, 0.02, -4629.63, 1170.58)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_13" x1="-1372" y1="-5145.23" x2="-1270.81" y2="-4969.97" gradientTransform="matrix(0.02, 1, -1, 0.02, -4909.64, 1457)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_14" x1="-1402.58" y1="5240.21" x2="-1296.93" y2="5057.22" gradientTransform="matrix(0.02, 1, 1, -0.02, -4994.92, 1487.21)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_15" x1="-1684.85" y1="5535.76" x2="-1574.67" y2="5344.92" gradientTransform="matrix(0.02, 1, 1, -0.02, -5274.94, 1773.63)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
          <linearGradient id="blue_petal_gradient_16" x1="-2242.41" y1="-5492.25" x2="-2127.76" y2="-5293.68" gradientTransform="matrix(0.02, 1, -1, 0.02, -5209.82, 2327.54)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e7e6de" /><stop offset="0.17" stop-color="#d9e7de" /><stop offset="0.48" stop-color="#b6e2e6" /><stop offset="1" stop-color="#8892c5" /></linearGradient>
        </defs>
        <Grid
          setSelectedPetal={setSelectedPetal}
          selectedPetal={selectedPetal}
        />
        <g transform={`translate(300, 280)`} id='blupetals'>
          {categories
            .map((category, i) => {
              const value = category.value
              if (value === 1) {
                return (
                  <BluePetal1 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 2) {
                return (
                  <BluePetal2 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 3) {
                return (
                  <BluePetal3 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 4) {
                return (
                  <BluePetal4 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 5) {
                return (
                  <BluePetal5 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 6) {
                return (
                  <BluePetal6 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 7) {
                return (
                  <BluePetal7 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 8) {
                return (
                  <BluePetal8 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 9) {
                return (
                  <BluePetal9 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 10) {
                return (
                  <BluePetal10 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 11) {
                return (
                  <BluePetal11 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 12) {
                return (
                  <BluePetal12 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 13) {
                return (
                  <BluePetal13 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 14) {
                return (
                  <BluePetal14 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value === 15) {
                return (
                  <BluePetal15 id={i} key={i} selectedPetal={selectedPetal} />
                );
              } else if (value > 15) {
                return (
                  <BluePetal16 id={i} key={i} selectedPetal={selectedPetal} />
                );
              }
            })}
          <circle r={6} fill={'#607dbd'} cx={1} cy={21} />
        </g>
      </svg>
    </div>
  );
};

export default BluePetals;
