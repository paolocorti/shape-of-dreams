import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import { groupBy } from 'lodash';
import Petals from './Petals';
import topics from './data/topics.json';
import './Explore.scss';
import LanguageSelector from './LanguageSelector';
import YearsSelector from './YearsSelector';

const Explore1 = ({ history }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  const onSwipeRight = () => {
    setSelectedIndex(
      selectedIndex < selectedTopics.length - 1 ? selectedIndex + 1 : 0
    );
  };

  const onSwipeLeft = () => {
    setSelectedIndex(
      selectedIndex > 0 ? selectedIndex - 1 : selectedTopics.length - 1
    );
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
  const groupedByCountryValues = Object.values(groupedByCountry);
  const groupedByCountryKeys = Object.keys(groupedByCountry);
  const years = [
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018
  ];

  const groupedByYearAndCountry = groupedByCountryValues.map(values => {
    return Object.values(groupBy(values, 'year'));
  });

  const languageIndex = groupedByCountryKeys[selectedLanguageIndex];

  const selectedTopicsByLanguage =
    groupedByYearAndCountry[selectedLanguageIndex] || [];

  const selectedTopics = selectedTopicsByLanguage.filter(v => {
    return v[0].year === years[selectedYearIndex];
  });

  const topic = (selectedTopics[0] && selectedTopics[0][selectedIndex]) || {};

  console.log(topic);

  return (
    <div className='explore1 h-100'>
      <div className='w-100 flex flex-column justify-center pa2'>
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
        {topic.value ? (
          <Swipe onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight}>
            <Petals
              value={topic.value}
              name={topic.subject}
              language={topic.language}
              year={topic.year}
            />
          </Swipe>
        ) : (
          <div
            className='w-100 flex justify-center items-center pa4'
            style={{ flex: 1, height: '400px' }}
          >
            NO DATA AVAILABLE
          </div>
        )}

        <div
          className='w-100 flex justify-center items-center pa4'
          onClick={() => goToChapter1()}
          style={{ flex: 1 }}
        >
          <div className=''>READ CHAPTER 1</div>
        </div>
      </div>
    </div>
  );
};

export default Explore1;
