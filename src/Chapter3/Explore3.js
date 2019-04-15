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

const Explore3 = ({ history }) => {
  const yearData = interestOverTime.filter(d =>
    d.formattedTime.includes('2018')
  );

  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

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

  return (
    <div className='explore3'>
      <div className='w-100 h-100 flex flex-column justify-center relative'>
        <div className='w-100 ph4' style={{ height: '250px' }}>
          <h4 className='tl fw6 mv0'>Chapter 3</h4>
          <h1 className='tl fw7 mv0 f3'>
            Looking for dreams’ subjects over time
          </h1>
          <div className='tj raleway mt3' style={{ fontSize: '14px' }}>
            SELECT THE DREAMS’ SUBJECTS TO EXPLORE THE INTEREST OVER TIME
          </div>
          {/* <LanguageSelector
            languages={groupedByCountryKeys}
            onSelect={onSelectLanguage}
            selected={selectedLanguageIndex}
          /> */}
          {/* <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          /> */}
        </div>
        <div
          className='relative flex flex-column items-center'
          style={{ height: 'calc(100% - 250px)' }}
        >
          <Trend data={interestOverTime} name={'Dreaming about Tornadoes'} />
          {/* <GaussianTrend data={yearData} dataKey={'macro_1'} /> */}
        </div>
      </div>
    </div>
  );
};

export default Explore3;
