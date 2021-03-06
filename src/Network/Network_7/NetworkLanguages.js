import React from 'react';
import '../Network.scss';

const NetworkLanguages = ({ selected }) => {
  return (
    <g id="languages" transform="translate(-42,-40)">
      <g>
        <text transform="matrix(1 0 0 1 245.2829 137.7695)" className="st5 st6 st7">AR</text>
      </g>
      <g>
        <text transform="matrix(1 0 0 1 345.1813 185.9434)" className="st5 st6 st7">EN</text>
      </g>
      <g>
        <text transform="matrix(1 0 0 1 370.6091 294.1885)" className="st5 st6 st7">FR</text>
      </g>
      <g>
        <text transform="matrix(1 0 0 1 301.9733 380.9941)" className="st5 st6 st7">JP</text>
      </g>
      <g>
        <text transform="matrix(1 0 0 1 189.402 380.9941)" className="st5 st6 st7">PO</text>
      </g>
      <g>
        <text transform="matrix(1 0 0 1 119.9098 294.1699)" className="st5 st6 st7">RU</text>
      </g>
      <g>
        <text transform="matrix(1 0 0 1 145.8552 185.9434)" className="st5 st6 st7">SP</text>
      </g>
    </g>
  );
};

export default NetworkLanguages;
