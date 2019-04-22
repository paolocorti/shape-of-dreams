import React from 'react';

import './Selector.scss';

const YearSelector = ({ years, selected, onSelect }) => {
  return (
    <div className='w-100 flex justify-center' style={{ marginTop: '15px' }}>
      <div className='flex relative' style={{ width: '330px' }}>
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
          style={{ left: `${selected * 30 + 4}px` }}
        />
      </div>
    </div>
  );
};

export default YearSelector;
