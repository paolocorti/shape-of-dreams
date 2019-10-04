import React, { useState, useEffect } from 'react';
import { isIOS } from 'react-device-detect';
import { isMobileWithTablet } from '../constants';
import YearsSelector from '../components/YearsSelector';
import YearsSelectorMobile from '../components/YearsSelectorMobile';
import howtoread4 from './images/cap4-leg-desk.png';
import howtoreadMobile4 from './images/cap4-leg-mob.gif';
import close from '../components/images/close.svg';
import Network1 from '../Network/Network_1';
import Network2 from '../Network/Network_2';
import Network3 from '../Network/Network_3';
import Network4 from '../Network/Network_4';
import Network5 from '../Network/Network_5';
import Network6 from '../Network/Network_6';
import Network7 from '../Network/Network_7';
import NavigationBar from '../components/NavigationBar';
import Network8 from '../Network/Network_8';
import Network9 from '../Network/Network_9';
import Network10 from '../Network/Network_10';
import Network11 from '../Network/Network_11';
import { years } from '../constants';

const Explore4 = ({ history, activeIndex }) => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(10);
  const [howToRead, setHowToRead] = useState(false);
  const [show, setShow] = useState(false);

  console.log('activeIndex', activeIndex)

  useEffect(() => {
    setShow(false)
    setTimeout(() => {
      if (activeIndex === 4) {
        setShow(true)
      }
    }, 1000)
  }, [activeIndex])

  const onSelectYear = index => {
    setSelectedYearIndex(index);
  };

  const toggleHowToRead = () => {
    setHowToRead(!howToRead);
  };

  return (
    <div className='explore4'>
      {!isMobileWithTablet && (
        <NavigationBar history={history} activeIndex={activeIndex} />
      )}
      {!isMobileWithTablet && activeIndex === 4 && (
        <YearsSelector
          years={years}
          onSelect={onSelectYear}
          selected={selectedYearIndex}
        />
      )}
      <div className='w-100 h-100 flex flex-column justify-center items-center relative'>
        <div
          className='how-to-read'
          style={{
            zIndex: howToRead ? 200 : -1,
            background: 'linear-gradient(#dbe8ec, #efe3df)',
            top: howToRead ? (isMobileWithTablet ? 0 : 50) : '-100%',
            display: howToRead ? 'block' : 'none'
          }}
        >
          <div
            className='how-to-read-image'
            style={{
              backgroundImage: `url(${
                isMobileWithTablet ? howtoreadMobile4 : howtoread4
                })`,
              backgroundSize: 'contain',
            }}
          />

          <div className='read-close' onClick={() => toggleHowToRead()}>
            <img
              className='pointer svg-hover'
              src={close}
              alt='Close menu icon'
              width={30}
            />
          </div>
        </div>
        <div
          className='w-100 ph4 flex flex-column justify-center items-center ios-fix'
          style={{ height: '100px' }}
        >
          {/* <h4 className='tl fw6 mv0'>Chapter 3</h4> */}
          {isMobileWithTablet && (
            <YearsSelectorMobile
              years={years}
              onSelect={onSelectYear}
              selected={selectedYearIndex}
            />
          )}
          <h1 className='tc fw7 mt4' style={{ fontSize: isMobileWithTablet ? '20px' : '23px' }}>
            Networks of dreams
          </h1>
        </div>
        <div
          className={`w-100 mt3 flex flex-column relative tc ${isIOS ? 'ios-fix' : ''}`}
          style={{ height: 'calc(100% - 100px)' }}
        >
          <div
            className='flex flex-column justify-center items-center'
            style={{
              height: '75%',
              maxWidth: isMobileWithTablet ? '100%' : '75%',
              margin: isMobileWithTablet ? '' : '0 auto'
            }}
          >
            {selectedYearIndex === 0 && (
              <Network1 year={years[selectedYearIndex]} />
            )}
            {selectedYearIndex === 1 && (
              <Network2 year={years[selectedYearIndex]} />
            )}
            {selectedYearIndex === 2 && (
              <Network3 year={years[selectedYearIndex]} />
            )}
            {selectedYearIndex === 3 && (
              <Network4 year={years[selectedYearIndex]} />
            )}
            {selectedYearIndex === 4 && (
              <Network5 year={years[selectedYearIndex]} />
            )}
            {selectedYearIndex === 5 && (
              <Network6 year={years[selectedYearIndex]} />
            )}
            {selectedYearIndex === 6 && (
              <Network7 year={years[selectedYearIndex]} />
            )}
            {selectedYearIndex === 7 && (
              <Network8 year={years[selectedYearIndex]} />
            )}
            {selectedYearIndex === 8 && (
              <Network9 year={years[selectedYearIndex]} />
            )}
            {selectedYearIndex === 9 && (
              <Network10 year={years[selectedYearIndex]} />
            )}
            {selectedYearIndex === 10 && (
              <Network11 show={show} year={years[selectedYearIndex]} />
            )}
          </div>
          <div
            className='flex flex-column relative justify-start items-center ph4 mt0'
            style={{
              height: '25%',
              maxWidth: isMobileWithTablet ? '100%' : '75%',
              margin: isMobileWithTablet ? '' : '45px auto'
            }}
          >
            <div
              className='tc raleway fw3'
              style={{
                fontSize: isMobileWithTablet ? '11px' : '15px',
                lineHeight: isMobileWithTablet ? '13px' : '20px',
                maxWidth: isMobileWithTablet ? '' : '600px',
              }}
            >
              {'Select a language and a year. The lines connect the languages that share the same dreams. '}
              {
                !isMobileWithTablet &&
                (
                  'Go on mouse over or click on one language to read the dreams in common with the other ones'
                )
              }
            </div>
            <div
              className='raleway mt3 fw7 pointer link2'
              style={{
                fontSize: '14px',
                color: '#d88383',
                letterSpacing: '1px'
              }}
              onClick={toggleHowToRead}
            >
              LEGEND
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore4;
