import React from 'react';
import landing2 from './landing_2.svg';

const Landing2 = ({}) => {
  return (
    <div className='w-100 flex flex-column pa2 landing1'>
      <h2 className='tc fw6 f4'>Chapter 2</h2>
      <h1 className='tc fw7'>The Worlds We Dream of</h1>
      <div className='ph5 tc f4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis dolor,
        sodales sed dapibus gravida, semper ut nunc.
      </div>

      <div className='ph5 tc mt4 f4'>Categories of subjects</div>
      <div className='ph5 tc f4'>in all the languages (2008-2018)</div>
      <div className='w-100 tc mt4'>
        <img src={landing2} width='90%' alt='chapter 1 icon' />
      </div>
    </div>
  );
};

export default Landing2;
