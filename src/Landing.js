import React from 'react';

const Landing = ({ history }) => {
  const goToChapter1 = () => {
    history.push(`/chapter1`);
  };

  const goToExplore1 = () => {
    history.push(`/explore1`);
  };

  return (
    <div className='w-100 h-100 flex flex-column'>
      <div
        className='w-100 flex justify-center items-center'
        style={{ height: '80%' }}
      >
        <div className=''>THE MEANING OF DREAMS</div>
      </div>

      <div
        className='w-100 flex justify-center items-center'
        style={{ height: '20%' }}
        onClick={() => goToChapter1()}
      >
        <div className=''>START READING</div>
      </div>

      <div
        className='w-100 flex justify-center items-center'
        style={{ height: '20%' }}
        onClick={() => goToExplore1()}
      >
        <div className=''>START EXPLORING</div>
      </div>
    </div>
  );
};

export default Landing;
