import React from 'react';
import Swipe from 'react-easy-swipe';

const Chapter3 = ({ history }) => {
  const onSwipeRight = () => {
    history.push(`/chapter4`);
  };

  const onSwipeLeft = () => {
    history.push(`/chapter2`);
  };

  const goToExplore3 = () => {
    history.push(`/explore3`);
  };

  return (
    <Swipe onSwipeRight={onSwipeRight} onSwipeLeft={onSwipeLeft}>
      <div className='w-100 h-100 flex flex-column pa4'>
        <div className='pa4 tc'>Chapter3</div>
        <div className='pa4 tc'>Nocturnal worlds</div>
        <div className='pa4 tc'>
          Lorem ipsum dolor sit amet, consectetur adipi-scing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercita
        </div>
      </div>
      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToExplore3()}
      >
        <div className=''>EXPLORE CHAPTER 3</div>
      </div>
    </Swipe>
  );
};

export default Chapter3;
