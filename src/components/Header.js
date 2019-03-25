import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../appContext';

const Header = ({}) => {
  const context = useContext(AppContext);
  return (
    <div
      className='w-100 tc pa2 fixed'
      style={{ flex: 1 }}
      style={{ height: '50px', zIndex: 999 }}
    >
      <img
        src={'/images/menu.svg'}
        alt='Menu icon'
        width={30}
        onClick={() => context.toggleMenu()}
      />
    </div>
  );
};

export default Header;
