import React, { useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content1 from './cap1-01-desk.jpg';
import content2 from './cap1-02-desk.jpg';
import content3 from './cap1-03-desk.jpg';
import content4 from './cap1-04-desk.jpg';
import content5 from './cap1-05-desk.jpg';
import content1a from './cap1_01a-desk.jpg';
import mobileContent1 from './cap1-01-mob.jpg';
import mobileContent2 from './cap1-02-mob.jpg';
import mobileContent3 from './cap1-03-mob.jpg';
import mobileContent4 from './cap1-04-mob.jpg';
import mobileContent5 from './cap1-05-mob.jpg';
import mobileContent1a from './cap1_01a-mob.jpg';
import snake from './snake-small.gif';
import teeth from './tooth.gif';
import collagefox from './collage-fox-small.gif';
import collagecamel from './collage-camel-small.gif';
import luggage from './luggage-small.gif';
import startExpl from '../components/images/start-expl.svg';
import { AppContext } from '../appContext';
import { isMobileWithTablet } from '../constants';
import NavigationBar from '../components/NavigationBar';

const Content1 = ({ history, activeIndex }) => {
  const context = useContext(AppContext);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (activeIndex === 1) {
      setReload(true);
      setTimeout(() => {
        setReload(false);
      }, 2000);
    }

    return () => {
      console.log('cleanup');
      //setReload(true)
    };
  }, [activeIndex]);

  return (
    <div className='w-100 read'>
      {!isMobileWithTablet && (
        <NavigationBar
          content={true}
          history={history}
          activeIndex={activeIndex}
        />
      )}
      <h4 className={`tl fw6 mv0 ph4 ${reload ? 'transition-in' : ''}`}>
        Chapter 1
      </h4>
      <h1 className={`tl fw7 mt0 ph4 ${reload ? 'transition-in' : ''}`}>
        The Shapes of our Dreams
      </h1>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          How do we search for the meaning of our dreams on Google? We have
          explored the related queries to the question{' '}
          <span className='highlights'>What does it mean to dream about</span>{' '}
          in different languages to see what are the dreams’ subjects that the
          users look for the most. We discovered that we share some recurring
          dreams.
        </p>
      </div>
      <div className='w-100 tc mt4'>
        <LazyLoadImage
          alt={'Chapter 1 first paragraph'}
          //effect="blur"
          src={isMobileWithTablet ? mobileContent1 : content1}
          width='100%'
        />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          We studied the results extracted translating questions such as{' '}
          <span className='highlights'>
            What does it mean to dream about..., Why do I dream about...,
            Meaning of dreaming...
          </span>{' '}
          in seven languages and we’ve explored the topic over the years, from
          2008 to 2018. We started from the top spoken languages and we selected
          the ones for which we have found enough data to explore the topic.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <LazyLoadImage
          alt={'Chapter 1 second paragraph'}
          //effect="blur"
          src={isMobileWithTablet ? mobileContent1a : content1a}
          width='100%'
        />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          There are some subjects whose meaning people consistently look for:
          dreaming about <span className='highlights'>snakes</span> and{' '}
          <span className='highlights'>falling teeth</span> for instance: they
          appeared in all the explored languages from 2008 to 2018.
        </p>
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <LazyLoadImage
          alt={'Dreaming about snakes'}
          //effect="blur"
          src={snake}
          height={130}
        />
        <h2 className='mv3 mb5'>Dreaming about snakes</h2>
      </div>
      <div className='w-100 tc mt4'>
        <LazyLoadImage
          alt={'Chapter 1 third paragraph'}
          //effect="blur"
          src={isMobileWithTablet ? mobileContent2 : content2}
          width='100%'
        />
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <LazyLoadImage
          alt={'teeth'}
          //effect="blur"
          src={teeth}
          height={160}
        />
        <h2 className='mv3 mb5'>Dreaming about falling teeth</h2>
      </div>
      <div className='w-100 tc mt4'>
        <LazyLoadImage
          alt={'Chapter 1 fourth paragraph'}
          //effect="blur"
          src={isMobileWithTablet ? mobileContent3 : content3}
          width='100%'
        />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <div className='w-100 flex justify-center items-end flex-wrap'>
          <LazyLoadImage
            alt={'cabbage'}
            //effect="blur"
            src={collagecamel}
            height={180}
          />
        </div>
        <p className='lh-copy'>
          On the other hand, there are unique subjects that only appeared
          exploring specific languages: dreaming about{' '}
          <span className='highlights'>cabbage</span> only appeared in Russian,
          dreaming about <span className='highlights'>camels</span> in Arabic,
          dreaming about <span className='highlights'>garlic</span> in
          Portuguese, about <span className='highlights'>iguanas</span> in
          Spanish, and about <span className='highlights'>fox</span> in English.
        </p>
      </div>

      <div className='w-100 tc mt5 flex flex-column items-center'>
        <div className='w-100 flex justify-center items-end flex-wrap'>
          <LazyLoadImage
            alt={'camel'}
            //effect="blur"
            src={collagefox}
            height={180}
          />
        </div>
        <h2 className='mv3 mb5'>Unique subjects</h2>
      </div>
      <div className='w-100 tc mt4'>
        <LazyLoadImage
          alt={'Chapter 1 fifth paragraph'}
          //effect="blur"
          src={isMobileWithTablet ? mobileContent4 : content4}
          width='100%'
        />
      </div>

      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          And then we’ve found interesting data exploring subjects with peaks in
          the search interest over the years. In 2011 the related query with the
          highest value in Japanese was{' '}
          <span className='highlights'>earthquake</span>, in 2016 the one with
          the highest value in Arabic was{' '}
          <span className='highlights'>traveling</span>.
        </p>
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <div className='w-100 flex justify-center items-end'>
          <LazyLoadImage
            alt={'luggage'}
            //effect="blur"
            src={luggage}
            height={140}
          />
        </div>
        <h2 className='mv3 mb5'>Peaks over the year</h2>
      </div>

      <div className='w-100 tc mt4'>
        <LazyLoadImage
          alt={'Chapter 1 sixth paragraph'}
          //effect="blur"
          src={isMobileWithTablet ? mobileContent5 : content5}
          width='100%'
        />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          Are you curious to explore the dreams by year and language? We’ve
          designed a dream explorer!{' '}
        </p>
      </div>

      <div className='w-100 tc pb4 flex items-center flex-column'>
        <div
          className='flex flex-column items-center ph4 pv3'
          style={{ marginBottom: '30px' }}
        >
          <div className='raleway explore-text'>EXPLORE CHAPTER 1</div>
          <div
            className='explore-icon'
            onClick={() => context.setSelectedView('explore')}
          >
            <div className='explore-icon-circle'></div>
            <img
              className='explore-icon-base svg-hover'
              src={startExpl}
              width={25}
            />
          </div>
        </div>
        {/* {
          isMobileWithTablet && (
            <div className='flex flex-column items-center ph4 pv3'>
              <div className='raleway fw7 tl' style={{ fontSize: '22px', color: '#43449a', letterSpacing: '1px' }}>READ CHAPTER 2</div>
              <img className='mt2' src={'images/down-arrow.svg'} width={35} onClick={() => history.push(`/chapter2`)} />
            </div>
          )
        } */}
      </div>
    </div>
  );
};

export default Content1;
