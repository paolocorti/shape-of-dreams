import React from 'react';
import Swipe from 'react-easy-swipe';

const Chapter2 = ({ history }) => {
  const onSwipeRight = () => {
    history.push(`/chapter3`);
  };

  const onSwipeLeft = () => {
    history.push(`/chapter1`);
  };

  const goToExplore2 = () => {
    history.push(`/explore2`);
  };

  return (
    <Swipe onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}>
      <div className='w-100 h-100 flex flex-column pa4'>
        <div className='pa4 tc'>Chapter2</div>
        <div className='pa4 tc'>A time for Dreams</div>
        <div className='pa4 tc'>
          Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercita
        </div>
      </div>
      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToExplore2()}
      >
        <div className=''>EXPLORE CHAPTER 2</div>
      </div>
    </Swipe>
  );
};

export default Chapter2;
