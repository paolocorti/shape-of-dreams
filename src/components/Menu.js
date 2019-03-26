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
      className={`menu w-100 flex flex-column justify-center absolute top-0 bottom-0 left-0 right-0 ${context.menuOpen &&
        'open'}`}
      style={{ zIndex: 99, backgroundColor: '#b05b4e' }}
    >
      <div className='w-100 flex justify-center items-center pa4'>
        <div className='raleway' onClick={() => goTo('/')}>
          Home
        </div>
      </div>
      <div className='w-100 flex justify-center items-center pa4'>
        <div className='raleway' onClick={() => goTo('/chapter1')}>
          The Shapes of our Dreams
        </div>
      </div>
      <div className='w-100 flex justify-center items-center pa4'>
        <div className='raleway' onClick={() => goTo('/chapter2')}>
          The Worlds We Dream of
        </div>
      </div>
      <div className='w-100 flex justify-center items-center pa4'>
        <div className='raleway' onClick={() => goTo('/chapter3')}>
          A Time for Dreams
        </div>
      </div>
      <div className='w-100 flex justify-center items-center pa4'>
        <div className='raleway' onClick={() => goTo('/chapter4')}>
          The Dreams that Connect Us
        </div>
      </div>
    </div>
  );
};

export default withRouter(Menu);
