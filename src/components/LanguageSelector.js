import React from 'react';

import './Selector.scss';

const LanguageSelector = ({ languages, selected, onSelect }) => {
  return (
    <div
      className='w-100 flex items-center relative mt3'
      style={{ height: '40px' }}
    >
      {languages.map((value, index) => {
        return (
          <div key={index} className={`langEl`} onClick={() => onSelect(index)}>
            {value}
          </div>
        );
      })}
      <div
        className='langEl-selected'
        style={{ left: `calc(${selected * 12.5}%)` }}
      />
    </div>
  );
};

export default LanguageSelector;
