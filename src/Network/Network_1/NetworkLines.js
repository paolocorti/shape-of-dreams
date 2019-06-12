import React from 'react';
import '../Network.scss';

const NetworkLines = ({ selected }) => {

  return (
    <g id="lines" transform="translate(-42,-40)">
        <path className="network_1_0" d="M157,182.8c21.7,15.7,47.3,26.4,75.2,30.2c7.5,1,15.1,1.6,22.9,1.6c7.8,0,15.5-0.5,23-1.6
          c28-3.9,53.8-14.6,75.6-30.6" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'EN' ? 1 : 0) }} />
        <path className="network_1_1" d="M200.7,376.1c21.9-83.7,78.5-153.4,153.6-192.8" style={{ opacity: selected === '' ? 1 : (selected === 'EN' || selected === 'PO' ? 1 : 0) }} />
        <path className="network_1_1" d="M201.2,373.2c8.2-19.7,12.7-41.3,12.7-64c0-4.9-0.2-9.7-0.6-14.5c-1.3-15.6-4.8-30.7-10.2-44.8
          c-9.8-25.9-25.9-48.8-46.5-66.7" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'PO' ? 1 : 0) }} />
        <path className="network_1_2" d="M156.8,183.7c41.1,3,82.2,13.5,121.6,32.3c39.2,18.7,73.2,43.9,101.4,73.7" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'FR' ? 1 : 0) }} />
    </g>
  );
};

export default NetworkLines;
