import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import categories from '../data/categories.json';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import Network from '../Network';

const Explore1 = ({ history }) => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  const onSelectLanguage = index => {
    setSelectedLanguageIndex(index);
  };

  const onSelectYear = index => {
    setSelectedYearIndex(index);
  };

  const goToChapter2 = () => {
    history.push(`/chapter2`);
  };

  const groupedByCountry = values(groupBy(categories, 'language'));
  const groupedByCountryKeys = Object.keys(groupBy(categories, 'language'));
  const groupedByYearAndCountry = groupedByCountry.map(val => {
    return values(groupBy(val, 'year'));
  });
  const years = [2016, 2018];
  const selectedCategories =
    groupedByYearAndCountry[selectedLanguageIndex][selectedYearIndex];

  return (
    <div className='explore4'>
      <div className='w-100 h-100 pa2 relative'>
        <div className='w-100 pa3' style={{ height: '30% ' }}>
          <h2 className='tl fw6 f5 mv0'>Chapter 4</h2>
          <h1 className='tl fw7 mv0 f3'>The Dreams that Connect Us</h1>
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
        <div className='w-100 flex flex-column mt4' style={{ height: '70% ' }}>
          <Network />
        </div>
      </div>
    </div>
  );
};

export default Explore1;
