import React from 'react';

import './Selector.scss';

const YearSelector = ({ years, selected, onSelect }) => {
  return (
    <div className='w-100 flex relative mt4'>
      {years.map((value, index) => {
        return (
          <div key={index} className={`yearEl`} onClick={() => onSelect(index)}>
            <div className='yearTouchArea' />
            <div className='yearLine' style={{ opacity: index > 0 ? 1 : 0 }} />
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
        style={{ left: `calc(${selected * 9.11}% - 0px)` }}
      />
    </div>
  );
};

export default YearSelector;
