import React, { useState } from 'react';
import './Landing.scss';
import Loader from '../components/Loader'
import landingIcon from './landing-flower.svg';
import sky from './landing_sky_desktop.jpg';
import skyMobile from './landing_sky_mobile.jpg';
import { isMobile } from 'react-device-detect';

const Landing = ({ history }) => {
  const [blur, setBlur] = useState(false);
  const [scroll, setScroll] = useState(false);

  const goToChapter1 = () => {
    setScroll(true);
    setTimeout(() => {
      setBlur(true);
    }, 300);
    setTimeout(() => {
      history.push(`/chapter1?section=read`);
    }, 2000);
  };

  const pathname = '/chapter1';

  return (
    <React.Suspense fallback={<Loader top={"0px"} />}>
      <div
        id='scroll'
        className={`w-100 h-100 overflow-hidden ${scroll ? 'scrolling' : 'not-scrolling'}`}
        style={{
          position: 'absolute',
          backgroundImage: `url(${isMobile ? skyMobile : sky})`,
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
        <div className={`landing-content w-100 ${blur ? 'blur' : ''}`}>
          <h3 className='tc fw7 mt0 author'>
            FEDERICA FRAGAPANE <span className='lighter-weight'>for</span> GOOGLE NEWS LAB
        </h3>
          <h1 className='tc fw7 mt2 title'>
            The Shape of Dreams
        </h1>
          <div className='ph4 tc subtitle'>
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
                className={`${blur ? 'blur' : ''}`}
              />
            </div>
            <div className='tc fw3 mt4 call-to-action'>CLICK ON THE FLOWER TO START EXPLORING</div>
          </div>
        </div>

      </div>
    </React.Suspense>
  );
};

export default Landing;
