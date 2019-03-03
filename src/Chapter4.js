import React from 'react';
import Swipe from 'react-easy-swipe';

const Chapter4 = ({ history }) => {
  const onSwipeRight = () => {
    history.push(`/chapter5`);
  };

  const onSwipeLeft = () => {
    history.push(`/chapter3`);
  };

  const goToExplore4 = () => {
    history.push(`/explore4`);
  };

  return (
    <Swipe onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}>
      <div className='w-100 h-100 flex flex-column pa4'>
        <div className='pa4 tc'>Chapter4</div>
        <div className='pa4 tc'>The shapes of our dreams</div>
        <div className='pa4 tc'>
          Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercita
        </div>
      </div>
      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToExplore4()}
      >
        <div className=''>EXPLORE CHAPTER 4</div>
      </div>
    </Swipe>
  );
};

export default Chapter4;
