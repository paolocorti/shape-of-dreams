import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({}) => {
  return (
    <div
      className='w-100 tc pa2 absolute'
      style={{ flex: 1 }}
      style={{ height: '50px', zIndex: 99 }}
    >
      <img src={'/images/menu.svg'} alt='Menu icon' width={30} />
    </div>
  );
};

export default Header;
