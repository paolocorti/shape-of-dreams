import React, { useContext, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content0 from './images/cap3-00-desk.jpg';
import content1 from './images/cap3-01-desk.jpg';
import content2 from './images/cap3-02-desk.jpg';
import content3 from './images/cap3-03-desk.jpg';
import mobileContent0 from './images/cap3-00-mob.jpg';
import mobileContent1 from './images/cap3-01-mob.jpg';
import mobileContent2 from './images/cap3-02-mob.jpg';
import mobileContent3 from './images/cap3-03-mob.jpg';
import startExpl from '../components/images/start-expl.svg';
import { AppContext } from '../appContext';
import { isMobileWithTablet } from '../constants';

const Content3 = ({ history, activeIndex }) => {
  const context = useContext(AppContext);
  const [reload, setReload] = useState(false)

  useEffect(() => {
    if (activeIndex === 3) {
      setReload(true)
      setTimeout(() => {
        setReload(false)
      }, 2000)
    }

    return () => {
      console.log('cleanup')
      //setReload(true)
    }
  }, [activeIndex])

  return (
    <div className='w-100 read'>
      <h4 className={`tl fw6 mv0 ph4 ${reload ? 'transition-in' : ''}`}>Chapter 3</h4>
      <h1 className={`tl fw7 mt0 ph4 ${reload ? 'transition-in' : ''}`}>A Time for Dreams</h1>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          How does the interest for the meaning of certain dreams change over time? We also explored the dreams topic from this point of view, studying the trends throughout the years and we found different types of subjects.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <LazyLoadImage
          alt={'Chapter 3 first paragraph'}

          src={isMobileWithTablet ? mobileContent0 : content0}
          width='100%' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          There are dreams’s subject whose search interest over time has been linear, without any changes or peaks: such as dreaming about flying.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <LazyLoadImage
          alt={'Chapter 3 second paragraph'}

          src={isMobileWithTablet ? mobileContent1 : content1}
          width='100%' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          We found subjects whose search interest has been characterized by an overall increase, such as dreaming about water or dreaming about escaping.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <h2 className='mv5'>Increasing interest</h2>
        <LazyLoadImage
          alt={'Chapter 3 third paragraph'}

          src={isMobileWithTablet ? mobileContent2 : content2}
          width='100%' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          And then there are dream’s subjects that have been characterized by significant peaks coinciding with real events. The search interest for dreaming about vulcano for instance had a peak on April 2010, when the eruption of Volcano Eyjafjallajökull (Iceland) started.
And dreaming about tsunami had a peak in Google search interest on March 2011, coinciding with the month in which a tsunami occurred in Japan.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <h2 className='mv5'>Meaningful peaks</h2>
        <LazyLoadImage
          alt={'Chapter 3 fourth paragraph'}

          src={isMobileWithTablet ? mobileContent3 : content3}
          width='100%' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          You can also explore the search interest over time for other dreams subject with the dream explorer.
        </p>
      </div>
      <div className='w-100 tc pb4 flex items-center flex-column'>
        <div className='flex flex-column items-center ph4 pv3' style={{ marginBottom: '50px' }}>
          <div className='raleway explore-text' onClick={() => context.setSelectedView('explore')}>EXPLORE CHAPTER 3</div>
          <div className='explore-icon' onClick={() => context.setSelectedView('explore')}>
            <div className='explore-icon-circle'></div>
            <img className='explore-icon-base svg-hover' src={startExpl} width={36} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
