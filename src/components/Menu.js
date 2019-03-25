import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';

const Menu = ({ history }) => {
  const context = useContext(AppContext);

  const goTo = path => {
    context.toggleMenu();
    history.push(path);
  };

  return (
    <div
      className={`menu w-100 flex flex-column justify-center absolute top-0 bottom-0 left-0 right-0 bg-white ${context.menuOpen &&
        'open'}`}
      style={{ zIndex: 99 }}
    >
      <div className='w-100 flex justify-center items-center pa4'>
        <div className='raleway' onClick={() => goTo('/')}>
          HOME
        </div>
      </div>
      <div className='w-100 flex justify-center items-center pa4'>
        <div className='raleway' onClick={() => goTo('/chapter1')}>
          CHAPTER 1
        </div>
      </div>
      <div className='w-100 flex justify-center items-center pa4'>
        <div className='raleway' onClick={() => goTo('/chapter2')}>
          CHAPTER 2
        </div>
      </div>
      <div className='w-100 flex justify-center items-center pa4'>
        <div className='raleway' onClick={() => goTo('/chapter3')}>
          CHAPTER 3
        </div>
      </div>
      <div className='w-100 flex justify-center items-center pa4'>
        <div className='raleway' onClick={() => goTo('/chapter4')}>
          CHAPTER 4
        </div>
      </div>
    </div>
  );
};

export default withRouter(Menu);
