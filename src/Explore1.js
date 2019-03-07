import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import { groupBy } from 'lodash';
import Petals from './Petals';
import topics from './data/topics.json';
import './Explore.scss';

const Explore1 = ({ history }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  const onSwipeRight = () => {
    history.push(`/explore2`);
  };

  const onSwipeLeft = () => {
    history.push(`/explore5`);
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
  const selectedTopics =
    groupedByYearAndCountry[selectedLanguageIndex][selectedYearIndex];

  const topic = selectedTopics[selectedIndex];

  return (
    <Swipe
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      style={{ height: '100%' }}
      className='explore1'
    >
      <div className='w-100 flex flex-column pa4'>
        <div className='pa4 tc'>Explore1</div>
        <div className='w-100 flex justify-around pa2'>
          <button
            onClick={() =>
              setSelectedLanguageIndex(
                selectedLanguageIndex > 0
                  ? selectedLanguageIndex - 1
                  : groupedByCountryKeys.length - 1
              )
            }
          >
            PREV
          </button>
          <div>{groupedByCountryKeys[selectedLanguageIndex]} </div>
          <button
            onClick={() =>
              setSelectedLanguageIndex(
                selectedLanguageIndex < groupedByCountryKeys.length
                  ? selectedLanguageIndex + 1
                  : 0
              )
            }
          >
            NEXT
          </button>
        </div>
        <div className='w-100 flex justify-around pa2'>
          <button
            onClick={() =>
              setSelectedYearIndex(
                selectedYearIndex > 0 ? selectedYearIndex - 1 : years.length - 1
              )
            }
          >
            PREV
          </button>
          <div>{years[selectedYearIndex]} </div>
          <button
            onClick={() =>
              setSelectedYearIndex(
                selectedYearIndex < years.length ? selectedYearIndex + 1 : 0
              )
            }
          >
            NEXT
          </button>
        </div>
        <div className='w-100 flex justify-around pa2'>
          <button
            onClick={() =>
              setSelectedIndex(
                selectedIndex > 0
                  ? selectedIndex - 1
                  : selectedTopics.length - 1
              )
            }
          >
            PREV
          </button>
          <button
            onClick={() =>
              setSelectedIndex(
                selectedIndex < selectedTopics.length ? selectedIndex + 1 : 0
              )
            }
          >
            NEXT
          </button>
        </div>
        <Petals
          value={topic.value}
          name={topic.subject}
          language={topic.language}
          year={topic.year}
        />
      </div>

      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToChapter1()}
      >
        <div className=''>READ CHAPTER 1</div>
      </div>
    </Swipe>
  );
};

export default Explore1;
