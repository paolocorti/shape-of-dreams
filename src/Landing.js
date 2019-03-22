import React from 'react';
import landing1 from './Chapter1/landing_1.svg';

const Landing = ({ history }) => {
  const goToChapter1 = () => {
    history.push(`/chapter1`);
  };

  return (
    <div className='w-100 h-100 flex flex-column pa2 landing'>
      <div className='landing-header w-100 tc pa4'>
        <img src={landing1} height='100%' alt='chapter 1 icon' />
      </div>
      <div className='landing-content w-100'>
        <h1 className='tc fw7 mt0 title'>
          THE <br /> MEANING <br /> OF DREAMS
        </h1>
        <div className='ph4 tc subtitle'>
          A visual exploration on Google searches for the interpretation of
          dreams
        </div>
      </div>
      <div className='landing-footer w-100 tc pa4' onClick={goToChapter1}>
        <img src={'/images/tap.svg'} alt='Tap icon' width={35} />
        <div>TAP TO START EXPLORING</div>
      </div>
    </div>
  );
};

export default Landing;
