import React from 'react';

import './Selector.scss';

const YearSelector = ({ years, selected, onSelect }) => {
  return (
    <div
      className='w-100 flex justify-around pa2 flex-wrap'
      style={{ flex: 1 }}
    >
      {years.map((value, index) => {
        return (
          <div
            className={`yearEl ${selected === index ? 'selected' : ''}`}
            onClick={() => onSelect(index)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default YearSelector;
