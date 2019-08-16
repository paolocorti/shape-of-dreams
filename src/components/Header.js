import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';
import './Header.scss';
import { isMobile } from 'react-device-detect';
import { isMobileWithTablet } from '../constants';


const Header = ({ location }) => {
  const { pathname } = location;
  const context = useContext(AppContext);

  return (
    <div
      id='header'
      className={isMobileWithTablet ? 'ph4' : ''}
      style={{ flex: 1, backgroundColor: isMobileWithTablet ? (context.selectedView === 'content' ? 'white' : '') : '' }}
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
