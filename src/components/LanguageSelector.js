import React from 'react';

import './Selector.scss';

const LanguageSelector = ({ languages, selected, onSelect }) => {
  return (
    <div className='w-100 flex justify-between' style={{ flex: 1 }}>
      {languages.map((value, index) => {
        return (
          <div
            key={index}
            className={`langEl ${selected === index ? 'selected' : ''} raleway`}
            onClick={() => onSelect(index)}
          >
            {value}
          </div>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
