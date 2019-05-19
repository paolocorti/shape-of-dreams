import React from 'react';
import { isMobile } from 'react-device-detect';
import './Selector.scss';

const YearSelector = ({ years, selected, onSelect }) => {
  return (
    <div className='yearsSelectorContainer' style={{ marginTop: isMobile ? '10px' : '-200px' }}>
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
          style={{ left: isMobile ? `${selected * 25 + 2}px` : '2px', top: isMobile ? '2px' : `${selected * 25 + 2}px` }}
        />
      </div>
    </div>
  );
};

export default YearSelector;
