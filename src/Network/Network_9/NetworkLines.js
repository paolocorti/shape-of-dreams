import React from 'react';
import '../Network.scss';

const NetworkLines = ({ selected }) => {

  return (
    <g id="lines" transform="translate(-42,-40)">			
			<path class="network_9_0" d="M311.4,373.2c-8.2-19.7-12.7-41.3-12.7-64c0-4.9,0.2-9.7,0.6-14.5c1.3-15.6,4.8-30.7,10.2-44.8
			c9.8-25.9,25.9-48.8,46.5-66.7" style={{ opacity: selected === '' ? 1 : (selected === 'EN' || selected === 'JP' ? 1 : 0) }} />
			<path class="network_9_0" d="M157,182.8c21.7,15.7,47.3,26.4,75.2,30.2c7.5,1,15.1,1.6,22.9,1.6c7.8,0,15.5-0.5,23-1.6
				c28-3.9,53.8-14.6,75.6-30.6" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'EN' ? 1 : 0) }} />
			<path class="network_9_1" d="M378.2,288.9c-17.5-20.8-28-47.7-28-77c0-10,1.2-19.7,3.5-29" style={{ opacity: selected === '' ? 1 : (selected === 'EN' || selected === 'FR' ? 1 : 0) }} />
			<path class="network_9_0" d="M355.4,182.4c-41.1,3-82.2,13.5-121.6,32.3c-39.2,18.7-73.2,43.9-101.4,73.7" style={{ opacity: selected === '' ? 1 : (selected === 'RU' || selected === 'EN' ? 1 : 0) }} />
			<path class="network_9_2" d="M156.8,183.7c41.1,3,82.2,13.5,121.6,32.3c39.2,18.7,73.2,43.9,101.4,73.7" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'FR' ? 1 : 0) }} />
			<path class="network_9_2" d="M132.8,289.6c17.5-20.8,28-47.7,28-77c0-10-1.2-19.7-3.5-29" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'RU' ? 1 : 0) }} />
			<path class="network_9_1" d="M131.4,289.9c38.4-14.9,80.1-23.1,123.7-23.1c43.4,0,85,8.1,123.2,22.9" style={{ opacity: selected === '' ? 1 : (selected === 'RU' || selected === 'FR' ? 1 : 0) }} />
			<path class="network_9_0" d="M201.2,373.2c8.2-19.7,12.7-41.3,12.7-64c0-4.9-0.2-9.7-0.6-14.5c-1.3-15.6-4.8-30.7-10.2-44.8
				c-9.8-25.9-25.9-48.8-46.5-66.7" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'PO' ? 1 : 0) }} />
			<path class="network_9_4" d="M255.2,134.7c1.1,28.5,9.3,55.2,22.9,78.3c8,13.5,17.8,25.9,29.1,36.6c18.4,17.4,40.7,30.7,65.5,38.4" style={{ opacity: selected === '' ? 1 : (selected === 'AR' || selected === 'FR' ? 1 : 0) }} />
			<path class="network_9_5" d="M201.3,372.9c13-23.6,31.5-43.7,53.8-58.6c12.9-8.6,27-15.5,42-20.3c16-5.1,33.1-7.9,50.8-7.9
				c8.4,0,16.7,0.6,24.8,1.8" style={{ opacity: selected === '' ? 1 : (selected === 'FR' || selected === 'PO' ? 1 : 0) }} />
			<path class="network_9_2" d="M157,183.9c76.8,39.9,132.2,110.6,154,192.4" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'JP' ? 1 : 0) }} />
			<path class="network_9_1" d="M200.7,376.1c21.9-83.7,78.5-153.4,153.6-192.8" style={{ opacity: selected === '' ? 1 : (selected === 'EN' || selected === 'PO' ? 1 : 0) }} />
			<path class="network_9_2" d="M200.1,375c-7.7-38.2-33.6-69.7-68.2-85.4" style={{ opacity: selected === '' ? 1 : (selected === 'RU' || selected === 'PO' ? 1 : 0) }} />
    </g>
  );
};

export default NetworkLines;
