import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import BluePetals from '../BluePetals';
import categories from '../data/categories.json';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import YearsSelectorMobile from '../components/YearsSelectorMobile';
import { years } from '../constants';
import howtoread2 from './cap2-leg-desk.svg';
import howtoreadMobile2 from './cap2-leg-mob.svg';
import { languages } from '../constants';
import { isMobile } from 'react-device-detect';
import NavigationBar from '../components/NavigationBar';
import BluePetalsEmpty from '../BluePetals/BluePetalsEmpty';

const Explore2 = ({ history, activeIndex }) => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [selectedPetal, setSelectedPetal] = useState(null);
  const [howToRead, setHowToRead] = useState(false);

  const onSelectLanguage = index => {
    setSelectedLanguageIndex(index);
  };

  const toggleHowToRead = () => {
    setHowToRead(!howToRead);
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

  const selectedCategories = valueByCountry[0] ? valueByCountry[0][0] : []

  console.log(selectedCategories)

  return (
    <div className='explore2' style={{ paddingTop: isMobile ? 0 : 60 }}>
      {
        !isMobile && (activeIndex === 2) &&
        (
          <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          />
        )
      }
      {
        !isMobile && (
          <NavigationBar history={history} activeIndex={activeIndex} />
        )
      }
      <div className='w-100 h-100 relative'>
        <div
          className='w-100 fixed'
          style={{
            zIndex: howToRead ? 200 : -1,
            background: 'linear-gradient(#e5f2ef, #d0d7eb)',
            top: howToRead ? (isMobile ? 0 : 50) : '-100%',
            height: 'calc(100vh - 50px)',
            display: howToRead ? 'block' : 'none',
          }}
        >
          <div style={{
            backgroundImage: `url(${isMobile ? howtoreadMobile2 : howtoread2})`,
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            height: 'calc(100% - 40px)',
            marginTop: '40px'
          }}>
          </div>

          <div className='read-close' onClick={() => toggleHowToRead()}>
            <img className='pointer' src={'/images/close.svg'} alt='Close menu icon' width={30} />
          </div>
        </div>
        <div className='w-100 ph4 ios-fix' style={{ height: '120px' }}>
          {/* <h4 className='tl fw6 mv0'>Chapter 2</h4> */}
          <h1 className='tc fw7 mv0' style={{ fontSize: '21px' }}>
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
              <YearsSelectorMobile
                years={years}
                onSelect={onSelectYear}
                selected={selectedYearIndex}
              />
            )
          }
        </div>
        <div
          className='flex flex-column relative tc ios-fix'
          style={{ height: 'calc(100% - 120px)', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '0' : '0 auto' }}
        >
          <div
            className='flex flex-column justify-center items-center'
            style={{ height: '70%', margin: isMobile ? '20px 0' : '0 auto' }}
          >
            {
              selectedCategories.length ? (
                <BluePetals
                  categories={selectedCategories.sort((a, b) => a.order - b.order)}
                  year={years[selectedYearIndex]}
                  language={languages[selectedLanguageIndex]}
                  setSelectedPetal={setSelectedPetalWrapper}
                  selectedPetal={selectedPetal}
                />
              ) : (
                  <BluePetalsEmpty categories={selectedCategories.sort((a, b) => a.order - b.order)}
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
            style={{ height: '30%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '45px auto' }}
          >
            <div
              className='tc raleway mt2 fw3'
              style={{ fontSize: isMobile ? '11px' : '15px', lineHeight: isMobile ? '13px' : '20px' }}
            >

              {
                isMobile ?
                  (
                    'Select a language and a year. Tap on the circle to switch on and off the category. Size of the petals = number of dreams in the category'
                  ) : (
                    'Select a language and a year or use the keyboard arrows to navigate the visualization. Go over on the circles to switch on and off the category. The size of the petals represents the number of dreams in the category.'
                  )
              }
            </div>
            <div
              className='raleway mt3 fw7 pointer link'
              style={{
                fontSize: '14px',
                color: '#43449a',
                //letterSpacing: '1px'
              }}
              onClick={toggleHowToRead}
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