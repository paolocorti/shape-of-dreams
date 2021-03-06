import React, { useEffect, useState } from 'react';
import './Petal.scss';

const PetalStrokeEmpty = ({ id, index }) => {
  const [elVisibility, setElVisibility] = useState(false);

  useEffect(() => {
    setElVisibility(false);
    setTimeout(() => {
      setElVisibility(true);
    }, 100);
  }, [index]);

  return (
    <g id={`petal-${id}`}>
      <g className={`petal-${id} ${elVisibility ? 'show' : 'hide'}`} style={{ transform: 'scale(1.1)'}}>
      <g>
			<g>
				<defs>
					<path id="SVGID_1_" d="M51,24.3c-0.3,6.4-1.9,19.2-0.9,22.9c0.9,3.2,2.2,9.3,3.4,12.4c1.5,4.1,3.8,7.2,6.2,10.6
						c8.5,11.7,30.3,27.1,33.1,37.9c0.5,2.1-4.5,5.7-8.8,10.2c-2.6,2.7-11.8,7.3-14.1,8.7c-2.5,1.6-5.5,2.3-8.3,2.4
						c-6.1,0.3-11.6-2.4-17.4-3.7c-5.8-1.3-11.8-1.8-17.6-0.8c-5.3,0.9-10.7,2.6-16.1,2c-4.4-0.5-9.1-3.2-9.8-8.5
						c1.5-1.5,3.4-2.7,5-4.1c1.8-1.5,3.5-3.2,5-5c7.8-8.7,12.9-19.8,19.5-29.6c3.1-4.6,6.1-9.2,9-13.9c1.8-2.9,5.1-7.5,4.4-11.4"/>
				</defs>
				<use xlinkHref="#SVGID_1_"  style={{overflow:'visible', fill:'url(#petalEmptyGradient)' }}/>
				<clipPath id="SVGID_3_">
					<use xlinkHref="#SVGID_1_"  style={{ overflow:'visible' }} />
				</clipPath>
			</g>
			<g>
				<g>
					<g>
						<path class="petal_no_data_0" d="M37.6,74.6c-0.4,3.6-0.1,7.3,1.1,10.7c1.2,3.4,3.2,6.5,5.4,9.4c2.2,2.9,4.7,5.6,7,8.5
							c2.3,2.8,4.4,5.9,6,9.2c-1.6-3.3-3.8-6.3-6.1-9.1c-2.3-2.8-4.8-5.5-7.1-8.4c-2.3-2.9-4.3-6-5.6-9.5C37,82,36.6,78.3,37,74.6
							L37.6,74.6z"/>
					</g>
					<g>
						<path class="petal_no_data_0" d="M43.1,60.1c-0.1,2.4,0.8,4.7,1.9,6.8c1.2,2.1,2.8,4,4.4,5.8c3.3,3.6,7.1,6.6,10.6,10.1
							c3.5,3.4,6.9,6.9,9.9,10.8c1.5,1.9,2.9,4,4,6.2c1.1,2.2,1.9,4.6,1.9,7c0-2.5-0.8-4.8-1.9-7c-1.1-2.2-2.5-4.2-4-6.1
							c-3-3.8-6.5-7.3-10-10.7c-3.5-3.4-7.3-6.4-10.7-10c-1.7-1.8-3.3-3.7-4.5-5.8c-1.2-2.1-2.2-4.5-2.1-7.1L43.1,60.1z"/>
					</g>
					<g class="petal_no_data_1">
						<path class="petal_no_data_0" d="M29.5,100.5c-0.1,3-1.3,5.9-2.9,8.5c-0.8,1.3-1.7,2.5-2.7,3.6c-1,1.1-2.2,2.1-3.5,2.8
							c1.3-0.8,2.3-1.9,3.3-3c1-1.1,1.9-2.3,2.6-3.6c0.8-1.3,1.5-2.6,2-4C29,103.5,29.4,102,29.5,100.5z"/>
					</g>
					<g>
						<path class="petal_no_data_0" d="M32.2,88c0.1,1.7-0.3,3.3-0.9,4.8c-0.6,1.5-1.5,3-2.4,4.4c-0.9,1.4-1.9,2.7-3,3.9
							c-1.1,1.2-2.3,2.4-3.6,3.4c1.2-1.2,2.2-2.4,3.3-3.7c1-1.3,2-2.6,2.9-3.9c0.9-1.3,1.7-2.8,2.4-4.2C31.5,91.2,32.1,89.7,32.2,88
							z"/>
					</g>
				</g>
				<path class="petal_no_data_0" d="M50.3,0.9c5.6,22.4-5.8,51.2-13.1,72.6c-4.2,12.4-10.7,28.8-7,42c-4-12.2,3.9-34.3,9.1-45.3
					c6.5-13.6,11.2-30.9,12.5-45.9C52.6,16.4,51.9,7.1,50.3,0.9"/>
			</g>
		</g>
      </g>
    </g>
  );
};

export default PetalStrokeEmpty;
