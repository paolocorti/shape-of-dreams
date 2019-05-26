import React, { useState } from 'react';
import './Landing.scss';
import landing from './petals-landing.svg';
import sky from './landing_sky_desktop.png';

const Landing = ({ history }) => {
  const [blur, setBlur] = useState(false);
  const [scroll, setScroll] = useState(false);

  const goToChapter1 = () => {
    setScroll(true);
    setTimeout(() => {
      setBlur(true);
    }, 500);
    setTimeout(() => {
      history.push(`/chapter1?section=read`);
    }, 1500);
  };

  const pathname = '/chapter1';

  return (
    <div
      id='scroll'
      className={`w-100 h-100 overflow-hidden ${scroll ? 'scrolling' : 'not-scrolling'}`}
      style={{
        position: 'absolute',
        backgroundImage: `url(${sky})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className='landing-header w-100 tc pa4 pt5' style={{ margin: '0 auto', maxWidth: '75%' }}>
        <img
          src={landing}
          height='100%'
          alt='chapter 1 icon'
          width={220}
          className={`${blur ? 'blur' : ''}`}
        />
      </div>
      <div className={`landing-content w-100 ${blur ? 'blur' : ''}`} style={{ margin: '0 auto', maxWidth: '75%', color: 'white' }}>
        <h1 className='tc fw7 mt0 title'>
          THE MEANING <br /> OF DREAMS
        </h1>
        <div className='ph4 tc subtitle'>
          A visual exploration on Google searches for the interpretation of
          dreams
        </div>
      </div>
      <div className='landing-footer w-100 tc'>
        <img className='pointer absolute pulse' onClick={goToChapter1} src={'images/down-arrow-white.svg'} width={35} style={{ top: '0px' }} />
      </div>
    </div>
  );
};

export default Landing;
