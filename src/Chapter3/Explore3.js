import React, { useState } from 'react';
import interestOverTime from '../data/interestOverTime.json';
import '../Explore.scss';
import LanguageSelector from '../components/LanguageSelector';
import YearsSelector from '../components/YearsSelector';
import Trend from '../Trend';
import GaussianTrend from '../GaussianTrend';

const Explore3 = ({ history }) => {
  const yearData = interestOverTime.filter(d =>
    d.formattedTime.includes('2018')
  );

  return (
    <div className='explore1'>
      <div className='w-100 flex flex-column justify-center relative'>
        <div
          className='w-100'
          style={{ flex: 1, flexShrink: 0, height: '30%' }}
        >
          {/* <LanguageSelector
            languages={groupedByCountryKeys}
            onSelect={onSelectLanguage}
            selected={selectedLanguageIndex}
          />
          <YearsSelector
            years={years}
            onSelect={onSelectYear}
            selected={selectedYearIndex}
          /> */}
        </div>
        <div
          className='relative flex flex-column justify-center'
          style={{ flex: 1, flexShrink: 0, height: '70%' }}
        >
          <Trend data={interestOverTime} name={'Dreaming about Tornadoes'} />
          {/* <GaussianTrend data={yearData} dataKey={'macro_1'} /> */}
        </div>
      </div>
    </div>
  );
};

export default Explore3;
