import React, { useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content1 from './images/cap2-01-desk.png';
import content2 from './images/cap2-02-desk.png';
import content3 from './images/cap2-03-desk.png';
import mobileContent1 from './images/cap2-01-mob.png';
import mobileContent2 from './images/cap2-02-mob.png';
import mobileContent3 from './images/cap2-03-mob.png';
import startExpl from '../components/images/start-expl.svg';

import { AppContext } from '../appContext';
import { isMobileWithTablet } from '../constants';

const Content2 = ({ history, activeIndex }) => {
  const context = useContext(AppContext);
  const [reload, setReload] = useState(false);

  const changeSection = (section) => {
    if (isMobileWithTablet) {
      context.setSelectedView(section)
    } else {
      history.push({
        search: "?" + new URLSearchParams({ section: section }).toString()
      })
    }
  }

  useEffect(() => {
    if (activeIndex === 2) {
      setReload(true);
      setTimeout(() => {
        setReload(false);
      }, 2000);
    }
    return () => {
    };
  }, [activeIndex]);

  return (
    <div className='w-100 read'>
      <h4 className={`tl fw6 mv0 ph4 ${reload ? 'transition-in' : ''}`}>
        Chapter 2
      </h4>
      <h1 className={`tl fw7 mt0 ph4 ${reload ? 'transition-in' : ''}`}>
        The Worlds We Dream of
      </h1>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          What are the worlds we dream of the most according to Google searches?
          After exploring the subjects, we created some macro-categories of
          dreams to see what are the universes that populate our sleep and how
          they change according to the different languages over the years.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <LazyLoadImage
          alt={'Chapter 2 first paragraph'}
          effect="opacity"
          threshold={150}
          src={isMobileWithTablet ? mobileContent1 : content1}
          width='100%'
        />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          After having studied all the dream subjects by language and year, we
          grouped them into 12 categories:{' '}
          <span className='highlights'>Animals and Insects</span> (where we
          grouped subjects such as snakes, spiders, dogs),{' '}
          <span className='highlights'>Human Body</span> (with subjects such as
          falling teeth, hair, nails),{' '}
          <span className='highlights'>Family and relationships</span> (with
          subjects such as having a baby, getting married, brother, ex partner),{' '}
          <span className='highlights'>Falling and Flying</span> (with subjects
          such as flying and falling into the void),{' '}
          <span className='highlights'>Emotions</span> (with subjects such as
          crying, laughing, scary dreams),{' '}
          <span className='highlights'>Food</span> (with subjects such as rice,
          strawberry, bread),{' '}
          <span className='highlights'>Natural Elements</span> (with subjects
          such as fire, water, sand),{' '}
          <span className='highlights'>Weather events</span> (with subjects such
          as storm, tornado, rain),{' '}
          <span className='highlights'>Traveling and transportation</span> (with
          subjects such as train, travels, airplane),{' '}
          <span className='highlights'>Money</span> (with subjects such as
          winning money, diamonds, jewels),{' '}
          <span className='highlights'>Supernatural</span> (with subjects such
          as zombies, werewolves, elves) and{' '}
          <span className='highlights'>Other</span>.
        </p>
        <p className='lh-copy'>
          Looking at the overall results, the categories with the highest number of
          of subjects are usually{' '}
          <span className='highlights'>Animals and Insects</span>, especially for English, Spanish and
          Portuguese. It’s usually followed by{' '}
          <span className='highlights'>Family and relationships</span>.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <h2 className='mv5'>Animals, family and relationships</h2>
        <LazyLoadImage
          alt={'Chapter 2 second paragraph'}
          effect='opacity'
          threshold={150}
          src={isMobileWithTablet ? mobileContent2 : content2}
          width='100%'
        />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          Also exploring the other categories is interesting: we discovered that
          over the years the language with more{' '}
          <span className='highlights'>Emotions</span> related subjects is
          Japanese and Russian has many <span className='highlights'>Food</span>{' '}
          dream subjects.{' '}
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <h2 className='mv5'>Dreaming about emotions and food</h2>
        <LazyLoadImage
          alt={'Chapter 2 third paragraph'}
          effect='opacity'
          threshold={150}
          src={isMobileWithTablet ? mobileContent3 : content3}
          width='100%'
        />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          Time to further explore the categories! Go to our dreams explorer!
        </p>
      </div>
      <div className='w-100 tc pb4 flex items-center flex-column'>
        <div
          className='flex flex-column items-center ph4 pv3'
          style={{ marginBottom: '50px' }}
        >
          <div className='raleway explore-text' onClick={() => changeSection('explore')}>EXPLORE CHAPTER 2</div>
          <div
            className='explore-icon'
            onClick={() => changeSection('explore')}
          >
            <div className='explore-icon-circle'></div>
            <img
              alt={'Explore chapter 2'}
              className='explore-icon-base svg-hover'
              src={startExpl}
              width={36}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
