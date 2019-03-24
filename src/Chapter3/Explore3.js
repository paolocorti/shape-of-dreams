import React, { useState } from 'react';
import interestOverTime from '../data/interestOverTime.json';
import '../Explore.scss';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import Trends from '../Trends';
import GaussianChart from '../GaussianChart';

const Explore3 = ({ history }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  // const groupedByCountry = groupBy(topics, 'language');
  // const groupedByCountryValues = Object.values(groupedByCountry);
  // const groupedByCountryKeys = Object.keys(groupedByCountry);
  // const years = [
  //   2008,
  //   2009,
  //   2010,
  //   2011,
  //   2012,
  //   2013,
  //   2014,
  //   2015,
  //   2016,
  //   2017,
  //   2018
  // ];

  // const groupedByYearAndCountry = groupedByCountryValues.map(values => {
  //   return Object.values(groupBy(values, 'year'));
  // });

  // const languageIndex = groupedByCountryKeys[selectedLanguageIndex];

  // const selectedTopicsByLanguage =
  //   groupedByYearAndCountry[selectedLanguageIndex] || [];

  // const selectedTopics = selectedTopicsByLanguage.filter(v => {
  //   return v[0].year === years[selectedYearIndex];
  // });

  // const topic = (selectedTopics[0] && selectedTopics[0][selectedIndex]) || {};

  return (
    <div className='explore1'>
      <div className='w-100 flex flex-column justify-center pa2 relative'>
        <div
          className='w-100'
          style={{ flex: 1, flexShrink: 0, height: '30%' }}
        >
          {/* <LanguageSelector
            languages={groupedByCountryKeys}
            onSelect={onSelectLanguage}
            selected={selectedLanguageIndex}
          />
          <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          /> */}
        </div>
        <div
          className='relative flex flex-column justify-center'
          style={{ flex: 1, flexShrink: 0, height: '70%' }}
        >
          <Trends data={interestOverTime} name={'Dreaming about Tornadoes'} />
          <GaussianChart data={interestOverTime} />
        </div>
      </div>
    </div>
  );
};

export default Explore3;
