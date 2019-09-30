import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import interestOverTime from '../data/interestOverTime.json';
import howtoread3 from './images/cap3-leg-desk.png';
import howtoreadMobile3 from './images/cap3-leg-mob.png';
import arrowUp from '../components/images/arrow-up.svg';
import arrowDown from '../components/images/arrow-down.svg';
import close from '../components/images/close.svg';
import closeWhite from '../components/images/close-white.svg';
import swipeHand from '../components/images/swipe-hand.svg';
import Trend from '../Trend';
import categories from '../data/categories.json';
import TopicSelector from '../components/TopicSelector.js';
import { isIOS } from 'react-device-detect';
import { isMobileWithTablet } from '../constants';
import NavigationBar from '../components/NavigationBar';

const Explore3 = ({ history, activeIndex }) => {

  const [howToRead, setHowToRead] = useState(false);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [note, setNote] = useState(null);

  const toggleNote = text => {
    if (note) {
      setNote(null);
    } else {
      setNote(text);
    }
  };

  const toggleHowToRead = () => {
    setHowToRead(!howToRead);
  };


  const activateNote = text => {
    setNote(text);
  }

  const deactivateNote = text => {
    setNote(null);
  }

  const onSelectYear = index => {
    setSelectedYearIndex(index);
  };

  const groupedByCountry = values(groupBy(categories, 'language'));
  const groupedByCountryKeys = Object.keys(groupBy(categories, 'language'));
  const groupedByYearAndCountry = groupedByCountry.map(val => {
    return values(groupBy(val, 'year'));
  });
  const selectedCategories =
    groupedByYearAndCountry[selectedLanguageIndex][selectedYearIndex];

  const topics = interestOverTime.map(v => v[0].topic);

  const upIndex = () => {
    const newIndex = selectedIndex > 1 ? selectedIndex - 1 : 0
    setSelectedIndex(newIndex)
  }

  const downIndex = () => {
    const newIndex = selectedIndex < topics.length - 1 ? selectedIndex + 1 : topics.length - 1
    setSelectedIndex(newIndex)
  }

  return (
    <div className='explore3' style={{ paddingTop: isMobileWithTablet ? 0 : 20 }}>
      {
        !isMobileWithTablet && (
          <NavigationBar history={history} activeIndex={activeIndex} />
        )
      }
      {
        !isMobileWithTablet && activeIndex === 3 && (
          <div className='noteBox ph4' style={{ right: note ? '0px' : '-12.5%', transition: '.5s right' }}>
            {note}
          </div>
        )
      }
      {isMobileWithTablet && note && (
        <div className='noteBox ph4'>
          <div className='noteBox-close' onClick={() => setNote('')}>
            <img
              src={closeWhite}
              alt='Close menu icon'
              width={20}
            />
          </div>
          {note}
        </div>
      )}
      <div className='w-100 h-100 flex flex-column justify-center items-center relative'>
        <div
          className='how-to-read'
          style={{
            zIndex: howToRead ? 200 : -1,
            background: 'linear-gradient(#d3d7ed, #dbe8ec)',
            top: howToRead ? (isMobileWithTablet ? 0 : 50) : '-100%',
            display: howToRead ? 'block' : 'none',
          }}
        >
          <div className='how-to-read-image'
            style={{
              backgroundImage: `url(${isMobileWithTablet ? howtoreadMobile3 : howtoread3})`,
              backgroundSize: isMobileWithTablet ? 'contain' : 'cover',
            }}>
          </div>

          <div className='read-close' onClick={() => toggleHowToRead()}>
            <img className='pointer svg-hover' src={close} alt='Close menu icon' width={30} />
          </div>
        </div>
        <div
          className={`w-100 ph4 flex flex-column justify-center items-center ${isIOS ? 'ios-fix' : ''}`}
          style={{ height: '125px' }}
        >
          <h1 className='tc fw7 mt3' style={{ fontSize: isMobileWithTablet ? '20px' : '23px' }}>
            Dream meanings: interest over time
          </h1>
          {
            isMobileWithTablet ?
              (
                <div className='relative flex justify-center' style={{ width: '100%' }}>
                  <TopicSelector topics={topics} onSwipe={setSelectedIndex} />
                  <img src={swipeHand} style={{ height: 25, top: 26, right: -4, position: 'absolute' }} />
                </div>

              ) : (
                <div className='relative flex justify-center items-center' style={{ width: '380px' }}>
                  <div className='pointer relative mt3' onClick={upIndex} style={{ width: 30, height: 30, marginRight: '10px', opacity: selectedIndex > 0 ? 1 : 0, pointerEvents: selectedIndex > 0 ? 1 : 0, cursor: selectedIndex > 0 ? 'pointer' : 'default' }}>
                    <img className='icon-circle-arrow pointer' src={arrowUp} alt='Tap icon' width={16} />
                  </div>
                  <TopicSelector topics={topics} onSwipe={setSelectedIndex} selectedIndex={selectedIndex} />
                  <div className='pointer relative mt3' onClick={downIndex} style={{ width: 30, height: 30, marginLeft: '10px', opacity: selectedIndex < topics.length - 1 ? 1 : 0, pointerEvents: selectedIndex < topics.length - 1 ? 1 : 0, cursor: selectedIndex < topics.length - 1 ? 'pointer' : 'default' }}>
                    <img className='icon-circle-arrow pointer' src={arrowDown} alt='Tap icon' width={16} />
                  </div>
                </div>
              )
          }
        </div>
        <div
          className='w-100 flex flex-column relative tc ios-fix'
          style={{ height: 'calc(100% - 125px)' }}
        >
          <div
            className='flex flex-column justify-center items-center'
            style={{ height: '70%', maxWidth: isMobileWithTablet ? '100%' : '75%', margin: isMobileWithTablet ? '' : '0 auto' }}
          >
            <Trend
              data={interestOverTime[selectedIndex]}
              toggleNote={setNote}
              noteActive={note}
              activateNote={activateNote}
              deactivateNote={deactivateNote}
              id={selectedIndex}
              activeIndex={activeIndex === 3}
            />
          </div>
          <div
            className='flex flex-column relative justify-start items-center ph4 mt2'
            style={{ height: '30%', maxWidth: isMobileWithTablet ? '100%' : '75%', margin: isMobileWithTablet ? '' : '45px auto' }}
          >
            <div
              className='tc raleway mt2 fw3'
              style={{ fontSize: isMobileWithTablet ? '11px' : '15px', lineHeight: isMobileWithTablet ? '13px' : '20px' }}
            >
              {
                isMobileWithTablet ?
                  (
                    'Swipe over the box to change the dream.'
                  ) : (
                    'Click on the arrows or use the keyboard arrows to change the dream.'
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
            {!isMobileWithTablet && (<div
              className='raleway mt3 fw7 pointer link'
              style={{
                fontSize: '14px',
                color: '#43449a',
                letterSpacing: '1px'
              }}
              onClick={() => history.push('/chapter4?section=read')}
            >
              READ CHAPTER 4
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore3;
