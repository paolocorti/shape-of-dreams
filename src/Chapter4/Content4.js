import React, { useContext, useEffect, useState } from 'react';
import content1 from './cap4-01-desk.jpg'
import content2 from './cap4-02-desk.jpg'
import content3 from './cap4-03-desk.jpg'
import content4 from './cap4-04-desk.jpg'
import mobileContent1 from './cap4-01-mob.jpg'
import mobileContent2 from './cap4-02-mob.jpg'
import mobileContent3 from './cap4-03-mob.jpg'
import mobileContent4 from './cap4-04-mob.jpg'
import dna from './dna.svg'
import dog from './dog.svg'
import fish from './fish.svg'
import toad from './toad.svg'
import elephant from './elephant.svg'
import { AppContext } from '../appContext';
import { isMobile } from 'react-device-detect';

const Content4 = ({ history, activeIndex }) => {
  const context = useContext(AppContext);
  const [reload, setReload] = useState(false)

  useEffect(() => {
    if (activeIndex === 4) {
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
    <div className='w-100 bg-white read'>
      <h4 className={`tl fw6 mv0 ph4 ${reload ? 'transition-in' : ''}`}>Chapter 4</h4>
      <h1 className={`tl fw7 mt0 ph4 ${reload ? 'transition-in' : ''}`}>Dreams that connect us</h1>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          Another aspect we were interested in was exploring the networks of dreams: how do the dreams’s subjects – whose meaning people look for on Google – connect different languages? For this reason we visualized the dreams that connect us by year.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <img src={isMobile ? mobileContent1 : content1} width='100%' alt='chapter 2' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          The dreams’s subjects that connect more languages are the ones that more consistently appeared in our explorations: snakes and falling teeth. But there are also other subjects that often connected the languages, such as <span className='highlights'>being pregnant, dogs</span> and <span className='highlights'>fishes.</span>
        </p>
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <div className='w-100 flex justify-center items-center'>
          <img src={dna} height={120} alt='dna' />
          <img src={dog} height={140} alt='dog' />
          <img src={fish} height={110} alt='fish' />
        </div>
        {/* <h2 className='mv3'>Peaks over the year</h2> */}
      </div>
      <div className='w-100 tc mt5'>
        <img src={isMobile ? mobileContent2 : content2} width='100%' alt='chapter 2' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          There are subjects that connected a specific language with the other ones in more than one year: such as <span className='highlights'>crying</span>, that linked Arabic with English in 2013 and 2018 and with Spanish and French in 2014.
        </p>
      </div>
      <div className='w-100 tc mt5'>
        <img src={isMobile ? mobileContent3 : content3} width='100%' alt='chapter 2' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          We also found unique connections between couple of languages: such as dreaming about <span className='highlights'>elephants</span>, that connected English and Portuguese in 2011 and 2012 and dreaming about <span className='highlights'>toads</span>, that linked Portuguese and Spanish in 2015 and 2017.        </p>
      </div>
      <div className='w-100 tc mt5 flex flex-column items-center'>
        <div className='w-100 flex justify-center items-center'>
          <img src={toad} height={110} alt='toad' />
          <img src={elephant} height={140} alt='elephant' />
        </div>
        {/* <h2 className='mv3'>Peaks over the year</h2> */}
      </div>
      <div className='w-100 tc mt5'>
        <img src={isMobile ? mobileContent4 : content4} width='100%' alt='chapter 2' />
      </div>
      <div className='tj f4 ph4 ph5-ns mt5'>
        <p className='lh-copy'>
          Are you curious to explore the networks? Go to our dreams explorer!
        </p>
      </div>
      <div className='w-100 tc pb4 flex items-center flex-column'>
        <div className='flex flex-column items-center ph4 pv3' style={{ marginBottom: '45px' }}>
          <div className='raleway fw7 tl' style={{ fontSize: '22px', color: '#43449a', letterSpacing: '1px' }}>START EXPLORING</div>
          <div className='explore-icon'>
            <div className='explore-icon-circle'></div>
            <img className='explore-icon-base' src={'images/start-expl.svg'} width={35} onClick={() => context.setSelectedView('explore')} />
          </div>
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

export default Content4;
