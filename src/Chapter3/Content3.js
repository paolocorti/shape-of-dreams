import React, {useContext} from 'react';
import story1 from './cap1-story.png';
import landing3 from './landing_3.svg';
import content1 from './cap3-1.jpg'
import content2 from './cap3-2.jpg'
import { AppContext } from '../appContext';

const Content3 = ({}) => {
  const context = useContext(AppContext);

  return (
    <div className='w-100 bg-white'>
      <h4 className='tl fw6 mv0 ph4'>Chapter 3</h4>
      <h1 className='tl fw7 mt0 ph4'>A Time for Dreams</h1>
      <div className='ph4 tj f4'>
      <p className='lh-title'>
        Is there a seasonality in our dreams? We’ve discovered that the Google searches for the meaning of certain subjects have meaningful trends.
        </p>
      </div>
      <div className='w-100 tc mv4'>
        <img src={content1} width='100%' alt='chapter 3' />
      </div>
      <div className='ph4 tj f4'>
        <p className='lh-title'>
        We found two macro-categories of subjects according to their behaviors over time. There are subjects whose interest over time consistently increased from 2008 to 2018, as for the Google search Snakes dream.
        </p>
      </div>
      <div className='w-100 tc'>
        <img src={content2} width='100%' alt='chapter 3' />
      </div>
      <div className='ph4 tj f4'>
        <p className='lh-title'>
        And then there are searches with meaningful peaks, as for instance Earthquake dream or Hurricane dream.
Tap on START EXPLORING to analyze the interest over time for a set of subjects.
        </p>
      </div>
      <div className='w-100 tc'>
        <div className='flex flex-column ph4'>
          <div className='raleway fw7 tl' style={{ fontSize: '16px', color: '#43449a', letterSpacing: '1px'}}>START EXPLORING</div>
          <img src={'images/down-arrow.svg'} width={35} onClick={() => context.setSelectedView('explore')} />
        </div>
      </div>
    </div>
  );
};

export default Content3;
