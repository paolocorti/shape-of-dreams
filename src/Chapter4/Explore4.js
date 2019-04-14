import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import categories from '../data/categories.json';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import Network from '../Network';
import { years } from '../constants';

const Explore4 = ({ history }) => {
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
    <div className='explore4'>
      <div className='w-100 h-100 relative'>
        <div className='w-100 ph4' style={{ height: '25% ' }}>
          <h4 className='tl fw6 mv0'>Chapter 4</h4>
          <h1 className='tl fw7 mv0 f3'>Networks of dreams</h1>
          <div className='tj raleway mt3' style={{ fontSize: '14px' }}>
          SELECT THE YEAR TO EXPLORE THE NETWORKS, TAP ON THE LANGUAGES TO SEE THE CONNECTING DREAMS
          </div>
          <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          />
        </div>
        <div className='w-100 flex flex-column mt0' style={{ height: '75% ' }}>
          <Network />
        </div>
      </div>
    </div>
  );
};

export default Explore4;
