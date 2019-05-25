import React from 'react';
import { isMobile } from 'react-device-detect';
import './Selector.scss';
import { render } from 'react-dom';

class YearSelector extends React.Component {

  paneDidMount = (node) => {
    const { selected, onSelect } = this.props
    if (node) {
      node.addEventListener('scroll', (e) => {
        const offset = node.scrollTop;
        console.log(offset)
        const index = Math.floor(offset / 50);
        console.log(index)
        if (index !== selected) {
          onSelect(index)
        }
      });
    }
  };

  render() {
    const { years, selected, onSelect } = this.props
    return (
      <div className="yearsSelectorScrollContainer" ref={this.paneDidMount}>
        <div className='yearsSelectorContainer' style={{ marginTop: isMobile ? '10px' : '0px' }}>
          <div className='yearsSelectorContainerWrapper'>
            {years.map((value, index) => {
              return (
                <div
                  key={index}
                  className={`yearEl`}
                  onClick={() => onSelect(index)}
                >
                  <div className='yearTouchArea' />
                  <div
                    className='yearLine'
                    style={{ opacity: index > 0 ? 1 : 0 }}
                  />
                  <div className='yearCircle' />
                  <div
                    className='yearLine'
                    style={{ opacity: index < years.length - 1 ? 1 : 0 }}
                  />
                  {selected === index && (
                    <div className='yearVal raleway'>{value}</div>
                  )}
                </div>
              );
            })}
            <div
              className='yearEl-selected'
              style={{ left: isMobile ? `${selected * 25 + 2}px` : '2px', top: isMobile ? '2px' : `${selected * 35 + 7}px` }}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default YearSelector;
