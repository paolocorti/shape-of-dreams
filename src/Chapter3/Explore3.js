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
      <div className='w-100 flex flex-column justify-center relative'>
        <div className='w-100 ph4' style={{ height: '40% ' }}>
          <h2 className='tl fw6 f5 mv0'>Chapter 4</h2>
          <h1 className='tl fw7 mv0 f3'>The Dreams that Connect Us</h1>
          <div className='tj raleway mt3' style={{ fontSize: '14px' }}>
            SELECT THE YEAR TO EXPLORE THE CATEGORIES OF DREAMS
          </div>
          {/* <LanguageSelector
            languages={groupedByCountryKeys}
            onSelect={onSelectLanguage}
            selected={selectedLanguageIndex}
          /> */}
          <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          />
        </div>
        <div
          className='relative flex flex-column items-center'
          style={{ height: '60%' }}
        >
          <Trend data={interestOverTime} name={'Dreaming about Tornadoes'} />
          {/* <GaussianTrend data={yearData} dataKey={'macro_1'} /> */}
        </div>
      </div>
    </div>
  );
};

export default Explore3;
