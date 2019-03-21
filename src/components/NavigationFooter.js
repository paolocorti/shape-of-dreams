import React from 'react';
import { Link } from 'react-router-dom';

const NavigationFooter = ({ selectedView, setSelectedView }) => {
  return (
    <div
      className='w-100 flex justify-between fixed bottom-0 bg-white'
      style={{ flex: 1 }}
    >
      <div
        className='w-50 flex justify-center items-center pa3'
        onClick={() => setSelectedView('content')}
      >
        Read the story
      </div>
      <div
        className='w-50 flex justify-center items-center pa3 cursor-pointer'
        onClick={() => setSelectedView('explore')}
      >
        Explore the dreams
      </div>
    </div>
  );
};

export default NavigationFooter;
