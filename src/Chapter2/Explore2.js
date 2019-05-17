import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import BluePetals from '../BluePetals';
import categories from '../data/categories.json';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import { years } from '../constants';
import { languages } from '../constants';
import { isMobile } from 'react-device-detect';
import { scaleLinear } from 'd3-scale';

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

  
  
  // const selectedCategories = groupedByYearAndCountry.filter(v => {
  //   const valueByYearArray = v.filter(el => {
  //     return el[0].year === years[selectedYearIndex]
  //   })
  //   const valueByYear = valueByYearArray[0] || []

  //   if (valueByYear.length > 0) {
  //     if (valueByYear[0].language === languages[selectedLanguageIndex]) {
  //       console.log('here')
  //       return valueByYear
         
  //     }
  //   } else {
  //     return []
  //   }
    
  // }); 
  
  const valueByYearArray = groupedByYearAndCountry.map(v => {
    return v.filter(el => {
      if (el[0].year === years[selectedYearIndex]) {
        return el
      }
    })
  })

  const valueByCountry = valueByYearArray.filter(v => {
    if (v[0]) {
      if (v[0][0].language === languages[selectedLanguageIndex]) {
        return v[0]
      }
    }
  })

  const setSelectedPetalWrapper = index => {
    const newSelectedPetal = selectedPetal === index ? null : index;
    setSelectedPetal(newSelectedPetal);
  };

  const selectedCategories = valueByCountry[0] ?  valueByCountry[0][0] : []

  return (
    <div className='explore2' style={{ paddingTop: isMobile ? 0 : 60 }}>
      <div className='w-100 h-100 relative'>
        <div className='w-100 ph4 ios-fix' style={{ height: '120px' }}>
          {/* <h4 className='tl fw6 mv0'>Chapter 2</h4> */}
          <h1 className='tc fw5 mv0' style={{ fontSize: '21px' }}>
            Dreams subjects by category
          </h1>
          <LanguageSelector
            languages={groupedByCountryKeys}
            onSelect={onSelectLanguage}
            selected={selectedLanguageIndex}
          />
          {
            isMobile &&
            (
              <YearsSelector
                years={years}
                onSelect={onSelectYear}
                selected={selectedYearIndex}
              />
            )
          }
        </div>
        <div
          className='w-100 flex flex-column relative tc ios-fix'
          style={{ height: 'calc(100% - 120px)' }}
        >
          {
            !isMobile &&
            (
              <YearsSelector
                years={years}
                onSelect={onSelectYear}
                selected={selectedYearIndex}
              />
            )
          }
          <div
            className='flex flex-column justify-center items-center'
            style={{ height: '70%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '0 auto' }}
          >
            {
              selectedCategories && (
                <BluePetals
                  categories={selectedCategories}
                  year={years[selectedYearIndex]}
                  language={languages[selectedLanguageIndex]}
                  setSelectedPetal={setSelectedPetalWrapper}
                  selectedPetal={selectedPetal}
                />
              )
            }
          </div>
          <div
            className='flex flex-column relative justify-start items-center ph4 mt2'
            style={{ height: '30%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '45px auto'}}
          >
            <div
              className='tc raleway mt2'
              style={{ fontSize: isMobile ? '11px' : '16px', lineHeight: isMobile ? '13px' : '20px' }}
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
