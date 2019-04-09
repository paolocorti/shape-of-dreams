import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';

const Menu = ({ history }) => {
  const context = useContext(AppContext);

  const goTo = path => {
    context.toggleMenu();
    history.push(path);
  };

  const closeMenu = () => {
    context.toggleMenu();
  };

  return (
    <div
      className={`menu w-100 flex flex-column justify-around fixed top-0 bottom-0 left-0 right-0 ${context.menuOpen &&
        'open'}`}
      style={{ zIndex: 100, backgroundColor: '#43449a' }}
    >
      <div className='w-100 flex items-center ph4' onClick={() => goTo('/')}>
        <div className='white tl' style={{ fontSize: '34px' }}>
          Home
        </div>
      </div>
      <div
        className='w-100 flex flex-column justify-center ph4'
        onClick={() => goTo('/chapter1')}
      >
        <div className='f4 white tl'>CHAPTER 1</div>
        <div className='white tl' style={{ fontSize: '34px' }}>
          The Shapes of our Dreams
        </div>
      </div>
      <div
        className='w-100 flex flex-column justify-center ph4'
        onClick={() => goTo('/chapter2')}
      >
        <div className='f4 white tl'>CHAPTER 2</div>
        <div className='white tl' style={{ fontSize: '34px' }}>
          The Worlds We Dream of
        </div>
      </div>
      <div
        className='w-100 flex flex-column justify-center ph4'
        onClick={() => goTo('/chapter3')}
      >
        <div className='f4 white tl'>CHAPTER 3</div>
        <div className='white tl' style={{ fontSize: '34px' }}>
          A Time for Dreams
        </div>
      </div>
      <div
        className='w-100 flex flex-column justify-center ph4'
        onClick={() => goTo('/chapter4')}
      >
        <div className='f4 white tl'>CHAPTER 4</div>
        <div className='white tl' style={{ fontSize: '34px' }}>
          The Dreams that Connect Us
        </div>
      </div>
      <div
        className='w-100 flex items-center ph4'
        onClick={() => goTo('/about')}
      >
        <div className='white tl' style={{ fontSize: '34px' }}>
          About
        </div>
      </div>
      <div className='w-100 flex items-center ph4'>
        <div className='white tl' style={{ fontSize: '34px' }}>
          Share
        </div>
      </div>
      <div className='w-100 flex items-center ph4'>
        <div className='white tl' onClick={closeMenu}>
          <img
            src={'/images/close-white.svg'}
            alt='Close menu icon'
            width={30}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Menu);
