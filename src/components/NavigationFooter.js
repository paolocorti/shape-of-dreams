import React from 'react';
import { Link } from 'react-router-dom';

const NavigationFooter = ({ selectedView, setSelectedView }) => {
  return (
    <div
      className='w-100 flex justify-center fixed bottom-0 bg-white'
      style={{ flex: 1, height: '50px' }}
    >
      <div
        className='w-30 flex justify-center items-center pa3'
        onClick={() => setSelectedView('landing')}
      >
        <img
          src={'/images/chapter-landing.svg'}
          alt='Landing icon'
          width={35}
        />
      </div>
      <div
        className='w-30 flex justify-center items-center pa3'
        onClick={() => setSelectedView('content')}
      >
        <img src={'/images/read.svg'} alt='Read icon' width={35} />
      </div>
      <div
        className='w-30 flex justify-center items-center pa3 cursor-pointer'
        onClick={() => setSelectedView('explore')}
      >
        <img src={'/images/explore.svg'} alt='Explore icon' width={35} />
      </div>
    </div>
  );
};

export default NavigationFooter;
