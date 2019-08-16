import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import BluePetals from '../BluePetals';
import categories from '../data/categories.json';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import YearsSelectorMobile from '../components/YearsSelectorMobile';
import { years } from '../constants';
import howtoread2 from './cap2-leg-desk.png';
import howtoreadMobile2 from './cap2-leg-mob.png';
import close from '../components/images/close.svg';
import { languages } from '../constants';
import { isMobile, isIOS } from 'react-device-detect';
import { isMobileWithTablet } from '../constants';
import NavigationBar from '../components/NavigationBar';
import BluePetalsEmpty from '../BluePetals/BluePetalsEmpty';

const Explore2 = ({ history, activeIndex }) => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(10);
  //const [selectedPetal, setSelectedPetal] = useState(null);
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

  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  const selectedCallback = index => {
    const selection = index === hovered ? null : index;
    setHovered(selection);
  };

  const selectedClickedCallback = index => {
    const selection = index === clicked ? null : index;
    setClicked(selection);
  }

  const selectedPetal = clicked !== null ? clicked : hovered;
  const selectedCategories = valueByCountry[0] ? valueByCountry[0][0] : [];

  console.log(selectedPetal)


  return (
    <div className='explore2' style={{ paddingTop: isMobileWithTablet ? 0 : 15 }}>
      {
        !isMobileWithTablet && (activeIndex === 2) &&
        (
          <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          />
        )
      }
      {
        !isMobileWithTablet && (
          <NavigationBar history={history} activeIndex={activeIndex} />
        )
      }
      <div className='w-100 h-100 relative'>
        <div
          className='how-to-read'
          style={{
            zIndex: howToRead ? 200 : -1,
            background: 'linear-gradient(#e5f2ef, #d0d7eb)',
            top: howToRead ? (isMobileWithTablet ? 0 : 50) : '-100%',
            display: howToRead ? 'block' : 'none',
          }}
        >
          <div
            className='how-to-read-image'
            style={{
              backgroundImage: `url(${isMobileWithTablet ? howtoreadMobile2 : howtoread2})`,
              backgroundSize: isMobileWithTablet ? 'contain' : 'cover',
            }}>
          </div>

          <div className='read-close' onClick={() => toggleHowToRead()}>
            <img className='pointer svg-hover' src={close} alt='Close menu icon' width={30} />
          </div>
        </div>
        <div className='w-100 ph4 ios-fix' style={{ height: '120px' }}>
          {/* <h4 className='tl fw6 mv0'>Chapter 2</h4> */}
          <LanguageSelector
            languages={groupedByCountryKeys}
            onSelect={onSelectLanguage}
            selected={selectedLanguageIndex}
          />
          {
            isMobileWithTablet &&
            (
              <YearsSelectorMobile
                years={years}
                onSelect={onSelectYear}
                selected={selectedYearIndex}
              />
            )
          }
          <h1 className='tc fw7 mt4' style={{ fontSize: isMobileWithTablet ? '20px' : '23px' }}>
            Dreams subjects by category
          </h1>
        </div>
        <div
          className={`flex flex-column relative tc ${isIOS ? 'ios-fix' : ''}`}
          style={{ height: 'calc(100% - 120px)', maxWidth: isMobileWithTablet ? '100%' : '75%', margin: isMobileWithTablet ? '0' : '0 auto' }}
        >
          <div
            className='flex flex-column justify-center items-center'
            style={{ height: '70%', margin: isMobileWithTablet ? '10px 0' : '0 auto' }}
          >
            {
              selectedCategories.length ? (
                <BluePetals
                  categories={selectedCategories.sort((a, b) => a.order - b.order)}
                  year={years[selectedYearIndex]}
                  language={languages[selectedLanguageIndex]}
                  setSelectedPetal={selectedCallback}
                  setClickedPetal={selectedClickedCallback}
                  selectedPetal={selectedPetal}
                />
              ) : (
                  <BluePetalsEmpty categories={selectedCategories.sort((a, b) => a.order - b.order)}
                    year={years[selectedYearIndex]}
                    language={languages[selectedLanguageIndex]}
                    setSelectedPetal={selectedCallback}
                    setClickedPetal={selectedClickedCallback}
                    selectedPetal={selectedPetal}
                  />
                )
            }
          </div>
          <div
            className='flex flex-column relative justify-start items-center ph4 mt0'
            style={{ height: '30%', maxWidth: isMobileWithTablet ? '100%' : '75%', margin: isMobileWithTablet ? '' : '45px auto' }}
          >
            <div
              className='tc raleway mt2 fw3'
              style={{ fontSize: isMobileWithTablet ? '11px' : '15px', lineHeight: isMobileWithTablet ? '13px' : '20px' }}
            >

              {
                isMobileWithTablet ?
                  (
                    'Select a language and a year. Tap on the circles to select the category. Petal size = n. of dreams.'
                  ) : (
                    'Select a language and a year or use the keyboard arrows to navigate the visualization. Go over on the circles to switch on and off the category. The size of the petals represents the number of dreams in the category.'
                  )
              }
            </div>
            <div
              className='raleway mt3 fw7 pointer link2'
              style={{
                fontSize: '14px',
                color: '#d88383',
                letterSpacing: '1px'
              }}
              onClick={toggleHowToRead}
            >
              LEGEND
            </div>
            {!isMobileWithTablet && (<div
              className='raleway mt3 fw7 pointer link'
              style={{
                fontSize: '14px',
                color: '#43449a',
                letterSpacing: '1px'
              }}
              onClick={() => history.push('/chapter3?section=read')}
            >
              READ CHAPTER 3
            </div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore2;