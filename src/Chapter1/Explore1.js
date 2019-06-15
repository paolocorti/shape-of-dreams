import React, { useState } from 'react';
import { values, groupBy } from 'lodash';
import Petals from '../Petals';
import topics from '../data/topics.json';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import YearsSelectorMobile from '../components/YearsSelectorMobile';
import close from '../components/images/close.svg';
import arrowLeft from '../components/images/arrow-left.svg';
import arrowRight from '../components/images/arrow-right.svg';
import { years } from '../constants';
import howtoread1 from './cap1-leg-desk.png';
import howtoreadMobile1 from './cap1-leg-mob.png';
import { isMobile, isIOS } from 'react-device-detect';
import NavigationBar from '../components/NavigationBar';

const Explore1 = ({ history, activeIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [howToRead, setHowToRead] = useState(false);

  const toggleHowToRead = () => {
    setHowToRead(!howToRead);
  };

  const onTapRight = () => {
    const newIndex =
      selectedIndex < selectedTopics[0].length - 1 ? selectedIndex + 1 : 0;
    setSelectedIndex(newIndex);
  };

  const onTapRightDesktop = () => {
    const newIndex =
      selectedIndex < selectedTopics[0].length - 4 ? selectedIndex + 4 : 0;
    setSelectedIndex(newIndex);
  };

  const onTapLeft = () => {
    const newIndex =
      selectedIndex > 0 ? selectedIndex - 1 : selectedTopics[0].length - 1;
    setSelectedIndex(newIndex);
  };

  const onTapLeftDesktop = () => {
    const newIndex =
      selectedIndex > 0 ? selectedIndex - 4 : selectedTopics[0].length - 4;
    setSelectedIndex(newIndex);
  };

  const onSelectLanguage = index => {
    setSelectedIndex(0);
    setSelectedLanguageIndex(index);
  };

  const onSelectYear = index => {
    setSelectedIndex(0);
    setSelectedYearIndex(index);
  };

  const goToChapter1 = () => {
    history.push(`/chapter1`);
  };

  const groupedByCountry = groupBy(topics, 'language');
  const groupedByCountryValues = values(groupedByCountry);
  const groupedByCountryKeys = Object.keys(groupedByCountry);

  const groupedByYearAndCountry = groupedByCountryValues.map(val => {
    return values(groupBy(val, 'year'));
  });

  const languageIndex = groupedByCountryKeys[selectedLanguageIndex];

  const selectedTopicsByLanguage =
    groupedByYearAndCountry[selectedLanguageIndex] || [];

  const selectedTopics = selectedTopicsByLanguage.filter(v => {
    return v[0].year === years[selectedYearIndex];
  });

  let selectedIndex1, selectedIndex2, selectedIndex3;
  let topic, topic1, topic2, topic3;

  if (selectedTopics.length > 0) {

    if (selectedIndex <= selectedTopics[0].length - 4) {
      selectedIndex1 = selectedIndex + 1
      selectedIndex2 = selectedIndex + 2
      selectedIndex3 = selectedIndex + 3
    } else if (selectedIndex === selectedTopics[0].length - 3) {
      selectedIndex1 = selectedIndex + 1
      selectedIndex2 = selectedIndex + 2
      selectedIndex3 = 0
    } else if (selectedIndex === selectedTopics[0].length - 2) {
      selectedIndex1 = selectedIndex + 1
      selectedIndex2 = 0
      selectedIndex3 = 1
    } else if (selectedIndex === selectedTopics[0].length - 1) {
      selectedIndex1 = 0
      selectedIndex2 = 1
      selectedIndex3 = 2
    }


    if (selectedTopics[0].length > 0) {
      topic = (selectedTopics[0] && selectedTopics[0][selectedIndex]) || {};
    }
    if (selectedTopics[0].length > 1) {
      topic1 = (selectedTopics[0] && selectedTopics[0][selectedIndex1]) || {};
    }
    if (selectedTopics[0].length > 2) {
      topic2 = (selectedTopics[0] && selectedTopics[0][selectedIndex2]) || {};
    }
    if (selectedTopics[0].length > 3) {
      topic3 = (selectedTopics[0] && selectedTopics[0][selectedIndex3]) || {};
    }
  }

  return (
    <div className='explore1' style={{ paddingTop: isMobile ? 0 : 15 }}>
      {
        !isMobile && (activeIndex === 1) &&
        (
          <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          />
        )
      }
      {
        !isMobile && (
          <NavigationBar history={history} activeIndex={activeIndex} />
        )
      }
      <div className='w-100 h-100 relative'>

        <div
          className='how-to-read'
          style={{
            zIndex: howToRead ? 1000 : -1,
            background: 'linear-gradient(#e1eaef, #e4f3ec)',

            top: howToRead ? (isMobile ? 0 : 50) : '-100%',
            display: howToRead ? 'block' : 'none',
          }}
        >
          <div
            className='how-to-read-image'
            style={{
              backgroundImage: `url(${isMobile ? howtoreadMobile1 : howtoread1})`,
            }}>
          </div>

          <div className='read-close' onClick={() => toggleHowToRead()}>
            <img className='pointer' src={close} alt='Close menu icon' width={30} />
          </div>
        </div>
        <div className='w-100 ph4 ios-fix' style={{ height: '125px' }}>
          {/* <h2 className='tl fw6 f5 mv0'>Chapter 1</h2> */}

          <LanguageSelector
            languages={groupedByCountryKeys}
            onSelect={onSelectLanguage}
            selected={selectedLanguageIndex}
          />
          {
            isMobile &&
            (
              <YearsSelectorMobile
                years={years}
                onSelect={onSelectYear}
                selected={selectedYearIndex}
              />
            )
          }
          <h1 className='tc fw7 mt4' style={{ fontSize: '20px' }}>
            Looking for dreams
          </h1>
        </div>
        <div
          className={`w-100 tc pt1 ${isIOS ? 'ios-fix' : ''}`}
          style={{ height: 'calc(100% - 125px)', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '0 auto' }}
        >
          {
            isMobile ? (
              <div
                className='flex flex-column relative justify-center'
                style={{ height: '65%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '0 auto' }}
              >
                {topic && topic.value ? (
                  <Petals
                    value={topic.value}
                    name={topic.subject}
                    language={topic.language}
                    year={topic.year}
                    index={selectedIndex}
                  />
                ) : (
                    <Petals
                      value={700}
                      name={'No Data'}
                      language={groupedByCountryKeys[selectedLanguageIndex]}
                      year={years[selectedYearIndex]}
                      index={0}
                      nodata={true}
                    />
                  )}
                {selectedTopics.length > 0 && selectedIndex > 0 && (
                  <div className='left-tap pointer' onClick={() => onTapLeft()}>
                    <div className='icon-circle'></div>
                    <img className='icon-circle-arrow' src={arrowLeft} alt='Tap icon' width={10} />
                  </div>
                )}
                {selectedTopics.length > 0 && (
                  <div className='right-tap pointer' onClick={() => onTapRight()}>
                    <div className='icon-circle'></div>
                    <img className='icon-circle-arrow' src={arrowRight} alt='Tap icon' width={10} />
                  </div>
                )}
              </div>
            ) : (
                <div
                  className='flex relative justify-center items-center'
                  style={{ height: '65%', margin: '0 auto' }}
                >
                  {topic && topic.value && (
                    <div
                      className='flex flex-column relative justify-center'
                      style={{ height: '65%', width: '25%', margin: '0 auto' }}
                    >
                      <Petals
                        value={topic.value}
                        name={topic.subject}
                        language={topic.language}
                        year={topic.year}
                        index={selectedIndex}
                      />
                    </div>
                  )}
                  {topic1 && topic1.value && (
                    <div
                      className='flex flex-column relative justify-center'
                      style={{ height: '65%', width: '25%', margin: '0 auto' }}
                    >
                      <Petals
                        value={topic1.value}
                        name={topic1.subject}
                        language={topic1.language}
                        year={topic1.year}
                        index={selectedIndex + 1}
                      />
                    </div>
                  )}
                  {topic2 && topic2.value && (
                    <div
                      className='flex flex-column relative justify-center'
                      style={{ height: '65%', width: '25%', margin: '0 auto' }}
                    >
                      <Petals
                        value={topic2.value}
                        name={topic2.subject}
                        language={topic2.language}
                        year={topic2.year}
                        index={selectedIndex + 2}
                      />
                    </div>
                  )}
                  {topic3 && topic3.value && (
                    <div
                      className='flex flex-column relative justify-center'
                      style={{ height: '65%', width: '25%', margin: '0 auto' }}
                    >
                      <Petals
                        value={topic3.value}
                        name={topic3.subject}
                        language={topic3.language}
                        year={topic3.year}
                        index={selectedIndex + 3}
                      />
                    </div>
                  )}
                  {
                    selectedTopics.length === 0 &&
                    (
                      <div
                        className='w-100 flex flex-column justify-center'
                        style={{ flex: 1, height: '65%', width: '25%' }}
                      >
                        <Petals
                          value={700}
                          name={'No Data'}
                          language={groupedByCountryKeys[selectedLanguageIndex]}
                          year={years[selectedYearIndex]}
                          index={0}
                          nodata={true}
                        />
                      </div>
                    )
                  }
                  {selectedTopics && selectedTopics[0] && selectedTopics[0].length > 0 && selectedIndex > 0 && (
                    <div className='left-tap pointer' onClick={() => onTapLeft()}>
                      <div className='icon-circle'></div>
                      <img className='icon-circle-arrow' src={arrowLeft} alt='Tap icon' width={10} />
                    </div>
                  )}
                  {selectedTopics && selectedTopics[0] && selectedTopics[0].length > 3 && (
                    <div className='right-tap pointer' onClick={() => onTapRight()}>
                      <div className='icon-circle'></div>
                      <img className='icon-circle-arrow' src={arrowRight} alt='Tap icon' width={10} />
                    </div>
                  )}
                </div>
              )
          }

          <div
            className='flex flex-column relative justify-start items-center ph4 mt2'
            style={{ height: '35%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '0 auto' }}
          >
            <div
              className='tc raleway fw3'
              style={{ fontSize: isMobile ? '11px' : '15px', lineHeight: isMobile ? '13px' : '20px' }}
            >
              {
                isMobile ?
                  (
                    'Select a language, a year and tap on the arrows. Number of petals = increase in search interest for a dream in comparison to the previous year.'
                  ) : (
                    'Select a language and a year or use the keyboard arrows to navigate the visualization. Click on the arrows to explore the dreams. The number of petals corresponds to an increase in search interest for a dream in comparison to the previous year.'
                  )
              }
            </div>
            <div
              className='raleway mt3 fw7 pointer link'
              style={{
                fontSize: '14px',
                color: '#43449a',
                letterSpacing: '1px'
              }}
              onClick={toggleHowToRead}
            >
              HOW TO READ IT
            </div>
            {!isMobile && (<div
              className='raleway mt3 fw7 pointer link'
              style={{
                fontSize: '14px',
                color: '#43449a',
                letterSpacing: '1px'
              }}
              onClick={() => history.push('/chapter2?section=read')}
            >
              READ CHAPTER 2
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore1;
