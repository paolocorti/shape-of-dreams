import React from 'react';

import './Selector.scss';

const YearSelector = ({ years, selected, onSelect }) => {
  return (
    <div className='w-100 flex flex-wrap justify-between items-center flex-wrap relative mt4'>
      <div className='yearLine' />
      {years.map((value, index) => {
        return (
          <div
            key={index}
            className={`yearEl ${selected === index ? 'selected' : ''}`}
            onClick={() => onSelect(index)}
          >
            <div className='yearTouchArea' />
            {selected === index && (
              <div className='yearVal raleway'>{value}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default YearSelector;
