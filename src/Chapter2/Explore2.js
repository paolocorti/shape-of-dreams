import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import BluePetals from '../BluePetals';
import categories from '../data/categories.json';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import { years } from '../constants';

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
  const selectedCategories =
    groupedByYearAndCountry[selectedLanguageIndex][selectedYearIndex];

  return (
    <div className='explore2'>
      <div className='w-100 h-100 pa2 relative'>
        <div className='w-100 ph4' style={{ height: '175px' }}>
          {/* <h4 className='tl fw6 mv0'>Chapter 2</h4> */}
          <h1 className='tl tc-ns fw5 mv0' style={{ fontSize: '21px' }}>
            Dreams subjects grouped by category
          </h1>
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
        <div
          className='w-100 flex flex-column relative tc'
          style={{ height: 'calc(100% - 175px)' }}
        >
          <div
            className='flex flex-column justify-center items-center'
            style={{ height: '70%' }}
          >
            <BluePetals categories={selectedCategories} />
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

export default Explore2;
