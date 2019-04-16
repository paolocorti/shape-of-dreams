import React from 'react';

import './Selector.scss';

const LanguageSelector = ({ languages, selected, onSelect }) => {
  return (
    <div
      className='w-100 flex justify-center items-center relative mt3'
      style={{ height: '40px' }}
    >
      <div className='flex relative' style={{ width: '320px' }}>
        {languages.map((value, index) => {
          return (
            <div
              key={index}
              className={`langEl`}
              onClick={() => onSelect(index)}
            >
              {value}
            </div>
          );
        })}
        <div
          className='langEl-selected'
          style={{ left: `${selected * 40}px` }}
        />
      </div>
    </div>
  );
};

export default LanguageSelector;
