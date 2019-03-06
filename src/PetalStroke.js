import React from 'react';
import './Petal.scss';

const PetalStroke = ({ id }) => {
  return (
    <g className='petal' id={`petal-${id}`}>
      <path
        d='M51.37,24.3c-.28,6.4-2.3,19.23-1.27,22.92.89,3.2,2.21,9.25,3.36,12.42,1.47,4.06,3.79,7.21,6.24,10.59C68.17,81.93,90,97.29,92.8,108.16c.54,2.07-4.48,5.7-8.84,10.17-2.6,2.67-11.82,7.29-14.07,8.7a17.07,17.07,0,0,1-8.33,2.4c-6.08.27-11.59-2.35-17.44-3.67a46.26,46.26,0,0,0-17.58-.8c-5.3.87-10.65,2.61-16.07,2-4.36-.51-9.06-3.2-9.77-8.51,1.51-1.49,3.37-2.72,5-4.11a54.37,54.37,0,0,0,5-5c7.83-8.74,12.9-19.78,19.46-29.6,3.08-4.61,6.12-9.17,9-14,1.76-2.94,5.53-7.53,4.83-11.36l5.17-15.77Z'
        transform='translate(-0.7 -0.91)'
        style={{ fill: 'url(#petalGradient)' }}
      />
      <path
        d='M37.61,74.64a24.21,24.21,0,0,0,1.13,10.7,33.74,33.74,0,0,0,5.4,9.43c2.23,2.89,4.69,5.61,7,8.47a46.08,46.08,0,0,1,6,9.18A46,46,0,0,0,51,103.34c-2.33-2.82-4.83-5.49-7.12-8.37a34.15,34.15,0,0,1-5.6-9.47,24.8,24.8,0,0,1-1.32-10.94Z'
        transform='translate(-0.7 -0.91)'
        style={{ fill: '#aa5d53' }}
      />
      <path
        d='M43.11,60.08A12.86,12.86,0,0,0,45,66.86a32.5,32.5,0,0,0,4.39,5.77c3.29,3.59,7.12,6.65,10.57,10.13a117.94,117.94,0,0,1,9.92,10.8,37.24,37.24,0,0,1,4,6.16,15.45,15.45,0,0,1,1.86,7,15.41,15.41,0,0,0-1.94-7,37.12,37.12,0,0,0-4-6.09A117.73,117.73,0,0,0,59.78,83c-3.47-3.42-7.34-6.44-10.7-10a33,33,0,0,1-4.53-5.82,13.46,13.46,0,0,1-2.09-7.1Z'
        transform='translate(-0.7 -0.91)'
        style={{ fill: '#aa5d53' }}
      />
      <g style={{ opacity: 0.7000000000000001 }}>
        <path
          d='M29.55,100.54A18.1,18.1,0,0,1,26.67,109,24,24,0,0,1,24,112.6a14,14,0,0,1-3.49,2.83,16.32,16.32,0,0,0,3.31-3,26.07,26.07,0,0,0,2.63-3.6,25,25,0,0,0,2-4A16.93,16.93,0,0,0,29.55,100.54Z'
          transform='translate(-0.7 -0.91)'
          style={{ fill: '#aa5d53' }}
        />
      </g>
      <path
        d='M32.18,88a10.49,10.49,0,0,1-.91,4.85,26.78,26.78,0,0,1-2.36,4.37,38.34,38.34,0,0,1-3.06,3.9,25.5,25.5,0,0,1-3.62,3.37c1.14-1.19,2.21-2.42,3.23-3.7s2-2.57,2.89-3.94a31.82,31.82,0,0,0,2.44-4.21A13,13,0,0,0,32.18,88Z'
        transform='translate(-0.7 -0.91)'
        style={{ fill: '#aa5d53' }}
      />
      <path
        d='M50.29.94c5.58,22.45-5.84,51.15-13.1,72.55-4.22,12.44-10.71,28.79-7,42-4-12.21,3.86-34.32,9.12-45.29A140.28,140.28,0,0,0,51.87,24.26,77.41,77.41,0,0,0,50.29.94'
        transform='translate(-0.7 -0.91)'
        style={{
          fill: '#aa5d53',
          stroke: '#aa5d53',
          strokeMiterlimit: 10,
          strokeWidth: 0.200000002980232
        }}
      />
    </g>
  );
};

export default PetalStroke;
