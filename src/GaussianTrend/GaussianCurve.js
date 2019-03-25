import React, { Component } from 'react';
import { line } from 'd3-shape';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';
import gaussianQ from './gaussian.json';
import gaussianP from './gaussian2.json';

const bellWidth = (window.innerWidth / 12) * 1.5;

const x = scaleLinear().range([0, bellWidth]);
const y = scaleLinear().domain([0, 0.4]);
const lineFx = line()
  .x(function(d) {
    return x(d.q);
  })
  .y(function(d) {
    return y(d.p);
  });

const normal = () => {
  let x = 0;
  let y = 0;
  let rds = null;
  let c = null;
  do {
    x = Math.random() * 2 - 1;
    y = Math.random() * 2 - 1;
    rds = x * x + y * y;
  } while (rds == 0 || rds > 1);
  c = Math.sqrt((-2 * Math.log(rds)) / rds); // Box-Muller transform
  return x * c; // throw away extra sample y * c
};

const gaussian = (x, scale) => {
  const gaussianConstant = 1 / Math.sqrt(2 * Math.PI);
  const mean = 0;
  const sigma = 1;
  x = (x - mean) / sigma;
  return (gaussianConstant * Math.exp(-0.5 * x * x)) / sigma;
};

export default class GaussianCurve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: null
    };
  }

  getData(incomingData, scale) {
    let data = [];
    let qp = [];
    // loop to populate data array with
    // probabily - quantile pairs
    for (var i = 0; i < 5000; i++) {
      const q = gaussianQ[i]; // calc random draw from normal dist
      // const q = normal()
      // qp.push(q)
      //const p = gaussian(q, scale) // calc prob of rand draw
      const p = gaussianP[i];
      //qp.push(p)
      const el = {
        q: q,
        p: p
      };
      data.push(el);
    }

    // need to sort for plotting
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    data.sort(function(x, y) {
      return x.q - y.q;
    });

    //console.log(qp);

    x.domain(extent(data, d => d.q));
    y.range([scale ? scale : incomingData, 0]);

    return lineFx(data);
  }

  // setHoverState = (i) => {
  //   this.setState({hover: i})
  // onMouseOver={() => this.setHoverState(index)} onMouseLeave={() => this.setHoverState(null)}
  // }

  render() {
    const { data, index, label, transform } = this.props;

    const containerWidth = window.innerWidth;
    const gaussianData = this.getData(data);
    const gaussianData1 = this.getData(data, 10);
    const gaussianData2 = this.getData(data, 20);
    const gaussianData3 = this.getData(data, 30);
    const gaussianData4 = this.getData(data, 40);
    const gaussianData5 = this.getData(data, 50);
    const gaussianData6 = this.getData(data, 60);
    const gaussianData7 = this.getData(data, 70);
    const gaussianData8 = this.getData(data, 80);
    const gaussianData9 = this.getData(data, 90);

    return (
      <g transform={`translate(${bellWidth / 2},0)`}>
        <g
          transform={transform}
          style={{
            opacity:
              this.state.hover === index
                ? 1
                : this.state.hover === null
                ? 1
                : 0.5
          }}
        >
          <path
            stroke={'black'}
            strokeOpacity={0.1}
            fill={'url(#gaussianGradient)'}
            className='line'
            d={gaussianData}
            transform={`translate(0,${100 - data})`}
          />
          {data > 90 && data <= 100 && (
            <path
              fill={'url(#gaussianGradient)'}
              d={gaussianData9}
              transform={`translate(0,${100 - 90})`}
            />
          )}
          {data > 80 && data <= 90 && (
            <path
              fill={'url(#gaussianGradient)'}
              d={gaussianData8}
              transform={`translate(0,${100 - 80})`}
            />
          )}
          {data > 70 && data <= 80 && (
            <path
              fill={'url(#gaussianGradient)'}
              d={gaussianData7}
              transform={`translate(0,${100 - 70})`}
            />
          )}
          {data > 60 && data <= 70 && (
            <path
              fill={'url(#gaussianGradient)'}
              d={gaussianData6}
              transform={`translate(0,${100 - 60})`}
            />
          )}
          {data > 50 && data <= 60 && (
            <path
              fill={'url(#gaussianGradient)'}
              d={gaussianData5}
              transform={`translate(0,${100 - 50})`}
            />
          )}
          {data > 40 && data <= 50 && (
            <path
              fill={'url(#gaussianGradient)'}
              d={gaussianData4}
              transform={`translate(0,${100 - 40})`}
            />
          )}
          {data > 30 && data <= 40 && (
            <path
              fill={'url(#gaussianGradient)'}
              d={gaussianData3}
              transform={`translate(0,${100 - 30})`}
            />
          )}
          {data > 20 && data <= 30 && (
            <path
              fill={'url(#gaussianGradient)'}
              d={gaussianData2}
              transform={`translate(0,${100 - 20})`}
            />
          )}
          {data > 10 && data <= 20 && (
            <path
              fill={'url(#gaussianGradient)'}
              d={gaussianData1}
              transform={`translate(0,${100 - 10})`}
            />
          )}
          <text
            className='text'
            transform={`translate(${bellWidth / 2},120)`}
            style={{ textAnchor: 'middle', fontSize: '13px' }}
          >
            {label}
          </text>
        </g>
      </g>
    );
  }
}
