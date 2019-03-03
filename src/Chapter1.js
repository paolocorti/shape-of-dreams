import React from 'react';
import Swipe from 'react-easy-swipe';

const Chapter1 = ({ history }) => {
  const onSwipeRight = () => {
    history.push(`/chapter2`);
  };

  const onSwipeLeft = () => {
    history.push(`/chapter5`);
  };

  const goToExplore1 = () => {
    history.push(`/explore1`);
  };

  return (
    <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
      <div className='w-100 h-100 flex flex-column pa4'>
        <div className='pa4 tc'>Chapter1</div>
        <div className='pa4 tc'>Looking for dreams</div>
        <div className='pa4 tc'>
          Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercita
        </div>
      </div>
      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToExplore1()}
      >
        <div className=''>EXPLORE CHAPTER 1</div>
      </div>
    </Swipe>
  );
};

export default Chapter1;
