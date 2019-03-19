import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import { groupBy } from 'lodash';
import BluePetals from './BluePetals';
import categories from './data/categories.json';

const Explore2 = ({ history }) => {
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0);
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);

  const onSwipeRight = () => {
    history.push(`/explore3`);
  };

  const onSwipeLeft = () => {
    history.push(`/explore1`);
  };

  const goToChapter2 = () => {
    history.push(`/chapter2`);
  };

  const groupedByCountry = Object.values(groupBy(categories, 'language'));
  const groupedByCountryKeys = Object.keys(groupBy(categories, 'language'));
  const groupedByYearAndCountry = groupedByCountry.map(values => {
    return Object.values(groupBy(values, 'year'));
  });
  const years = [2016, 2018];
  const selectedCategories =
    groupedByYearAndCountry[selectedLanguageIndex][selectedYearIndex];

  return (
    <Swipe
      onSwipeRight={onSwipeRight}
      onSwipeLeft={onSwipeLeft}
      style={{ height: '100%' }}
      className='explore2'
    >
      <div className='w-100 flex justify-around pa2'>
        <button
          onClick={() =>
            setSelectedLanguageIndex(
              selectedLanguageIndex > 0
                ? selectedLanguageIndex - 1
                : groupedByCountryKeys.length - 1
            )
          }
        >
          PREV
        </button>
        <div>{groupedByCountryKeys[selectedLanguageIndex]} </div>
        <button
          onClick={() =>
            setSelectedLanguageIndex(
              selectedLanguageIndex < groupedByCountryKeys.length - 1
                ? selectedLanguageIndex + 1
                : 0
            )
          }
        >
          NEXT
        </button>
      </div>
      <div className='w-100 flex justify-around pa2'>
        <button
          onClick={() =>
            setSelectedYearIndex(
              selectedYearIndex > 0 ? selectedYearIndex - 1 : years.length - 1
            )
          }
        >
          PREV
        </button>
        <div>{years[selectedYearIndex]} </div>
        <button
          onClick={() =>
            setSelectedYearIndex(
              selectedYearIndex < years.length - 1 ? selectedYearIndex + 1 : 0
            )
          }
        >
          NEXT
        </button>
      </div>
      <div className='w-100 flex flex-column pa1'>
        <div className='pa4 tc'>Explore2</div>

        <BluePetals categories={selectedCategories} />
      </div>

      <div
        className='w-100 flex justify-center items-center'
        onClick={() => goToChapter2()}
      >
        <div className=''>READ CHAPTER 2</div>
      </div>
    </Swipe>
  );
};

export default Explore2;
