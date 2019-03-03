import React from 'react';
import Swipe from 'react-easy-swipe';

const Explore3 = ({ history }) => {
  const onSwipeRight = () => {
    history.push(`/explore4`);
  };

  const onSwipeLeft = () => {
    history.push(`/explore2`);
  };

  const goToChapter3 = () => {
    history.push(`/chapter3`);
  };

  return (
    <Swipe
      onSwipeRight={onSwipeRight}
      onSwipeLeft={onSwipeLeft}
      style={{ height: '100%' }}
    >
      <div className='w-100 flex flex-column pa4'>
        <div className='pa4 tc'>Explore3</div>
      </div>

      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToChapter3()}
      >
        <div className=''>READ CHAPTER 3</div>
      </div>
    </Swipe>
  );
};

export default Explore3;
