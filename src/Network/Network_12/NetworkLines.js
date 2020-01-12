import React from 'react';
import { Animate } from 'react-move';
import { easeQuadOut } from 'd3-ease';
import '../Network.scss';
import { dashArray, dashOffset, lineAnimDuration, lineAnimDelay } from '../network_constants';

const NetworkLines = ({ selected, show }) => {

  return (
		<Animate
      show={show}
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
    <g id='lines' transform="translate(-42,-40)">
      {/* <path
        className='network_11_0'
        d='M200.7,376.1c21.9-83.7,78.5-153.4,153.6-192.8'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'EN' || selected === 'PO' ? 1 : 0
        }}
      />
      <path
        className='network_11_1'
        d='M378.2,288.9c-17.5-20.8-28-47.7-28-77c0-10,1.2-19.7,3.5-29'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'EN' || selected === 'FR' ? 1 : 0
        }}
      />
      <path
        className='network_11_2'
        d='M201.2,373.2c8.2-19.7,12.7-41.3,12.7-64c0-4.9-0.2-9.7-0.6-14.5c-1.3-15.6-4.8-30.7-10.2-44.8
			c-9.8-25.9-25.9-48.8-46.5-66.7'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'SP' || selected === 'PO' ? 1 : 0
        }}
      />
      <path
        className='network_11_3'
        d='M134,287.7c20.5-5.8,40.3-15.7,58.1-29.8c3.8-3,7.5-6.2,11-9.5c11.4-10.8,21-22.8,28.8-35.8
			c14.2-23.8,22.1-50.6,23.4-77.8'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'AR' || selected === 'RU' ? 1 : 0
        }}
      />
      <path
        className='network_11_3'
        d='M310.2,374.7c7.8-38,33.6-69.5,68.1-85.1'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'FR' || selected === 'JP' ? 1 : 0
        }}
      />
      <path
        className='network_11_3'
        d='M131.4,289.9c38.4-14.9,80.1-23.1,123.7-23.1c43.4,0,85,8.1,123.2,22.9'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'RU' || selected === 'FR' ? 1 : 0
        }}
      />
      <path
        className='network_11_4'
        d='M156.8,183.7c41.1,3,82.2,13.5,121.6,32.3c39.2,18.7,73.2,43.9,101.4,73.7'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'SP' || selected === 'FR' ? 1 : 0
        }}
      />
      <path
        className='network_11_5'
        d='M157,182.8c21.7,15.7,47.3,26.4,75.2,30.2c7.5,1,15.1,1.6,22.9,1.6c7.8,0,15.5-0.5,23-1.6
			c28-3.9,53.8-14.6,75.6-30.6'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'EN' || selected === 'SP' ? 1 : 0
        }}
      />
      <path
        className='network_11_1'
        d='M157,183.9c76.8,39.9,132.2,110.6,154,192.4'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'SP' || selected === 'JP' ? 1 : 0
        }}
      />
      <path
        className='network_11_4'
        d='M200.3,374.9c-16.5-85,4.4-172.3,55-240.3'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'AR' || selected === 'PO' ? 1 : 0
        }}
      />
      <path
        className='network_11_6'
        d='M201.3,372.9c13-23.6,31.5-43.7,53.8-58.6c12.9-8.6,27-15.5,42-20.3c16-5.1,33.1-7.9,50.8-7.9
			c8.4,0,16.7,0.6,24.8,1.8'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'PO' || selected === 'FR' ? 1 : 0
        }}
      />
      <path
        className='network_11_4'
        d='M255.3,134.8c21.9,29,56.7,47.7,95.8,47.7c0.9,0,1.7,0,2.6,0'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'EN' || selected === 'AR' ? 1 : 0
        }}
      />
      <path
        className='network_11_3'
        d='M254.7,134.9c-21.9,29.1-56.8,48-96,48c-0.6,0-1.1,0-1.7,0'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'AR' || selected === 'SP' ? 1 : 0
        }}
      />
      <path
        className='network_11_8'
        d='M255.2,134.7c1.1,28.5,9.3,55.2,22.9,78.3c8,13.5,17.8,25.9,29.1,36.6c18.4,17.4,40.7,30.7,65.5,38.4'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'AR' || selected === 'FR' ? 1 : 0
        }}
      />
      <path
        className='network_11_3'
        d='M200.1,375c-7.7-38.2-33.6-69.7-68.2-85.4'
        strokeDasharray={dashArray} strokeDashoffset={dashoffset}
        style={{
          opacity:
            selected === '' ? 1 : selected === 'RU' || selected === 'PO' ? 1 : 0
        }}
      /> */}
      <path className="network_12_0" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M200.1,375c-7.7-37.7-33.1-69.5-68.1-85.4"  style={{
          opacity:
            selected === '' ? 1 : selected === 'RU' || selected === 'PO' ? 1 : 0
        }}
      />
      <path className="network_12_1" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M157,183.9c76.1,39.7,132,109.5,154,192.4"  style={{
          opacity:
            selected === '' ? 1 : selected === 'JP' || selected === 'SP' ? 1 : 0
        }}
      />
      <path className="network_12_1" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M309.9,374.9c16.2-84.3-3.8-171.5-55-240.3"  style={{
          opacity:
            selected === '' ? 1 : selected === 'AR' || selected === 'JP' ? 1 : 0
        }}
      />
      <path className="network_12_1" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M200.3,374.9c-16.2-84.3,3.8-171.5,55-240.3"  style={{
          opacity:
            selected === '' ? 1 : selected === 'AR' || selected === 'PO' ? 1 : 0
        }}
      />
      <path className="network_12_2" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M201.2,373.2c8.4-20.3,12.7-42,12.7-64c0-4.9-0.2-9.7-0.6-14.5c-1.3-15.3-4.8-30.4-10.2-44.8
        c-9.8-25.7-25.7-48.6-46.5-66.7"  style={{
          opacity:
            selected === '' ? 1 : selected === 'PO' || selected === 'SP' ? 1 : 0
        }}
      />
      <path className="network_12_3" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M157,182.8c22.2,16.1,48,26.5,75.2,30.2c7.6,1,15.2,1.6,22.9,1.6c7.7,0,15.4-0.5,23-1.6
        c27.3-3.8,53.3-14.3,75.6-30.6"  style={{
          opacity:
            selected === '' ? 1 : selected === 'EN' || selected === 'SP' ? 1 : 0
        }}
      />
      <path className="network_12_4" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M378.2,288.9c-24.6-29.4-33.7-68.8-24.4-106"  style={{
          opacity:
            selected === '' ? 1 : selected === 'EN' || selected === 'FR' ? 1 : 0
        }}
      />
      <path className="network_12_5" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M156.8,183.7c84.9,6.4,164.4,44.2,223,106"  style={{
          opacity:
            selected === '' ? 1 : selected === 'FR' || selected === 'SP' ? 1 : 0
        }}
      />
      <path className="network_12_1" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M132.8,289.6c18.1-21.6,28-48.8,28-77c0-9.8-1.2-19.5-3.5-29"  style={{
          opacity:
            selected === '' ? 1 : selected === 'RU' || selected === 'SP' ? 1 : 0
        }}
      />
      <path className="network_12_1" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M310.2,374.7c7.8-37.6,33.1-69.2,68.1-85.1"  style={{
          opacity:
            selected === '' ? 1 : selected === 'FR' || selected === 'JP' ? 1 : 0
        }}
      />
      <path className="network_12_1" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M131.4,289.9c79.4-30.8,167.4-30.8,246.9-0.2"  style={{
          opacity:
            selected === '' ? 1 : selected === 'RU' || selected === 'FR' ? 1 : 0
        }}
      />
      <path className="network_12_0" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M201.3,372.9c13-23.6,31.4-43.7,53.8-58.6c27.5-18.4,59.8-28.2,92.8-28.1c8.3,0,16.6,0.6,24.8,1.8"  style={{
          opacity:
            selected === '' ? 1 : selected === 'PO' || selected === 'FR' ? 1 : 0
        }}
      />
      <path className="network_12_4" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M311.4,373.2c-8.4-20.3-12.7-42-12.7-64c0-4.9,0.2-9.7,0.6-14.5c3.7-43.1,24-83.1,56.7-111.5"  style={{
          opacity:
            selected === '' ? 1 : selected === 'EN' || selected === 'JP' ? 1 : 0
        }}
      />
      <path className="network_12_6" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M200.7,376.1c21.9-83,77.6-152.9,153.6-192.8"  style={{
          opacity:
            selected === '' ? 1 : selected === 'EN' || selected === 'PO' ? 1 : 0
        }}
      />
      <path className="network_12_5" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M355.4,182.4c-84.9,6.4-164.4,44.2-223,106"  style={{
          opacity:
            selected === '' ? 1 : selected === 'EN' || selected === 'RU' ? 1 : 0
        }}
      />
      <path className="network_12_1" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M310.3,372.9c-13-23.6-31.4-43.7-53.8-58.6c-27.5-18.4-59.8-28.2-92.8-28.1c-8.3,0-16.6,0.6-24.8,1.8"  style={{
          opacity:
            selected === '' ? 1 : selected === 'RU' || selected === 'JP' ? 1 : 0
        }}
      />
      <path className="network_12_0" strokeDasharray={dashArray} strokeDashoffset={dashoffset} d="M200.9,375.6c33.8-17.2,73.8-17.5,107.9-0.8l1.5,0.8"  style={{
          opacity:
            selected === '' ? 1 : selected === 'PO' || selected === 'JP' ? 1 : 0
        }}
      />
    </g>
  	)
  }}
</Animate>
);
};

export default NetworkLines;
