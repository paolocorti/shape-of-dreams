import React from 'react';
import petal1 from './33C3DE13A0A60895.png';
import petal2 from './33C3DE13A0A60897.png';
import petal3 from './33C3DE13A0A60892.png';
import petal4 from './33C3DE13A0A60893.png';
import petal5 from './33C3DE13A0A6089D.png';
import petal6 from './33C3DE13A0A6089F.png';
import petal7 from './33C3DE13A0A60890.png';

const NetworkPetals = ({ selected, setSelected }) => {
  return (
    <g>
      <image
        style={{ overflow: 'visible', opacity: 1 }}
        width='110'
        height='110'
        xlinkHref={petal1}
        transform='matrix(1 0 0 1 100 83)'
        onClick={() => setSelected('AR')}
      />
      <image
        style={{ overflow: 'visible', opacity: selected === 'AR' ? 0.2 : 1 }}
        width='155'
        height='156'
        xlinkHref={petal2}
        transform='matrix(1 0 0 1 367 60)'
      />
      <image
        style={{ overflow: 'visible', opacity: selected === 'AR' ? 0.2 : 1 }}
        width='123'
        height='123'
        xlinkHref={petal3}
        transform='matrix(1 0 0 1 93 250)'
      />
      <image
        style={{ overflow: 'visible', opacity: selected === 'AR' ? 0.2 : 1 }}
        width='115'
        height='115'
        xlinkHref={petal4}
        transform='matrix(1 0 0 1 387 254)'
      />
      <image
        style={{ overflow: 'visible', opacity: selected === 'AR' ? 0.2 : 1 }}
        width='156'
        height='156'
        xlinkHref={petal5}
        transform='matrix(1 0 0 1 77 407)'
      />
      <image
        style={{ overflow: 'visible', opacity: selected === 'AR' ? 0.2 : 1 }}
        width='115'
        height='115'
        xlinkHref={petal6}
        transform='matrix(1 0 0 1 387 428)'
      />
      <image
        style={{ overflow: 'visible', opacity: selected === 'AR' ? 0.2 : 1 }}
        width='80'
        height='80'
        xlinkHref={petal7}
        transform='matrix(1 0 0 1 260 619)'
      />
    </g>
  );
};

export default NetworkPetals;
