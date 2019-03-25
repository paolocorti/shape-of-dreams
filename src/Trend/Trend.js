import React, { useEffect } from 'react';
import moment from 'moment';
import { scaleTime, scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

const Trend = ({ data, name }) => {
  const svgWidth = window.innerWidth * 0.8;
  const svgHeight = window.innerWidth * 0.4;
  const startDate = moment('2008-01-01');
  const endDate = moment('2018-12-01');

  const scaleX = scaleTime()
    .domain([startDate, endDate])
    .range([10, svgWidth - 10]);

  const max = extent(data, d => d.value)[1];

  const scaleY = scaleLinear()
    .domain([0, max])
    .range([10, svgHeight - 10]);

  return (
    <React.Fragment>
      <div className='w-100 tc f3'>{name}</div>
      <svg
        className='viz'
        x='0px'
        y='0px'
        width={svgWidth}
        height={svgHeight}
        style={{
          border: '0px solid rgba(0,0,0,0.2)',
          margin: 'auto',
          marginTop: '30px'
        }}
      >
        <defs>
          <linearGradient
            id='trendGradient'
            x1='0%'
            y1='0%'
            x2='100%'
            y2='100%'
            gradientUnits='objectBoundingBox'
          >
            <stop offset='0%' stopColor='#ecf0f2' stopOpacity='1' />
            <stop offset='50%' stopColor='#f1d7d1' stopOpacity='1' />
            <stop offset='100%' stopColor='#db8685' stopOpacity='1' />
          </linearGradient>
        </defs>
        <g transform={`translate(0, 0)`}>
          {data.map((d, i) => {
            const date = moment(d.formattedAxisTime);
            const value = d.value;

            return (
              <g key={i}>
                <line
                  x1={scaleX(date)}
                  y1={svgHeight}
                  x2={scaleX(date)}
                  y2={svgHeight - scaleY(value)}
                  stroke={'#af5a4d'}
                  strokeWidth={0.4}
                />
                <circle
                  r={4}
                  cx={scaleX(date)}
                  cy={svgHeight - scaleY(value)}
                  fill='url(#trendGradient)'
                />
              </g>
            );
          })}
        </g>
      </svg>
    </React.Fragment>
  );
};

export default Trend;
