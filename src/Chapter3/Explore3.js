import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import interestOverTime from '../data/interestOverTime.json';
import '../Explore.scss';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import Trend from '../Trend';
import categories from '../data/categories.json';
import GaussianTrend from '../GaussianTrend';
import { years } from '../constants';
import TopicSelector from '../components/TopicSelector.js';

const Explore3 = ({ history }) => {
  // const yearData = interestOverTime.filter(d =>
  //   d.formattedTime.includes('2018')
  // );

  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  return (
    <div className='explore3'>
      <div className='w-100 h-100 flex flex-column justify-center relative'>
        <div className='w-100 ph4' style={{ height: '125px' }}>
          {/* <h4 className='tl fw6 mv0'>Chapter 3</h4> */}
          <h1 className='tl tc-ns fw5 mv0' style={{ fontSize: '21px' }}>
            Looking for dreams’ subjects over time
          </h1>
          <TopicSelector topics={topics} onSwipe={setSelectedIndex} />
        </div>
        <div
          className='w-100 flex flex-column relative tc'
          style={{ height: 'calc(100% - 125px)' }}
        >
          <div
            className='flex flex-column justify-center items-center'
            style={{ height: '70%' }}
          >
            <Trend data={interestOverTime[selectedIndex]} />
          </div>
          <div
            className='tj raleway mt3 ph4'
            style={{ fontSize: '2vh', height: '30%' }}
          >
            Select a language and a year. The number of petals is equal to the
            increase in search interest for a dream in comparison to the
            previous year. The dreams shown are the ones that increased the most
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore3;
