import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import { isMobile } from 'react-device-detect';
import categories from '../data/categories.json';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import Network from '../Network';
import { years } from '../constants';
import NavigationBar from '../components/NavigationBar';

const Explore4 = ({ history, activeIndex }) => {
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
      {
        !isMobile && (
          <NavigationBar history={history} activeIndex={activeIndex} />
        )
      }
      <div className='w-100 h-100 relative'>
        <div className='w-100 ph4' style={{ height: '80px' }}>
          {/* <h4 className='tl fw6 mv0'>Chapter 4</h4> */}
          <h1 className='tl tc-ns fw5 mv0' style={{ fontSize: '21px' }}>
            Networks of dreams{' '}
          </h1>
          {/* <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          /> */}
        </div>

        <div
          className='w-100 flex flex-column relative'
          style={{ height: 'calc(100% - 80px)' }}
        >
          <div
            className='flex flex-column justify-center items-center'
            style={{ height: '80%' }}
          >
            <Network />
          </div>
          <div
            className='tj raleway mt3 ph4'
            style={{ fontSize: '2vh', height: '20%' }}
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

export default Explore4;
