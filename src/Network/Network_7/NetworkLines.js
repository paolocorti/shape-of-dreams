import React from 'react';
import '../Network.scss';

const NetworkLines = ({ selected }) => {

  return (
    <g id="lines" transform="translate(-42,-40)">
			<path class="network_7_0" d="M200.7,376.1c21.9-83.7,78.5-153.4,153.6-192.8" style={{ opacity: selected === '' ? 1 : (selected === 'EN' || selected === 'PO' ? 1 : 0) }} />
			<path class="network_7_1" d="M200.1,375c-7.7-38.2-33.6-69.7-68.2-85.4" style={{ opacity: selected === '' ? 1 : (selected === 'RU' || selected === 'PO' ? 1 : 0) }} />
			<path class="network_7_2" d="M156.8,183.7c41.1,3,82.2,13.5,121.6,32.3c39.2,18.7,73.2,43.9,101.4,73.7" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'FR' ? 1 : 0) }} />
			<path class="network_7_4" d="M255.2,134.7c1.1,28.5,9.3,55.2,22.9,78.3c8,13.5,17.8,25.9,29.1,36.6c18.4,17.4,40.7,30.7,65.5,38.4" style={{ opacity: selected === '' ? 1 : (selected === 'AR' || selected === 'FR' ? 1 : 0) }} />
			<path class="network_7_0" d="M132.8,289.6c17.5-20.8,28-47.7,28-77c0-10-1.2-19.7-3.5-29" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'RU' ? 1 : 0) }} />
			<path class="network_7_5" d="M157,183.9c76.8,39.9,132.2,110.6,154,192.4" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'JP' ? 1 : 0) }} />
			<path class="network_7_0" d="M255.3,134.8c21.9,29,56.7,47.7,95.8,47.7c0.9,0,1.7,0,2.6,0" style={{ opacity: selected === '' ? 1 : (selected === 'EN' || selected === 'AR' ? 1 : 0) }} />
			<path class="network_7_0" d="M254.7,134.9c-21.9,29.1-56.8,48-96,48c-0.6,0-1.1,0-1.7,0" style={{ opacity: selected === '' ? 1 : (selected === 'AR' || selected === 'SP' ? 1 : 0) }} />
			<path class="network_7_5" d="M200.3,374.9c-16.5-85,4.4-172.3,55-240.3" style={{ opacity: selected === '' ? 1 : (selected === 'AR' || selected === 'PO' ? 1 : 0) }} />
			<path class="network_7_1" d="M201.2,373.2c8.2-19.7,12.7-41.3,12.7-64c0-4.9-0.2-9.7-0.6-14.5c-1.3-15.6-4.8-30.7-10.2-44.8
				c-9.8-25.9-25.9-48.8-46.5-66.7" style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'PO' ? 1 : 0) }} />
			<path class="network_7_0" d="M378.2,288.9c-17.5-20.8-28-47.7-28-77c0-10,1.2-19.7,3.5-29" style={{ opacity: selected === '' ? 1 : (selected === 'EN' || selected === 'FR' ? 1 : 0) }} />
			<path class="network_7_5" d="M355.4,182.4c-41.1,3-82.2,13.5-121.6,32.3c-39.2,18.7-73.2,43.9-101.4,73.7" style={{ opacity: selected === '' ? 1 : (selected === 'EN' || selected === 'RU' ? 1 : 0) }} />
			<path class="network_7_5" d="M200.9,375.6c32.7-16.6,72.4-18.1,107.9-0.8c0.5,0.2,1,0.5,1.5,0.8" style={{ opacity: selected === '' ? 1 : (selected === 'JP' || selected === 'PO' ? 1 : 0) }} />
			<path class="network_7_5" d="M134,287.7c20.5-5.8,40.3-15.7,58.1-29.8c3.8-3,7.5-6.2,11-9.5c11.4-10.8,21-22.8,28.8-35.8
				c14.2-23.8,22.1-50.6,23.4-77.8" style={{ opacity: selected === '' ? 1 : (selected === 'AR' || selected === 'RU' ? 1 : 0) }} />
			<path class="network_7_2" d="M157,182.8c21.7,15.7,47.3,26.4,75.2,30.2c7.5,1,15.1,1.6,22.9,1.6c7.8,0,15.5-0.5,23-1.6
				c28-3.9,53.8-14.6,75.6-30.6" style={{ opacity: selected === '' ? 1 : (selected === 'EN' || selected === 'SP' ? 1 : 0) }} />
			<path class="network_7_5" d="M310.2,374.7c7.8-38,33.6-69.5,68.1-85.1" style={{ opacity: selected === '' ? 1 : (selected === 'JP' || selected === 'FR' ? 1 : 0) }} />
			<path class="network_7_5" d="M201.3,372.9c13-23.6,31.5-43.7,53.8-58.6c12.9-8.6,27-15.5,42-20.3c16-5.1,33.1-7.9,50.8-7.9
				c8.4,0,16.7,0.6,24.8,1.8" style={{ opacity: selected === '' ? 1 : (selected === 'FR' || selected === 'PO' ? 1 : 0) }} />
    </g>
  );
};

export default NetworkLines;
