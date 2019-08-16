import React from 'react';
import { isMobileWithTablet } from '../constants';
import './Selector.scss';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const extendedLanguage = {
  'EN': 'ENGLISH',
  'AR': 'ARABIC',
  'SP': 'SPANISH',
  'FR': 'FRENCH',
  'PO': 'PORTUGUESE',
  'RU': 'RUSSIAN',
  'JP': 'JAPANESE',
}

const LanguageSelector = ({ languages, selected, onSelect }) => {
  return (
    <div
      className='w-100 flex justify-center items-center relative'
      style={{ marginTop: '10px', height: '30px' }}
    >
      <KeyboardEventHandler
        handleKeys={['all']}
        onKeyEvent={(key, e) => {
          if (key === 'left') {
            const index = selected > 0 ? selected - 1 : 0
            onSelect(index)
          } else if (key === 'right') {
            const index = selected < 6 ? selected + 1 : 6
            onSelect(index)
          }
        }}
      ></KeyboardEventHandler>
      <div className='flex relative' style={{ width: isMobileWithTablet ? '280px' : '700px', margin: isMobileWithTablet ? 'inherit' : '0 auto' }}>
        {languages.map((value, index) => {
          if (value) {
            return (
              <div
                key={index}
                className={`langEl cursor-pointer ${isMobileWithTablet ? '' : 'link-lang'}`}
                onClick={() => onSelect(index)}
              >
                {isMobileWithTablet ? value : extendedLanguage[value]}
              </div>
            );
          }
        })}
        <div
          className='langEl-selected'
          style={{ left: `${selected * (isMobileWithTablet ? 40 : 100) - 1}px` }}
        />
      </div>
    </div>
  );
};

export default LanguageSelector;
