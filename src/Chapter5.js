import React from 'react';
import Swipe from 'react-easy-swipe';

const Chapter5 = ({ history }) => {
  const onSwipeRight = () => {
    history.push(`/chapter1`);
  };

  const onSwipeLeft = () => {
    history.push(`/chapter4`);
  };

  const goToExplore5 = () => {
    history.push(`/explore5`);
  };

  return (
    <Swipe onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}>
      <div className='w-100 h-100 flex flex-column pa4'>
        <div className='pa4 tc'>Chapter5</div>
        <div className='pa4 tc'>The dreams that connect us</div>
        <div className='pa4 tc'>
          Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercita
        </div>
      </div>
      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToExplore5()}
      >
        <div className=''>EXPLORE CHAPTER 5</div>
      </div>
    </Swipe>
  );
};

export default Chapter5;
