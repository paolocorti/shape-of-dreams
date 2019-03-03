import React from 'react';
import Swipe from 'react-easy-swipe';

const Explore4 = ({ history }) => {
  const onSwipeRight = () => {
    history.push(`/explore5`);
  };

  const onSwipeLeft = () => {
    history.push(`/explore3`);
  };

  const goToChapter4 = () => {
    history.push(`/chapter4`);
  };

  return (
    <Swipe
      onSwipeRight={onSwipeRight}
      onSwipeLeft={onSwipeLeft}
      style={{ height: '100%' }}
    >
      <div className='w-100 flex flex-column pa4'>
        <div className='pa4 tc'>Explore4</div>
      </div>

      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToChapter4()}
      >
        <div className=''>READ CHAPTER 4</div>
      </div>
    </Swipe>
  );
};

export default Explore4;
