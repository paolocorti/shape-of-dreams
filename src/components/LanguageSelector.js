import React from 'react';
import { isMobile } from 'react-device-detect';
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
      style={{ marginTop: '10px', height: '40px' }}
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
      <div className='flex relative' style={{ width: isMobile ? '280px' : '700px', margin: isMobile ? 'inherit' : '0 auto' }}>
        {languages.map((value, index) => {
          if (value) {
            return (
              <div
                key={index}
                className={`langEl`}
                onClick={() => onSelect(index)}
              >
                {isMobile ? value : extendedLanguage[value]}
              </div>
            );
          }
        })}
        <div
          className='langEl-selected'
          style={{ left: `${selected * (isMobile ? 40 : 100) - 1}px` }}
        />
      </div>
    </div>
  );
};

export default LanguageSelector;
