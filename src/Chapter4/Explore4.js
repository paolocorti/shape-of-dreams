import React, { useState } from 'react';
import { groupBy, values } from 'lodash';
import { isMobile } from 'react-device-detect';
import categories from '../data/categories.json';
import YearsSelector from '../components/YearsSelector';
import YearsSelectorMobile from '../components/YearsSelectorMobile';
import howtoread4 from './cap4-leg-desk.svg';
import howtoreadMobile4 from './cap4-leg-mob.svg';
import Network1 from '../Network/Network_1';
import Network2 from '../Network/Network_2';
import Network3 from '../Network/Network_3';
import Network4 from '../Network/Network_4';
import Network5 from '../Network/Network_5';
import Network6 from '../Network/Network_6/Network.js';
import Network7 from '../Network/Network_7/Network.js';
import { years } from '../constants';
import NavigationBar from '../components/NavigationBar';


const Explore4 = ({ history, activeIndex }) => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [howToRead, setHowToRead] = useState(false);

  const onSelectYear = index => {
    setSelectedYearIndex(index);
  };

  const toggleHowToRead = () => {
    setHowToRead(!howToRead);
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
          className='w-100 fixed'
          style={{
            zIndex: howToRead ? 200 : -1,
            background: 'linear-gradient(#e6f1eb, #dde6ed)',
            top: howToRead ? (isMobile ? 0 : 50) : '-100%',
            height: 'calc(100vh - 50px)',
            display: howToRead ? 'block' : 'none',
          }}
        >
          <div style={{
            backgroundImage: `url(${isMobile ? howtoreadMobile4 : howtoread4})`,
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
            {/* {
              selectedYearIndex === 0 &&
              (
                <Network1 year={years[selectedYearIndex]} />
              )
            }
            {
              selectedYearIndex === 1 &&
              (
                <Network2 year={years[selectedYearIndex]} />
              )
            }
            {
              selectedYearIndex === 2 &&
              (
                <Network3 year={years[selectedYearIndex]} />
              )
            }
            {
              selectedYearIndex === 3 &&
              (
                <Network4 year={years[selectedYearIndex]} />
              )
            }
            {
              selectedYearIndex === 4 &&
              (
                <Network5 year={years[selectedYearIndex]} />
              )
            } */}

            <Network7 year={years[selectedYearIndex]} />
          </div>
          <div
            className='flex flex-column relative justify-start items-center ph4 mt2'
            style={{ height: '30%', maxWidth: isMobile ? '100%' : '75%', margin: isMobile ? '' : '45px auto' }}
          >
            <div
              className='tc raleway mt2'
              style={{ fontSize: isMobile ? '11px' : '16px', lineHeight: isMobile ? '13px' : '20px' }}
            >
              Select a language and a year. The lines connect the languages that share the same dreams. The subjects in common are written above/under the languages.
            </div>
            <div
              className='raleway mt3 fw7 pointer'
              style={{
                fontSize: '14px',
                color: '#43449a',
                letterSpacing: '1px'
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

export default Explore4;
