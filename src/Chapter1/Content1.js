import React, { useContext } from 'react';
import content1 from './cap1-01-desk.jpg'
import content2 from './cap1-02-desk.jpg'
import content3 from './cap1-03-desk.jpg'
import content4 from './cap1-04-desk.jpg'
import content5 from './cap1-05-desk.jpg'
import content1a from './cap1_01a-desk.jpg'
import snake from './snake.svg'
import teeth from './teeth.svg'
import cabbage from './cabbage.svg'
import camel from './camel.svg'
import garlic from './garlic.svg'
import iguana from './iguana.svg'
import fox from './fox.svg'
import earthquake from './earthquake.svg'
import luggage from './luggage.svg'
import { AppContext } from '../appContext';
import { isMobile } from 'react-device-detect';
import NavigationBar from '../components/NavigationBar';

const Content1 = ({ history, activeIndex }) => {
  const context = useContext(AppContext);

  return (
    <div className='w-100 bg-white read'>
      {
        !isMobile && (
          <NavigationBar content={true} history={history} activeIndex={activeIndex} />
        )
      }
      <h4 className='tl fw6 mv0 ph4'>Chapter 1</h4>
      <h1 className='tl fw7 mt0 ph4'>The Shapes of our Dreams</h1>
      <div className='tj f4 ph5 mt5'>
        <p className='lh-title'>How do we search for the meaning of our dreams on Google? We have explored the related queries to the question What does it mean to dream about in different languages to see what are the dreams’ subjects that the users look for the most. We discovered that we share some recurring dreams.</p>
      </div>
      <div className='w-100 tc mt4'>
        <img src={content1} width='100%' alt='chapter 1' />
      </div>
      <div className='tj f4 ph5 mt5'>
        <p className='lh-title'>
          We studied the results extracted translating questions such as What does it mean to dream about..., Why do I dream about..., Meaning of dreaming... in seven languages and we’ve explored the topic over the years, from 2008 to 2018.
          We started from the top spoken languages and we selected the ones for which we have found enough data to explore the topic.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <img src={content1a} width='100%' alt='chapter 1' />
      </div>
      <div className='tj f4 ph5 mt5'>
        <p className='lh-title'>
          There are some subjects whose meaning people consistently look for: dreaming about snakes and falling teeth for instance: they appeared in all the explored languages from 2008 to 2018.
        </p>
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <img src={snake} width={200} alt='Dreaming about snakes' />
        <h2 className='mv3'>Dreaming about snakes</h2>
      </div>
      <div className='w-100 tc mt4'>
        <img src={content2} width='100%' alt='chapter 1' />
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <img src={teeth} width={80} alt='Dreaming about falling teeths' />
        <h2 className='mv3'>Dreaming about falling teeths</h2>
      </div>
      <div className='w-100 tc mt4'>
        <img src={content3} width='100%' alt='chapter 1' />
      </div>
      <div className='tj f4 ph5 mt5'>
        <p className='lh-title'>
          On the other hand, there are unique subjects that only appeared exploring specific languages: dreaming about cabbage only appeared in Russian, dreaming about camels in Arabic, dreaming about garlic in Portuguese, about iguanas in Spanish, and about fox in English.
        </p>
      </div>

      <div className='w-100 tc mt5 flex flex-column items-center'>
        <div className='w-100 flex justify-center items-end'>
          <img src={cabbage} height={100} alt='cabbage' />
          <img src={camel} height={140} alt='camel' />
          <img src={garlic} height={150} alt='garlic' />
          <img src={iguana} height={100} alt='iguana' />
          <img src={fox} height={140} alt='fox' />
        </div>
        <h2 className='mv3'>Unique subjects</h2>
      </div>
      <div className='w-100 tc mt4'>
        <img src={content4} width='100%' alt='chapter 1' />
      </div>

      <div className='tj f4 ph5 mt5'>
        <p className='lh-title'>
          And then we’ve found interesting data exploring subjects with peaks in the search interest over the years. In 2011 the related query with the highest value in Japanese was earthquake, in 2016 the one with the highest value in Arabic was traveling.
        </p>
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <div className='w-100 flex justify-center items-end'>
          <img src={earthquake} height={140} alt='earthquake' />
          <img src={luggage} height={140} alt='luggage' />
        </div>
        <h2 className='mv3'>Peaks over the year</h2>
      </div>

      <div className='w-100 tc mt4'>
        <img src={content5} width='100%' alt='chapter 1' />
      </div>
      <div className='tj f4 ph5 mt5'>
        <p className='lh-title'>
          Are you curious to explore the dreams by year and language? We’ve designed a dream explorer!        </p>
      </div>

      <div className='w-100 tc pb4 flex items-center flex-column'>
        <div className='flex flex-column items-center ph4 pv3'>
          <div className='raleway fw7 tl' style={{ fontSize: '22px', color: '#43449a', letterSpacing: '1px' }}>START EXPLORING</div>
          <img className='mt2' src={'images/down-arrow.svg'} width={35} onClick={() => context.setSelectedView('explore')} />
        </div>
        {
          isMobile && (
            <div className='flex flex-column items-center ph4 pv3'>
              <div className='raleway fw7 tl' style={{ fontSize: '22px', color: '#43449a', letterSpacing: '1px' }}>READ CHAPTER 2</div>
              <img className='mt2' src={'images/down-arrow.svg'} width={35} onClick={() => history.push(`/chapter2`)} />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Content1;
