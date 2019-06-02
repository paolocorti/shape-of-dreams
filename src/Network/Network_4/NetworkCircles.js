import React from 'react';
import petal1 from '../1C70124E3B71B787.png';
import petal2 from '../1C70124E3B71B785.png';
import petal3 from '../1C70124E3B71B784.png';
import petal4 from '../1C70124E3B71B78B.png';
import petal5 from '../1C70124E3B71B77D.png';
import petal6 from '../1C70124E3B71B77C.png';
import petal7 from '../1C70124E3B71B77B.png';
import '../Network.scss';

const NetworkCircles = ({ selected, setSelected }) => {
  return (
    <g id="circles">
      <image style={{ cursor: 'pointer', enableBackground: 'new' }} width="192" height="192" xlinkHref={petal1} transform="matrix(0.235 0 0 0.235 232.6282 111.0258)" onClick={() => setSelected('AR')} onMouseEnter={() => setSelected('AR')} onMouseLeave={() => setSelected('')}>
      </image>
      <image style={{ cursor: 'pointer', enableBackground: 'new' }} width="192" height="192" xlinkHref={petal2} transform="matrix(0.235 0 0 0.235 288.0681 354.1458)">
      </image>
      <image style={{ cursor: 'pointer', enableBackground: 'new' }} width="192" height="192" xlinkHref={petal3} transform="matrix(0.235 0 0 0.235 176.9482 354.1458)" onClick={() => setSelected('PO')} onMouseEnter={() => setSelected('PO')} onMouseLeave={() => setSelected('')}>
      </image>
      <image style={{ cursor: 'pointer', enableBackground: 'new' }} width="192" height="196" xlinkHref={petal4} transform="matrix(0.2332 0 0 0.2332 107.7625 267.0938)" onClick={() => setSelected('RU')} onMouseEnter={() => setSelected('RU')} onMouseLeave={() => setSelected('')}>
      </image>
      <image style={{ cursor: 'pointer', enableBackground: 'new' }} width="192" height="192" xlinkHref={petal5} transform="matrix(0.2344 0 0 0.2344 132.3681 159.2057)" onClick={() => setSelected('SP')} onMouseEnter={() => setSelected('SP')} onMouseLeave={() => setSelected('')}>
      </image>
      <image style={{ cursor: 'pointer', enableBackground: 'new' }} width="192" height="192" xlinkHref={petal6} transform="matrix(0.2338 0 0 0.2338 332.7082 159.2658)" onClick={() => setSelected('EN')} onMouseEnter={() => setSelected('EN')} onMouseLeave={() => setSelected('')}>
      </image >
      <image style={{ cursor: 'pointer', enableBackground: 'new' }} width="192" height="188" xlinkHref={petal7} transform="matrix(0.2368 0 0 0.2368 357.0125 267.6838)" onClick={() => setSelected('FR')} onMouseEnter={() => setSelected('FR')} onMouseLeave={() => setSelected('')}>
      </image>
      <g>
        <circle class="st3" cx="155.2" cy="182.1" r="22" style={{ opacity: selected === 'SP' ? 1 : 0 }} />
        <circle class="st3" cx="355" cy="182.1" r="22" style={{ opacity: selected === 'EN' ? 1 : 0 }} />
        <circle class="st3" cx="380.2" cy="290" r="22" style={{ opacity: selected === 'FR' ? 1 : 0 }} />
        <circle class="st3" cx="199.6" cy="376.8" r="22" style={{ opacity: selected === 'PO' ? 1 : 0 }} />
        <circle class="st3" cx="129.9" cy="290" r="22" style={{ opacity: selected === 'RU' ? 1 : 0 }} />
        <circle class="st3" cx="310.6" cy="376.8" r="22" style={{ opacity: selected === 'JP' ? 1 : 0 }} />
        <circle class="st3" cx="255.1" cy="133.7" r="22" style={{ opacity: selected === 'AR' ? 1 : 0 }} />
      </g>
    </g >
  );
};

export default NetworkCircles;
