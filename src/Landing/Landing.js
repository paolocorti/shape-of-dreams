import React, { useState, Suspense } from 'react';
import './Landing.scss';
import Loader from '../components/Loader';
import landingIcon from './landing-flower.svg';
import sky from './landing-desktop.svg';
import skyMobile from './landing-mobile.svg';
import { isMobile } from 'react-device-detect';
import { isMobileWithTablet } from '../constants';
import { motion } from 'framer-motion';

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
    <Suspense fallback={<Loader top={'0px'} />}>
      <div
        id='scroll'
        className={`w-100 h-100 overflow-hidden ${
          scroll ? 'scrolling' : 'not-scrolling'
        }`}
        style={{
          position: 'absolute',
          backgroundClip: '#2a2c60',
          backgroundImage: `url(${isMobileWithTablet ? skyMobile : sky})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div
          className={`landing-content w-100 ${fadeOut ? 'fadeOut' : ''} ${
            up ? 'up' : ''
          }`}
        >
          <motion.div
            animate={{ y: 0 }}
            transition={{ from: -500, duration: 1, type: 'tween' }}
          >
            <h3 className='tc fw7 mt0 author landing-header'>
              FEDERICA FRAGAPANE <span className='lighter-weight'>for</span>{' '}
              GOOGLE NEWS LAB
            </h3>
          </motion.div>
          {isMobileWithTablet ? (
            <motion.div
              animate={{ y: 0 }}
              transition={{
                from: -600,
                duration: 1.2,
                type: 'tween'
              }}
            >
              <h1 className='tc fw5 mt2 mb2 title'>
                The Shape <br></br> of Dreams
              </h1>
            </motion.div>
          ) : (
            <motion.div
              animate={{ y: 0 }}
              transition={{
                from: -600,
                duration: 1.2,
                type: 'tween'
              }}
            >
              <h1 className='tc fw5 mt2 mb2 title'>The Shape of Dreams</h1>
            </motion.div>
          )}
          <motion.div
            animate={{ y: 0 }}
            transition={{ from: -700, duration: 1.3, type: 'tween' }}
          >
            <div className='ph4 tc mt4 subtitle '>
              A visual exploration of Google searches for the interpretation of
              dreams
            </div>
          </motion.div>
          <motion.div
            animate={{ y: 0 }}
            transition={{ from: -700, duration: 1.3, type: 'tween' }}
          >
            <div className='tc mv4 flex flex-column items-center'>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 2 }}
              >
                <div className='landing-icon-container' onClick={goToChapter1}>
                  <img
                    src={landingIcon}
                    height='100%'
                    alt='landing flower icon'
                    width={'60%'}
                    className={`${fadeOut ? 'fadeOut' : ''}`}
                  />
                </div>
              </motion.div>
              <div className='tc fw5 mt4 call-to-action'>
                CLICK ON THE FLOWER TO START EXPLORING
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {!isMobile && (
        <svg
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: 'absolute', pointerEvents: 'none' }}
        >
          <motion.circle
            r={2}
            fill={'#ffffff'}
            cx={100}
            cy={100}
            opacity={0}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 4,
              loop: Infinity,
              ease: 'easeInOut',
              repeatDelay: 5
            }}
          />
          <motion.circle
            r={2}
            fill={'#ffffff'}
            cx={window.innerWidth - 200}
            cy={window.innerHeight - 350}
            opacity={0}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 4,
              loop: Infinity,
              ease: 'easeInOut',
              repeatDelay: 5,
              delay: 3
            }}
          />
          <motion.circle
            r={2}
            fill={'#ffffff'}
            cx={340}
            cy={window.innerHeight - 800}
            opacity={0}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 4,
              loop: Infinity,
              ease: 'easeInOut',
              repeatDelay: 5,
              delay: 1
            }}
          />
          <motion.circle
            r={2}
            fill={'#ffffff'}
            cx={window.innerWidth - 400}
            cy={window.innerHeight - 750}
            opacity={0}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 4,
              loop: Infinity,
              ease: 'easeInOut',
              repeatDelay: 4,
              delay: 2
            }}
          />
          <motion.circle
            r={2}
            fill={'#ffffff'}
            cx={200}
            cy={window.innerHeight - 350}
            opacity={0}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 4,
              loop: Infinity,
              ease: 'easeInOut',
              repeatDelay: 3,
              delay: 3
            }}
          />
        </svg>
      )}
    </Suspense>
  );
};

export default Landing;
