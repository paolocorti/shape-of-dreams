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
      <div className='w-100 h-100 pa2 relative'>
        <div className='w-100 ph4' style={{ height: '135px' }}>
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
          className='w-100 flex flex-column relative tc pt3'
          style={{ height: 'calc(100% - 135px)' }}
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
            className='flex flex-column relative justify-center items-center ph4'
            style={{ height: '30%' }}
          >
            <div
              className='tc sourcesanspro mt2'
              style={{ fontSize: '11px', lineHeight: '12px', height: '30%' }}
            >
              SELECT A LANGUAGE AND A YEAR. SIZE OF THE PETALS = NUMBER OF
              DREAMS IN THE CATEGORY
            </div>
            <div
              className='raleway mt3 fw7'
              style={{
                fontSize: '18px',
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
