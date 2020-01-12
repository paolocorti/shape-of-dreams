import React from 'react';
import landing1 from './landing_1.svg';

const Landing4 = ({ }) => {
  return (
    <div className='w-100 flex flex-column pa2 landing1'>
      <h2 className='tc fw6 f4'>Chapter 4</h2>
      <h1 className='tc fw7'>The Dreams that Connect Us</h1>
      <div className='ph5 f4 tc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis dolor,
        sodales sed dapibus gravida, semper ut nunc.
      </div>

      <div className='ph5 f4 tc mt4'>Connections among </div>
      <div className='ph5 f4 tc'>the languages in 2019</div>
      <div className='w-100 tc mt4'>
        <img src={landing1} width='90%' alt='chapter 1 icon' />
      </div>
    </div>
  );
};

export default Landing4;
