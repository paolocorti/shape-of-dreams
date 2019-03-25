import React, { Component } from 'react';
import { line } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import GaussianCurve from './GaussianCurve';

const bellWidth = (window.innerWidth / 12) * 1.5;

export default class GaussianTrend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null,
      sortByIndex: false
    };
  }

  setHoverState = i => {
    this.setState({ hover: i });
  };

  setSort = value => {
    this.setState({ sortByIndex: value });
  };

  render() {
    const { data, dataKey } = this.props;

    const { sortByIndex } = this.state;

    const containerWidth = window.innerWidth;

    console.log(containerWidth);

    return (
      <div className='w-100 pt4 pb4'>
        <svg width={containerWidth} height={containerWidth / 2}>
          <defs>
            <linearGradient
              id='gaussianGradient'
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
          <g>
            {data.map((d, i) => {
              console.log(d);
              return (
                <GaussianCurve
                  transform={`translate(${i * bellWidth * 0.5},0)`}
                  data={d.value}
                  key={i}
                  index={i}
                  // label={d.formattedTime}
                />
              );
            })}
          </g>
        </svg>
      </div>
    );
  }
}
