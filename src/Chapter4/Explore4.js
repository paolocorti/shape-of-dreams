import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import { isMobile } from 'react-device-detect';
import categories from '../data/categories.json';
import YearsSelector from '../components/YearsSelector';
import YearsSelectorMobile from '../components/YearsSelectorMobile';
import Network from '../Network/Network_1';
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
      {
        !isMobile && (activeIndex === 4) &&
        (
          <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          />
        )
      }
      {/* <div className='w-100 h-100 relative'>
        <div className='w-100 ph4' style={{ height: '80px' }}>
          <h1 className='tl tc-ns fw5 mv0' style={{ fontSize: '21px' }}>
            Networks of dreams{' '}
          </h1>
          <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          />
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
      </div> */}
      <div className='w-100 h-100 flex flex-column justify-center items-center relative'>
        <div
          className='w-100 ph4 flex flex-column justify-center items-center ios-fix'
          style={{ height: '125px' }}
        >
          {/* <h4 className='tl fw6 mv0'>Chapter 3</h4> */}
          <h1 className='tc fw5 mv0' style={{ fontSize: '21px' }}>
            Networks of dreams
          </h1>
          {
            isMobile &&
            (
              <YearsSelectorMobile
                years={years}
                onSelect={onSelectYear}
                selected={selectedYearIndex}
              />
            )
          }
        </div>
        <div
          className='w-100 flex flex-column relative tc ios-fix'
          style={{ height: 'calc(100% - 125px)' }}
        >
          <div
            className='flex flex-column justify-center items-center'
            style={{ height: '70%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '0 auto' }}
          >
            <Network />
          </div>
          <div
            className='flex flex-column relative justify-start items-center ph4 mt2'
            style={{ height: '30%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '45px auto' }}
          >
            <div
              className='tc raleway mt2'
              style={{ fontSize: isMobile ? '11px' : '16px', lineHeight: isMobile ? '13px' : '20px' }}
            >
              Select a language and a year. The number of petals is equal to the
           increase in search interest for a dream in comparison to the
           previous year. The dreams shown are the ones that increased the most
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

export default Explore4;
