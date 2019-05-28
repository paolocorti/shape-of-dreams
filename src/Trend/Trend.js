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
import { isMobile } from 'react-device-detect';
import './Trend.scss';

const x = d => {
  return moment(d.time);
};
const y = d => d.value;

const Trend = ({ data, name, toggleNote, noteActive, activateNote, deactivateNote }) => {

  useEffect(() => {
    console.log(data)
    let peak = false
    let note = null
    data.forEach((d) => {
      if (d.peak) {
        peak = true
        note = d.note
      }
    })
    if (peak) {
      activateNote(note)
    } else {
      deactivateNote()
    }
  }, [data])

  const svgWidth = isMobile ? window.innerWidth * 0.9 : 800;
  const svgHeight = isMobile ? window.innerWidth * 0.7 : 400;
  const trendHeight = svgHeight - 30;
  const startDate = moment('2008-01-01');
  const endDate = moment('2018-12-01');

  const scaleX = scaleTime()
    .domain([startDate, endDate])
    .range([0, svgWidth - 40]);

  const max = extent(data, d => d.value)[1];

  const scaleY = scaleLinear()
    .domain([0, max])
    .range([0, trendHeight]);

  const scaleY2 = scaleLinear()
    .domain([max, 0])
    .range([0, trendHeight]);

  const parsedData = data.filter((d, i) => {
    if (i % 12 === 0) {
      return d;
    }
  });

  console.log(max);

  return (
    <div className='mt3'>
      {isMobile && noteActive && (
        <div className='noteBox ph4'>
          <div className='noteBox-close' onClick={() => toggleNote('')}>
            <img
              src={'/images/close-white.svg'}
              alt='Close menu icon'
              width={20}
            />
          </div>
          {noteActive}
        </div>
      )}
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
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0%' stopColor='#e3c3c1' stopOpacity='1' />
            <stop offset='100%' stopColor='#c27b76' stopOpacity='1' />
          </linearGradient>
        </defs>
        <g transform={`translate(20, 10)`}>
          {parsedData.map((d, i) => {
            const date = moment(d.time);
            const value = d.value;

            const startAnimation = trendHeight;

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
        <g transform={`translate(20, 10)`}>
          <Animate
            start={() => ({
              j: 5000
            })}
            enter={() => ({
              j: [0],
              timing: { duration: 800, ease: easeQuadOut }
            })}
            update={() => ({
              j: [0],
              timing: { duration: 800, ease: easeQuadOut }
            })}

            leave={() => ({
              j: [5000],
              timing: { duration: 800, ease: easeQuadOut }
            })}
          >
            {state => {
              const { j } = state;
              return (
                <LinePath
                  data={data}
                  x={d => scaleX(x(d))}
                  y={d => scaleY2(y(d))}
                  stroke={'url(#trendGradient)'}
                  strokeWidth={2}
                // strokeDasharray={5000}
                // strokeDashoffset={j}
                />
              );
            }}
          </Animate>
        </g>
        {
          <g transform={`translate(20, 15)`}>
            {data.map((d, i) => {
              const date = moment(d.time);
              const value = d.value;

              const startAnimation = trendHeight;

              if (d.peak) {
                return (
                  <g key={i} onClick={() => toggleNote(d.note)}>
                    <circle
                      id={`circle-${i}`}
                      cx={scaleX(date)}
                      cy={trendHeight - scaleY(value)}
                      fill={'#43449a'}
                      r={4}
                      style={{ cursor: 'pointer' }}
                    />
                    <circle
                      id={`circle-${i}`}
                      cx={scaleX(date)}
                      cy={trendHeight - scaleY(value)}
                      stroke={'#43449a'}
                      fill={'transparent'}
                      r={10}
                      style={{ cursor: 'pointer' }}
                    />
                    <text
                      dx={100}
                      dy={trendHeight - scaleY(value) + 2}
                      textAnchor={'start'}
                    >
                      {date.format('MMMM YYYY')}
                    </text>
                  </g>
                );
              }
            })}
          </g>
        }

        <g transform={`translate(21, 10)`}>
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
