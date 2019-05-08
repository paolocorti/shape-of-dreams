import React, {useContext} from 'react';
import story1 from './cap1-story.png';
import landing1 from './landing_1.svg';
import legend1 from './cap1-landing-key.png';
import content1 from './cap1-1.jpg'
import content2 from './cap1-2.jpg'
import content3 from './cap1-3.jpg'
import content4 from './cap1-4.jpg'
import content5 from './cap1-5.jpg'
import { AppContext } from '../appContext';
import {isMobile} from 'react-device-detect';

const Content1 = ({ history }) => {
  const context = useContext(AppContext);

  return (
    <div className='w-100 bg-white read'>
      <h4 className='tl fw6 mv0 ph4'>Chapter 1</h4>
      <h1 className='tl fw7 mt0 ph4'>The Shapes of our Dreams</h1>
      <div className='tj f4 ph4'>
        <p className='lh-title'>How do we search for the meaning of our dreams on Google? We have explored the related queries to the question What does it mean to dream about in seven languages to see what are the dreams’ subjects that the users look for the most. We discovered that we share some recurring dreams.</p>
      </div>
      <div className='w-100 tc mt4'>
        <img src={content1} width='100%' alt='chapter 1' />
      </div>
      <div className='tj f4 ph4'>
        <p className='lh-title'>We analyzed the results extracted translating the question What does it mean to dream about in seven languages and we’ve explored the topic over the years, from 2008 to 2018.</p>      </div>
      <div className='w-100 tc mt4'>
        <img src={content2} width='100%' alt='chapter 1' />
      </div>
      <div className='tj f4 ph4'>
        <p className='lh-title'>
        There are some top subjects whose meaning people consistently look for: dreaming about snakes and falling teeth for instance: they appeared in all the analyzed languages from 2008 to 2018 and their rising value it’s usually very high.        </p>
      </div>
      <div className='w-100 tc mt4'>
        <img src={content3} width='100%' alt='chapter 1' />
      </div>
      <div className='tj f4 ph4'>
        <p className='lh-title'>
        We’ve also noticed other recurring subjects, such as fire and mice.
Their average rising value is lower than the top ones, but they consistently appeared in all the analyzed languages throughout the years.
        </p>
      </div>
      <div className='w-100 tc mt4'>
        <img src={content4} width='100%' alt='chapter 1' />
      </div>
      
      <div className='tj f4 ph4'>
        <p className='lh-title'>
        And then we’ve found interesting data analyzing subjects with peaks in the search interest over the years. In 2011 the related query with the highest value in Japanese was earthquake, in 2016 the one with the highest value in Arabic was traveling.
        </p>
      </div>

      <div className='w-100 tc mt4'>
        <img src={content5} width='100%' alt='chapter 1' />
      </div>
      <div className='tj f4 ph4'>
        <p className='lh-title'>
        Are you curious to explore the dreams by year and language? We’ve designed a dream explorer!
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
              <div className='raleway fw7 tl' style={{ fontSize: '16px', color: '#43449a', letterSpacing: '1px'}}>READ CHAPTER 2</div>
              <img src={'images/down-arrow.svg'} width={35} onClick={() => history.push(`/chapter2`)} />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Content1;
