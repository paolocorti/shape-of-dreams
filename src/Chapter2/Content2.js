import React, { useContext } from 'react';
import story1 from './cap1-story.png';
import landing2 from './landing_2.svg';
import legend2 from './cap2-landing.svg';
import content1 from './cap2-1.jpg'
import content2 from './cap2-2.jpg'
import { AppContext } from '../appContext';
import { isMobile } from 'react-device-detect';

const Content2 = ({ history }) => {
  const context = useContext(AppContext);
  return (
    <div className='w-100 bg-white read'>
      <h4 className='tl fw6 mv0 ph4'>Chapter 2</h4>
      <h1 className='tl fw7 mt0 ph4'>The Worlds We Dream of</h1>
      <div className='tj ph4 f4'>
        <p className='lh-title'>
        After extracting the subjects we created 12 macro-categories of dreams, to explore the subjects from a broader perspective.
        </p>
      </div>
      <div className='w-100 tc mt4'>
        <img src={content1} width='100%' alt='chapter 2' />
      </div>
      <div className='tj ph4 f4'>
        <p className='lh-title'>
        The category with the highest values in our analysis was animals, followed by pregnancy and people.
        </p>
      </div>
      <div className='w-100 tc'>
        <img src={content2} width='100%' alt='chapter 2' />
      </div>
      <div className='tj ph4 f4'>
        <p className='lh-title'>
        Also here it’s interesting to explore how the data change according to the analyzed languages and the year.
The category with the highest value in English in 2018 is people.
Tap on START EXPLORING to dig into the data!
        </p>
      </div>
      <div className='w-100 tc pb4'>
        <div className='flex flex-column ph4'>
          <div className='raleway fw7 tl' style={{ fontSize: '16px', color: '#43449a', letterSpacing: '1px'}}>START EXPLORING</div>
          <img src={'images/down-arrow.svg'} width={35} onClick={() => context.setSelectedView('explore')} />
        </div>
        {
          !isMobile && (
            <div className='flex flex-column ph4'>
              <div className='raleway fw7 tl' style={{ fontSize: '16px', color: '#43449a', letterSpacing: '1px'}}>READ CHAPTER 3</div>
              <img src={'images/down-arrow.svg'} width={35} onClick={() => history.push(`/chapter3`)} />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Content2;
