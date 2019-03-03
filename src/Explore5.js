import React from 'react';
import Swipe from 'react-easy-swipe';

const Explore5 = ({ history }) => {
  const onSwipeRight = () => {
    history.push(`/explore1`);
  };

  const onSwipeLeft = () => {
    history.push(`/explore5`);
  };

  const goToChapter5 = () => {
    history.push(`/chapter5`);
  };

  return (
    <Swipe
      onSwipeRight={onSwipeRight}
      onSwipeLeft={onSwipeLeft}
      style={{ height: '100%' }}
    >
      <div className='w-100 flex flex-column pa4'>
        <div className='pa4 tc'>Explore5</div>
      </div>

      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToChapter5()}
      >
        <div className=''>READ CHAPTER 5</div>
      </div>
    </Swipe>
  );
};

export default Explore5;
