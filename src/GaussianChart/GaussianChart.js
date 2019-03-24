import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { line } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import GaussianCurve from './GaussianCurve';

const bellWidth = (window.innerWidth * 0.8) / 18;

export default class GaussianChart extends Component {
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

  compare1 = (a, b) => {
    const genreA = a.country_code;
    const genreB = b.country_code;
    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  };

  compare2 = (a, b) => {
    const key = this.props.dataKey;
    const genreA = Number(a[key]);
    const genreB = Number(b[key]);
    let comparison = 0;
    if (genreA < genreB) {
      comparison = 1;
    } else if (genreA > genreB) {
      comparison = -1;
    }
    return comparison;
  };

  setSort = value => {
    this.setState({ sortByIndex: value });
  };

  render() {
    const { data, dataKey } = this.props;

    const { sortByIndex } = this.state;

    const quartiles = {
      macro_1: [38.1, 67.9, 83.4],
      macro_2: [58.6, 73.9, 85.8],
      macro_3: [27.0, 41.2, 75.1],
      macro_4: [29.6, 37.3, 53.8]
    };

    const containerWidth = window.innerWidth * 0.8;
    return (
      <div className='w-100 flex'>
        <div className='w-80 flex justify-start pt4 pb4 flex-column'>
          <svg width={containerWidth} height='120'>
            {data
              .sort(sortByIndex ? this.compare2 : this.compare1)
              .map((d, i) => {
                const countryData = parseFloat(d[dataKey]);
                return (
                  <GaussianCurve
                    transform={`translate(${i * bellWidth * 0.6},0)`}
                    countryData={countryData}
                    key={i}
                    index={i}
                    country={d.country_code}
                    quartile={quartiles[dataKey]}
                  />
                );
              })}
          </svg>
        </div>
      </div>
    );
  }
}
