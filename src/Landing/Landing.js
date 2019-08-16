import React, { useState, Suspense } from 'react';
import './Landing.scss';
import Loader from '../components/Loader'
import landingIcon from './landing-flower.svg';
import sky from './landing-desktop.svg';
import skyMobile from './landing-mobile.svg';
import { isMobile } from 'react-device-detect';
import { isMobileWithTablet } from '../constants';

const Landing = ({ history }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [up, setUp] = useState(false);
  const [scroll, setScroll] = useState(false);

  const goToChapter1 = () => {
    setScroll(true);
    setTimeout(() => {
      setFadeOut(true);
    }, 1000);
    setUp(true);
    setTimeout(() => {
      history.push(`/chapter1?section=read`);
    }, 2000);
  };

  const pathname = '/chapter1';

  return (
    <Suspense fallback={<Loader top={"0px"} />}>
      <div
        id='scroll'
        className={`w-100 h-100 overflow-hidden ${scroll ? 'scrolling' : 'not-scrolling'}`}
        style={{
          position: 'absolute',
          backgroundClip: '#2a2c60',
          backgroundImage: `url(${isMobileWithTablet ? skyMobile : sky})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* <div className='landing-header w-100 tc pa4 pt5' style={{ margin: '0 auto', maxWidth: '75%' }}>
        <img
          src={landing}
          height='100%'
          alt='chapter 1 icon'
          width={220}
          className={`${blur ? 'blur' : ''}`}
        />
      </div> */}
        <div className={`landing-content w-100 ${fadeOut ? 'fadeOut' : ''} ${up ? 'up' : ''}`}>
          <h3 className='tc fw7 mt0 author'>
            FEDERICA FRAGAPANE <span className='lighter-weight'>for</span> GOOGLE NEWS LAB
          </h3>
          {
            isMobileWithTablet ?
              (
                <h1 className='tc fw5 mt2 mb2 title'>
                  The Shape <br></br> of Dreams
              </h1>
              ) : (
                <h1 className='tc fw5 mt2 mb2 title'>
                  The Shape of Dreams
              </h1>
              )
          }
          <div className='ph4 tc mt4 subtitle'>
            A visual exploration of Google searches for the interpretation of
            dreams
          </div>
          <div className='tc mv4 flex flex-column items-center'>
            <div className='landing-icon-container' onClick={goToChapter1}>
              <img
                src={landingIcon}
                height='100%'
                alt='landing flower icon'
                width={'60%'}
                className={`${fadeOut ? 'fadeOut' : ''}`}
              />
            </div>
            <div className='tc fw5 mt4 call-to-action'>CLICK ON THE FLOWER TO START EXPLORING</div>
          </div>
        </div>
      </div>
    </Suspense >
  );
};

export default Landing;
