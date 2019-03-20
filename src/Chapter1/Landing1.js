import React from 'react';
import landing1 from './landing_1.svg';

const Landing1 = ({}) => {
  return (
    <div className='w-100 flex flex-column pa2 landing1'>
      <h2 className='tc fw6'>Chapter1</h2>
      <h1 className='tc fw7'>The shapes of our dreams</h1>
      <div className='w-100 tc mt2'>
        <img src={landing1} width='90%' alt='chapter 1 icon' />
      </div>
    </div>
  );
};

export default Landing1;
