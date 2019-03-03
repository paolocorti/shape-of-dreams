import React from 'react';
import Swipe from 'react-easy-swipe';

const Explore1 = ({ history }) => {
  const onSwipeRight = () => {
    history.push(`/explore2`);
  };

  const onSwipeLeft = () => {
    history.push(`/explore5`);
  };

  const goToChapter1 = () => {
    history.push(`/chapter1`);
  };

  return (
    <Swipe
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      style={{ height: '100%' }}
    >
      <div className='w-100 flex flex-column pa4'>
        <div className='pa4 tc'>Explore1</div>
      </div>

      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToChapter1()}
      >
        <div className=''>READ CHAPTER 1</div>
      </div>
    </Swipe>
  );
};

export default Explore1;
