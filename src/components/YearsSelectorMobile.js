import React from 'react';
import './Selector.scss';

const YearSelectorMobile = ({ years, selected, onSelect }) => {
  console.log('here')
  return (
    <div className='yearsSelectorContainer' style={{ marginTop: '10px' }}>
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
          style={{ left: `${selected * 25 + 2}px`, top: '2px' }}
        />
      </div>
    </div>
  );
};

export default YearSelectorMobile;