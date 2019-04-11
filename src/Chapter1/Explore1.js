import React, { useState } from 'react';
import { values, groupBy } from 'lodash';
import Petals from '../Petals';
import topics from '../data/topics.json';
import '../Explore.scss';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import noData from './no-data.svg';
import { years } from '../constants';

const Explore1 = ({ history }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

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

  const topic = (selectedTopics[0] && selectedTopics[0][selectedIndex]) || {};

  return (
    <div className='explore1'>
      <div className='w-100 h-100 relative'>
        <div className='w-100 ph4' style={{ height: '40% ' }}>
          <h2 className='tl fw6 f5 mv0'>Chapter 1</h2>
          <h1 className='tl fw7 mv0 f3'>The Shapes of our Dreams</h1>
          <div className='tj raleway mt3' style={{ fontSize: '14px' }}>
            SELECT THE LANGUAGE AND THE YEAR TO EXPLORE THE CATEGORIES OF DREAMS
          </div>
          <LanguageSelector
            languages={groupedByCountryKeys}
            onSelect={onSelectLanguage}
            selected={selectedLanguageIndex}
          />
          <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          />
        </div>
        <div className='w-100 relative tc' style={{ height: '60% ' }}>
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
          {selectedTopics.length > 0 && (
            <div className='left-tap' onClick={() => onTapLeft()}>
              <img src={'/images/tap.svg'} alt='Tap icon' width={35} />
            </div>
          )}
          {selectedTopics.length > 0 && (
            <div className='right-tap' onClick={() => onTapRight()}>
              <img src={'/images/tap.svg'} alt='Tap icon' width={35} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore1;
