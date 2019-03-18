import React, { useEffect } from 'react';
import BluePetal from './BluePetal';

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

const BluePetals = ({ name, language, year, value }) => {
  const svgWidth = 400;
  let nOfPetals = getNumberOfPetals(value);

  useEffect(() => {
    nOfPetals = getNumberOfPetals(value);
    console.log('nOfPetals', nOfPetals);
  }, [value]);

  return (
    <div className='flex w-100 justify-center flex-column'>
      <svg
        className='viz'
        x='0px'
        y='0px'
        viewBox='0 0 500 500'
        width={svgWidth}
        height={svgWidth}
        style={{ border: '1px solid rgba(0,0,0,0.2)', margin: 'auto' }}
      >
        <defs>
          <linearGradient
            id='blue_petal_gradient_1'
            gradientUnits='userSpaceOnUse'
            x1='835.6201'
            y1='476.9558'
            x2='950.4109'
            y2='278.1323'
            gradientTransform='matrix(2.263869e-02 0.9997 0.9997 -2.263869e-02 -265.4176 -866.1351)'
          >
            <stop offset='0' style={{ stopColor: '#E9E8DF' }} />
            <stop offset='0.167' style={{ stopColor: '#DBE9DF' }} />
            <stop offset='0.4789' style={{ stopColor: '#B7E2E8' }} />
            <stop offset='1' style={{ stopColor: '#8A94C8' }} />
          </linearGradient>
          <linearGradient
            id='blue_petal_gradient_2'
            gradientUnits='userSpaceOnUse'
            x1='0.4457'
            y1='23.7461'
            x2='262.7527'
            y2='17.8063'
          >
            <stop offset='0' style={{ stopColor: '#4A68AF' }} />
            <stop
              offset='1'
              style={{ stopColor: '#4A68AF', stopOpacity: 0.2 }}
            />
          </linearGradient>
        </defs>
        <g transform={`translate(240, 100)`}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n, i) => {
            return <BluePetal key={i} id={n} />;
          })}
        </g>
      </svg>
    </div>
  );
};

export default BluePetals;
