import React from 'react';
import Swipe from 'react-easy-swipe';

const Explore2 = ({ history }) => {
  const onSwipeRight = () => {
    history.push(`/explore3`);
  };

  const onSwipeLeft = () => {
    history.push(`/explore1`);
  };

  const goToChapter2 = () => {
    history.push(`/chapter2`);
  };

  return (
    <Swipe
      onSwipeRight={onSwipeRight}
      onSwipeLeft={onSwipeLeft}
      style={{ height: '100%' }}
    >
      <div className='w-100 flex flex-column pa4'>
        <div className='pa4 tc'>Explore2</div>
      </div>

      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToChapter2()}
      >
        <div className=''>READ CHAPTER 2</div>
      </div>
    </Swipe>
  );
};

export default Explore2;
