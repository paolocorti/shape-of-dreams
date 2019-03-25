import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import { groupBy, values } from 'lodash';
import BluePetals from '../BluePetals';
import categories from '../data/categories.json';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';

const Explore2 = ({ history }) => {
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
    <div className='explore2'>
      <div className='w-100 h-100 pa2 relative'>
        <div className='w-100 pa3' style={{ height: '30% ' }}>
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
          <BluePetals categories={selectedCategories} />
        </div>
      </div>
    </div>
  );
};

export default Explore2;
