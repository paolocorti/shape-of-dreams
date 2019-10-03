import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import closeWhite from '../components/images/close-white.svg';
import { AppContext } from '../appContext';
import { isMobileWithTablet } from '../constants';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';
import './Menu.scss';

const Menu = ({ history }) => {
  const context = useContext(AppContext);
  const actualPath = history.location.pathname;

  const goTo = path => {
    context.toggleMenu();
    history.push(path);
  };

  const closeMenu = () => {
    context.toggleMenu();
  };

  return (
    <div
      className={`menu w-100 flex flex-column justify-around fixed top-0 bottom-0 left-0 right-0 ${
        context.menuOpen ? 'open' : 'close'
        }`}
    >
      <div
        className='w-100'
        style={{ maxWidth: isMobileWithTablet ? '100%' : '75%', margin: '0 auto' }}
      >
        <div
          className='flex items-center ph4 pointer mv4 mv0-ns'
          onClick={() => goTo('/')}
        >
          <div
            className={`${
              actualPath === '/' ? 'active' : ''
              } w-100 menu-link white tl relative link-white`}
          >
            Home
          </div>
        </div>
        <div
          className='flex flex-column justify-center ph4 pointer mv4 mv0-ns'
          onClick={() => goTo('/chapter1')}
        >
          <div
            className='white tl menu-title'
          >
            CHAPTER 1
          </div>
          <div
            className={`${
              actualPath === '/chapter1' ? 'active' : ''
              } white tl relative menu-link link-white`}
          >
            The Shapes of our Dreams
          </div>
        </div>
        <div
          className='flex flex-column justify-center ph4 pointer mv4 mv0-ns'
          onClick={() => goTo('/chapter2')}
        >
          <div
            className='white tl menu-title'
          >
            CHAPTER 2
          </div>
          <div
            className={`${
              actualPath === '/chapter2' ? 'active' : ''
              } white tl relative menu-link link-white`}
          >
            The Worlds We Dream of
          </div>
        </div>
        <div
          className='flex flex-column justify-center ph4 pointer mv4 mv0-ns'
          onClick={() => goTo('/chapter3')}
        >
          <div
            className='white tl menu-title'
          >
            CHAPTER 3
          </div>
          <div
            className={`${
              actualPath === '/chapter3' ? 'active' : ''
              } white tl relative menu-link link-white`}
          >
            A Time for Dreams
          </div>
        </div>
        <div
          className='flex flex-column justify-center ph4 pointer mv4 mv0-ns'
          onClick={() => goTo('/chapter4')}
        >
          <div
            className='white tl menu-title'
          >
            CHAPTER 4
          </div>
          <div
            className={`${
              actualPath === '/chapter4' ? 'active' : ''
              } white tl relative menu-link link-white`}
          >
            The Dreams that Connect Us
          </div>
        </div>

        <div
          className='flex items-center ph4 mv4 mv0-ns'
          onClick={() => context.toggleAbout()}
        >
          <div
            className={`${
              actualPath === '/' ? 'active' : ''
              } w-100 white tl relative menu-link link-white`}
          >
            About
          </div>
        </div>

        {isMobileWithTablet && (
          <div className='w-100 flex items-center ph4 mv4 mv0-ns'>
            <div
              className='white tl menu-link'
            >
              Share
            <div className='flex mt2'>
                <FacebookShareButton url={'the-shape-of-dreams.com'}>
                  <FacebookIcon size={24} round={true} iconBgStyle={{ fill: '#ffffff', border: '2px solid #43449a' }} logoFillColor={'#43449a'} />
                </FacebookShareButton>
                <TwitterShareButton url={'the-shape-of-dreams.com'}>
                  <TwitterIcon size={24} round={true} iconBgStyle={{ fill: '#ffffff', border: '2px solid #43449a' }} logoFillColor={'#43449a'} />
                </TwitterShareButton>
              </div>
            </div>
          </div>
        )}
        <div className='w-100 flex items-center ph4 mv4 mv0-ns'>
          <div
            className='read-close pointer'
            onClick={closeMenu}
            style={{
              right: isMobileWithTablet ? '50%' : '25px',
              top: isMobileWithTablet ? 'auto' : '25px',
              bottom: isMobileWithTablet ? '24px' : 'auto',
              left: 'auto',
              marginRight: isMobileWithTablet ? '-15px' : 'auto',
              zIndex: 999
            }}
          >
            <img
              src={closeWhite}
              alt='Close menu icon'
              width={30}
              className='pointer svg-hover'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Menu);
