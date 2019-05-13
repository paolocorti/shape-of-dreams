import React, { useState } from 'react';
import { values, groupBy } from 'lodash';
import Petals from '../Petals';
import topics from '../data/topics.json';
import '../Explore.scss';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import noData from './no-data.svg';
import { years } from '../constants';
import howtoread1 from './how-to-read-1.png';
import { isMobile } from 'react-device-detect';

const Explore1 = ({ history }) => {
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

  const onTapLeft = () => {
    const newIndex =
      selectedIndex > 0 ? selectedIndex - 1 : selectedTopics[0].length - 1;
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

  console.log(selectedTopics);

  const topic = (selectedTopics[0] && selectedTopics[0][selectedIndex]) || {};

  return (
    <div className='explore1' style={{ paddingTop: isMobile ? 0 : 60 }}>
      <div className='w-100 h-100 relative'>
        <div
          className='w-100 fixed'
          style={{
            zIndex: howToRead ? 200 : -1,
            backgroundImage: `url(${howtoread1})`,
            backgroundSize: 'cover',
            top: howToRead ? 0 : '-100%',
            height: '100vh',
            display: howToRead ? 'block' : 'none'
          }}
        >
          <div className='read-close' onClick={() => toggleHowToRead()}>
            <img src={'/images/close.svg'} alt='Close menu icon' width={20} />
          </div>
        </div>
        <div className='w-100 ph4 ios-fix' style={{ height: '125px' }}>
          {/* <h2 className='tl fw6 f5 mv0'>Chapter 1</h2> */}
          <h1 className='tc fw5 mv0' style={{ fontSize: '21px' }}>
            Dreams' subjects by category
          </h1>
          <LanguageSelector
            languages={groupedByCountryKeys}
            onSelect={onSelectLanguage}
            selected={selectedLanguageIndex}
          />
          {
            isMobile &&
            (
              <YearsSelector
                years={years}
                onSelect={onSelectYear}
                selected={selectedYearIndex}
              />
            )
          }
        </div>
        <div
          className='w-100 tc pt1 ios-fix'
          style={{ height: 'calc(100% - 125px)' }}
        >
          {
            !isMobile &&
            (
              <YearsSelector
                years={years}
                onSelect={onSelectYear}
                selected={selectedYearIndex}
              />
            )
          }
          <div
            className='flex flex-column relative justify-center'
            style={{ height: '65%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '0 auto' }}
          >
            {topic.value ? (
              <Petals
                value={topic.value}
                name={topic.subject}
                language={topic.language}
                year={topic.year}
                index={selectedIndex}
              />
            ) : (
              <div
                className='w-100 flex justify-center items-center pa4'
                style={{ flex: 1, height: '400px' }}
              >
                <img src={noData} width={80} alt='No data available' />
              </div>
            )}
            {selectedTopics.length > 0 && selectedIndex > 0 && (
              <div className='left-tap pulse' onClick={() => onTapLeft()}>
                <img src={'/images/tap.svg'} alt='Tap icon' width={35} />
              </div>
            )}
            {selectedTopics.length > 0 && (
              <div className='right-tap pulse' onClick={() => onTapRight()}>
                <img src={'/images/tap.svg'} alt='Tap icon' width={35} />
              </div>
            )}
          </div>
          <div
            className='flex flex-column relative justify-start items-center ph4 mt2'
            style={{ height: '35%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '0 auto' }}
          >
            <div
              className='tc raleway'
              style={{ fontSize: isMobile ? '11px' : '16px', lineHeight: isMobile ? '13px' : '20px' }}
            >
              Select a language, a year and tap on the arrows. number of petals
              = increase in search interest for a dream in comparison to the
              previous year.
            </div>
            <div
              className='raleway mt3 fw7 cursor-pointer'
              style={{
                fontSize: '14px',
                color: '#43449a',
                letterSpacing: '1px'
              }}
              onClick={toggleHowToRead}
            >
              HOW TO READ IT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore1;
