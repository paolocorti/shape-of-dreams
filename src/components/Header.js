import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';
import './Header.scss';

const Header = ({ location }) => {
  const { pathname } = location;
  const context = useContext(AppContext);

  console.log(pathname);
  return (
    <div
      className='w-100 fixed flex justify-between pv3 ph4'
      style={{ flex: 1 }}
      style={{
        height: '50px',
        zIndex: 99,
        backgroundColor: context.selectedView === 'content' ? 'white' : ''
      }}
    >
      <div
        className={`header-el ${pathname === '/chapter1' ? 'selected' : ''}`}
      />
      <div
        className={`header-el ${pathname === '/chapter2' ? 'selected' : ''}`}
      />
      <div
        className={`header-el ${pathname === '/chapter3' ? 'selected' : ''}`}
      />
      <div
        className={`header-el ${pathname === '/chapter4' ? 'selected' : ''}`}
      />
    </div>
  );
};

export default withRouter(Header);
