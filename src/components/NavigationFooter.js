import React from 'react';
import { Link } from 'react-router-dom';

const NavigationFooter = ({ selectedView, setSelectedView }) => {
  return (
    <div
      className='w-100 flex justify-between pa2 fixed bottom-0'
      style={{ flex: 1 }}
    >
      <div
        className='w-33 flex justify-center items-center'
        onClick={() => setSelectedView('landing')}
      >
        Landing
      </div>
      <div
        className='w-33 flex justify-center items-center'
        onClick={() => setSelectedView('content')}
      >
        Read the story
      </div>
      <div
        className='w-33 flex justify-center items-center'
        onClick={() => setSelectedView('explore')}
      >
        Explore the dreams
      </div>
    </div>
  );
};

export default NavigationFooter;
