import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import BluePetals from '../BluePetals';
import categories from '../data/categories.json';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import { years } from '../constants';
import { languages } from '../constants';

const Explore2 = ({ history }) => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [selectedPetal, setSelectedPetal] = useState(null);

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

  const setSelectedPetalWrapper = index => {
    const newSelectedPetal = selectedPetal === index ? null : index;
    setSelectedPetal(newSelectedPetal);
  };

  return (
    <div className='explore2'>
      <div className='w-100 h-100 relative'>
        <div className='w-100 ph4' style={{ height: '120px' }}>
          {/* <h4 className='tl fw6 mv0'>Chapter 2</h4> */}
          <h1 className='tc fw5 mv0' style={{ fontSize: '21px' }}>
            Dreams subjects by category
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
          className='w-100 flex flex-column relative tc ios-fix'
          style={{ height: 'calc(100% - 120px)' }}
        >
          <div
            className='flex flex-column justify-center items-center'
            style={{ height: '70%' }}
          >
            <BluePetals
              categories={selectedCategories}
              year={years[selectedYearIndex]}
              language={languages[selectedLanguageIndex]}
              setSelectedPetal={setSelectedPetalWrapper}
              selectedPetal={selectedPetal}
            />
          </div>
          <div
            className='flex flex-column relative justify-start items-center ph4 mt2'
            style={{ height: '30%' }}
          >
            <div
              className='tc raleway mt2'
              style={{ fontSize: '11px', lineHeight: '13px' }}
            >
              Select a language and a year. tap on the circle to switch on and
              off the category. size of the petals = number of dreams in the
              category
            </div>
            <div
              className='raleway mt3 fw7'
              style={{
                fontSize: '14px',
                color: '#43449a',
                letterSpacing: '1px'
              }}
            >
              HOW TO READ IT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore2;
