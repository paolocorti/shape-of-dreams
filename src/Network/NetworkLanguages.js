import React from 'react';
import './Network.scss';

const NetworkLanguages = ({ selected }) => {
  return (
    <g>
      <circle
        className='language0'
        cx='299.6'
        cy='658.8'
        r='20.9'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      />
      <circle
        className='language0'
        cx='444.6'
        cy='137.9'
        r='20.9'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      />
      <text
        transform='matrix(1 0 0 1 284.2588 665.983)'
        className='language1 language2 language3 language4'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      >
        SP
      </text>
      <circle
        className='language0'
        cx='154.7'
        cy='137.9'
        r='20.9'
        style={{ opacity: 1 }}
      />
      <text
        transform='matrix(1 0 0 1 138.166 145.1588)'
        className='language1 language2 language3 language4'
        style={{ opacity: 1 }}
      >
        AR
      </text>
      <circle
        className='language0'
        cx='154.7'
        cy='311.6'
        r='20.9'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      />
      <circle
        className='language0'
        cx='444.6'
        cy='311.6'
        r='20.9'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      />
      <text
        transform='matrix(1 0 0 1 139.293 318.7681)'
        className='language1 language2 language3 language4'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      >
        FR
      </text>
      <text
        transform='matrix(1 0 0 1 428.29 147.0162)'
        className='language1 language2 language3 language4'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      >
        EN
      </text>
      <circle
        className='language0'
        cx='154.7'
        cy='485.2'
        r='20.9'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      />
      <text
        transform='matrix(1 0 0 1 137.334 492.9517)'
        className='language1 language2 language3 language4'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      >
        PO
      </text>
      <circle
        className='language0'
        cx='444.6'
        cy='485.2'
        r='20.9'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      />
      <text
        transform='matrix(1 0 0 1 427.126 492.3755)'
        className='language1 language2 language3 language4'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      >
        RU
      </text>
      <text
        transform='matrix(1 0 0 1 431.2969 318.7681)'
        className='language1 language2 language3 language4'
        style={{ opacity: selected === 'AR' ? 0.2 : 1 }}
      >
        JA
      </text>
    </g>
  );
};

export default NetworkLanguages;
