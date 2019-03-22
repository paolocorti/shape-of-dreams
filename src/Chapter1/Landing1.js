import React from 'react';
import landing1 from './landing_1.svg';

const Landing1 = ({}) => {
  return (
    <div className='w-100 flex flex-column pa2 landing1 view'>
      <h2 className='tc fw6 f4 mb0'>Chapter 1</h2>
      <div className='tc fw6 f4'>&#183;</div>
      <h1 className='tc fw7 mt0'>The Shapes of our Dreams</h1>
      <div className='ph5 tc f4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis dolor,
        sodales sed dapibus gravida, semper ut nunc.
      </div>

      <div className='w-100 tc mt4'>
        <img src={landing1} width='90%' alt='chapter 1 icon' />
      </div>
    </div>
  );
};

export default Landing1;
