import React, { useEffect } from 'react';
import moment from 'moment';
import { scaleTime, scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import { Animate } from 'react-move';
import { easeQuadOut } from 'd3-ease';
import { LinePath } from '@vx/shape';
import { curveMonotoneX } from '@vx/curve';
import { AxisBottom } from '@vx/axis';
import { Group } from '@vx/group';
import './Trend.scss';

const x = d => {
  return moment(d.time);
};
const y = d => d.value;

const Trend = ({ data, name }) => {
  const svgWidth = window.innerWidth * 0.8;
  const svgHeight = window.innerWidth * 0.6;
  const trendHeight = svgHeight - 20;
  const startDate = moment('2008-01-01');
  const endDate = moment('2018-12-01');

  const scaleX = scaleTime()
    .domain([startDate, endDate])
    .range([0, svgWidth - 30]);

  const max = extent(data, d => d.value)[1];

  const scaleY = scaleLinear()
    .domain([0, max])
    .range([0, trendHeight]);

  const scaleY2 = scaleLinear()
    .domain([max, 0])
    .range([0, trendHeight]);

  const parsedData = data.filter((d, i) => {
    if (i % 2 !== 0) {
      return d;
    }
  });

  console.log(parsedData);

  return (
    <div className='mt4'>
      <svg
        className='viz'
        x='0px'
        y='0px'
        width={svgWidth}
        height={svgHeight}
        style={{
          border: '0px solid rgba(0,0,0,0.2)',
          margin: 'auto'
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
        <g transform={`translate(15, -20)`}>
          {parsedData.map((d, i) => {
            const date = moment(d.time);
            const value = d.value;

            const startAnimation = trendHeight;
            const endAnimation = trendHeight - scaleY(value);

            return (
              <g key={i}>
                <Animate
                  start={() => ({
                    y2: startAnimation
                  })}
                  enter={() => ({
                    y2: [trendHeight - scaleY(value)],
                    timing: { duration: 800, ease: easeQuadOut }
                  })}
                  update={() => ({
                    y2: [trendHeight - scaleY(value)],
                    timing: { duration: 800, ease: easeQuadOut }
                  })}
                >
                  {state => {
                    const { y2 } = state;
                    console.log(state);
                    return (
                      <line
                        id={`line-${i}`}
                        x1={scaleX(date)}
                        y1={trendHeight}
                        x2={scaleX(date)}
                        y2={y2}
                        stroke={'#af5a4d'}
                        strokeWidth={0.4}
                      />
                    );
                  }}
                </Animate>
              </g>
            );
          })}
        </g>
        <g transform={`translate(15, -20)`}>
          <Animate
            start={() => ({
              strokeDashoffset: 4000
            })}
            enter={() => ({
              strokeDashoffset: 0,
              timing: { duration: 800, ease: easeQuadOut }
            })}
          >
            {state => {
              const { strokeDashoffset } = state;
              return (
                <LinePath
                  data={parsedData}
                  x={d => scaleX(x(d))}
                  y={d => scaleY2(y(d))}
                  stroke={'#973e34'}
                  strokeWidth={1}
                  strokeDasharray={4000}
                  strokeDashoffset={strokeDashoffset}
                />
              );
            }}
          </Animate>
        </g>
        <g transform={`translate(15, -20)`}>
          <AxisBottom
            top={trendHeight - 10}
            left={0}
            scale={scaleX}
            numTicks={4}
            label='Time'
          >
            {axis => {
              const tickLabelSize = 14;
              const tickRotate = 0;
              const tickColor = '#000';
              const axisCenter =
                (axis.axisToPoint.x - axis.axisFromPoint.x) / 2;
              return (
                <g className='my-custom-bottom-axis'>
                  {axis.ticks.map((tick, i) => {
                    const tickX = tick.to.x;
                    const tickY = tick.to.y + tickLabelSize + axis.tickLength;
                    return (
                      <Group
                        key={`vx-tick-${tick.value}-${i}`}
                        className={'vx-axis-tick'}
                      >
                        {/* <Line
                          from={tick.from}
                          to={tick.to}
                          stroke={tickColor}
                        /> */}
                        <text
                          transform={`translate(${tickX}, ${tickY}) rotate(${tickRotate})`}
                          fontSize={tickLabelSize}
                          textAnchor='middle'
                          fill={tickColor}
                        >
                          {tick.formattedValue}
                        </text>
                      </Group>
                    );
                  })}
                  {/* <text
                    textAnchor='middle'
                    transform={`translate(${axisCenter}, 50)`}
                    fontSize='8'
                  >
                    {axis.label}
                  </text> */}
                </g>
              );
            }}
          </AxisBottom>
        </g>
      </svg>
    </div>
  );
};

export default Trend;
