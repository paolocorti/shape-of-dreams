import React from 'react';
import landing3 from './landing_3.svg';

const Landing3 = ({}) => {
  return (
    <div className='w-100 flex flex-column pa2 landing1'>
      <h2 className='tc fw6 f4'>Chapter 3</h2>
      <h1 className='tc fw7'>A Time for Dreams</h1>
      <div className='ph5 f4 tc'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In felis dolor,
        sodales sed dapibus gravida, semper ut nunc.
      </div>

      <div className='ph5 f4 tc mt4'>Dream meaning</div>
      <div className='ph5 f4 tc'>interest over time 2008-2018</div>
      <div className='w-100 tc mt4'>
        <img src={landing3} width='90%' alt='chapter 1 icon' />
      </div>
    </div>
  );
};

export default Landing3;
