import React from 'react';
import { Animate } from 'react-move';
import { easeQuadOut } from 'd3-ease';
import '../Network.scss';
import { dashArray, dashOffset, lineAnimDuration, lineAnimDelay } from '../network_constants';

const NetworkLines = ({ selected }) => {

  return (
		<Animate
			start={() => ({
				dashoffset: dashOffset
			})}
			enter={() => ({
				dashoffset: [0],
				timing: { duration: lineAnimDuration, ease: easeQuadOut, delay: lineAnimDelay }
			})}
			update={() => ({
				dashoffset: [0],
				timing: { duration: lineAnimDuration, ease: easeQuadOut, delay: lineAnimDelay }
			})}
		>
			{state => {
				const { dashoffset } = state;
				return (
				<g id="lines" transform="translate(-42,-40)">
					<path class="network_6_0" d="M310.3,372.9c-13-23.6-31.5-43.7-53.8-58.6c-12.9-8.6-27-15.5-42-20.3c-16-5.1-33.1-7.9-50.8-7.9
						c-8.4,0-16.7,0.6-24.8,1.8" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'JP' || selected === 'RU' ? 1 : 0) }} />
					<path class="network_6_1" d="M201.2,373.2c8.2-19.7,12.7-41.3,12.7-64c0-4.9-0.2-9.7-0.6-14.5c-1.3-15.6-4.8-30.7-10.2-44.8
						c-9.8-25.9-25.9-48.8-46.5-66.7" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'PO' || selected === 'SP' ? 1 : 0) }}/>
					<path class="network_6_2" d="M157,182.8c21.7,15.7,47.3,26.4,75.2,30.2c7.5,1,15.1,1.6,22.9,1.6c7.8,0,15.5-0.5,23-1.6
						c28-3.9,53.8-14.6,75.6-30.6" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'EN' ? 1 : 0) }} />
					<path class="network_6_3" d="M200.1,375c-7.7-38.2-33.6-69.7-68.2-85.4" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'PO' || selected === 'RU' ? 1 : 0) }} />
					<path class="network_6_3" d="M200.9,375.6c32.7-16.6,72.4-18.1,107.9-0.8c0.5,0.2,1,0.5,1.5,0.8" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'JP' || selected === 'PO' ? 1 : 0) }}/>
					<path class="network_6_4" d="M310.2,374.7c7.8-38,33.6-69.5,68.1-85.1" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'FR' || selected === 'JP' ? 1 : 0) }}/>
					<path class="network_6_4" d="M131.4,289.9c38.4-14.9,80.1-23.1,123.7-23.1c43.4,0,85,8.1,123.2,22.9" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'FR' || selected === 'RU' ? 1 : 0) }}/>
					<path class="network_6_4" d="M309.9,374.9c16.5-85-4.4-172.3-55-240.3" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'AR' || selected === 'JP' ? 1 : 0) }} />
					<path class="network_6_0" d="M255.3,134.8c21.9,29,56.7,47.7,95.8,47.7c0.9,0,1.7,0,2.6,0" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'AR' || selected === 'EN' ? 1 : 0) }}/>
					<path class="network_6_4" d="M254.7,134.9c-21.9,29.1-56.8,48-96,48c-0.6,0-1.1,0-1.7,0" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'AR' || selected === 'SP' ? 1 : 0) }}/>
					<path class="network_6_3" d="M157,183.9c76.8,39.9,132.2,110.6,154,192.4" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'SP' || selected === 'JP' ? 1 : 0) }} />
					<path class="network_6_3" d="M200.3,374.9c-16.5-85,4.4-172.3,55-240.3" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'AR' || selected === 'PO' ? 1 : 0) }} />
					<path class="network_6_6" d="M255.2,134.7c1.1,28.5,9.3,55.2,22.9,78.3c8,13.5,17.8,25.9,29.1,36.6c18.4,17.4,40.7,30.7,65.5,38.4" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'FR' || selected === 'AR' ? 1 : 0) }} />
					<path class="network_6_7" d="M201.3,372.9c13-23.6,31.5-43.7,53.8-58.6c12.9-8.6,27-15.5,42-20.3c16-5.1,33.1-7.9,50.8-7.9
						c8.4,0,16.7,0.6,24.8,1.8" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'FR' || selected === 'PO' ? 1 : 0) }} />
					<path class="network_6_4" d="M311.4,373.2c-8.2-19.7-12.7-41.3-12.7-64c0-4.9,0.2-9.7,0.6-14.5c1.3-15.6,4.8-30.7,10.2-44.8
						c9.8-25.9,25.9-48.8,46.5-66.7" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'EN' || selected === 'JP' ? 1 : 0) }} />
					<path class="network_6_8" d="M200.7,376.1c21.9-83.7,78.5-153.4,153.6-192.8" stroke-dasharray={dashArray} stroke-dashoffset={dashoffset} style={{ opacity: selected === '' ? 1 : (selected === 'EN' || selected === 'PO' ? 1 : 0) }} />
				</g>
				)
			}}
		</Animate>
  );
};

export default NetworkLines;
