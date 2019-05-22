import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../appContext';
import './Footer.scss';
import { isMobile } from 'react-device-detect';

const NavigationFooter = ({ }) => {
  const context = useContext(AppContext);

  return (
    <div className='footer ph4' style={{ flex: 1, height: '50px' }}>
      {/* <div
        className='w-30 flex justify-center items-center pa3'
        onClick={() => context.setSelectedView('landing')}
      >
        <img
          src={'/images/chapter-landing.svg'}
          alt='Landing icon'
          width={35}
        />
      </div> */}
      <div className="flex w-100" style={{ maxWidth: isMobile ? '100%' : '75%', margin: '0 auto' }}>
        <div className='w-10 flex justify-center items-center h-100 pointer'>
          <img
            src={context.menuOpen ? '/images/menu-white.svg' : '/images/menu.svg'}
            alt='Menu icon'
            width={20}
            onClick={() => context.toggleMenu()}
          />
        </div>
        <div
          className='w-40 flex justify-center items-center pointer footer-el h-100'
          onClick={() => context.setSelectedView('content')}
        >
          <div className={context.selectedView === 'content' ? 'active' : '/'}>
            {isMobile ? 'READ' : 'READ THE STORY' }
        </div>
        </div>
        <div
          className='w-40 flex justify-center items-center pointer footer-el h-100'
          onClick={() => context.setSelectedView('explore')}
        >
          <div className={context.selectedView === 'explore' ? 'active' : '/'}>
            {isMobile ? 'EXPLORE' : 'DREAMS EXPLORER' }
        </div>
        </div>
        <div className='w-10 flex justify-center items-center h-100'>
          <img
            src='/images/legend.svg'
            alt='Legend icon'
            width={24}
            onClick={() => context.toggleLegend()}
          />
        </div>
      </div>

    </div>
  );
};

export default NavigationFooter;
