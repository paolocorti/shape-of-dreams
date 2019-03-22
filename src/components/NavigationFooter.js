import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../appContext';

const NavigationFooter = ({ selectedView, setSelectedView }) => {
  const context = useContext(AppContext);

  return (
    <div
      className='w-100 flex justify-center fixed bottom-0 bg-white'
      style={{ flex: 1, height: '50px' }}
    >
      <div
        className='w-30 flex justify-center items-center pa3'
        onClick={() => context.setSelectedView('landing')}
      >
        <img
          src={'/images/chapter-landing.svg'}
          alt='Landing icon'
          width={35}
        />
      </div>
      <div
        className='w-30 flex justify-center items-center pa3'
        onClick={() => context.setSelectedView('content')}
      >
        <img src={'/images/read.svg'} alt='Read icon' width={35} />
      </div>
      <div
        className='w-30 flex justify-center items-center pa3 cursor-pointer'
        onClick={() => context.setSelectedView('explore')}
      >
        <img src={'/images/explore.svg'} alt='Explore icon' width={35} />
      </div>
    </div>
  );
};

export default NavigationFooter;
