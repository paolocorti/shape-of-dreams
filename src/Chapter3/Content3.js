import React, { useContext } from 'react';
import content1 from './cap3-01-desk.jpg'
import content2 from './cap3-02-desk.jpg'
import content3 from './cap3-03-desk.jpg'
import mobileContent1 from './cap3-01-mob.jpg'
import mobileContent2 from './cap3-02-mob.jpg'
import mobileContent3 from './cap3-03-mob.jpg'
import { AppContext } from '../appContext';
import { isMobile } from 'react-device-detect';

const Content3 = ({ history }) => {
  const context = useContext(AppContext);

  return (
    <div className='w-100 bg-white read'>
      <h4 className='tl fw6 mv0 ph4'>Chapter 3</h4>
      <h1 className='tl fw7 mt0 ph4'>A Time for Dreams</h1>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          How does the interest for the meaning of certain dreams change over time?
  We explored the dreams topic also from this point of view, studying the trends throughout the years and we found different types of subjects.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <img src={isMobile ? mobileContent1 : content1} width='100%' alt='chapter 2' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          There are dreams’s subject whose search interest over time has been linear, without any changes or peaks: such as dreaming about flying.         </p>
      </div>
      <div className='w-100 tc mt5'>
        <img src={isMobile ? mobileContent2 : content2} width='100%' alt='chapter 2' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          We found subjects whose search interest has been characterize by an overall increase, such as dreaming about water or dreaming about escaping.
        </p>
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          And then there are dream’s subjects that have been characterized by significant peaks coinciding with real events. The search interest for dreaming about vulcano for instance had a peak on April 2010, when the eruption of Volcano Eyjafjallajökull (Iceland) started.
And dreaming about tsunami had a peak in Google search interest on March 2011, coinciding with the month in which a tsunami occurred in Japan.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <img src={isMobile ? mobileContent3 : content3} width='100%' alt='chapter 2' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          You can also explore the search interest over time for other dreams subject with the dream explorer.
        </p>
      </div>
      <div className='w-100 tc pb4 flex items-center flex-column'>
        <div className='flex flex-column items-center ph4 pv3'>
          <div className='raleway fw7 tl' style={{ fontSize: '22px', color: '#43449a', letterSpacing: '1px' }}>START EXPLORING</div>
          <img className='mt2' src={'images/down-arrow.svg'} width={35} onClick={() => context.setSelectedView('explore')} />
        </div>
        {/* {
          isMobile && (
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

export default Content3;
