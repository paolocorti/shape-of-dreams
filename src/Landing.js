import React, { useState } from 'react';
import landing1 from './Chapter1/landing_1.svg';
import NavigationFooter from './components/NavigationFooter';
import Content1 from './Chapter1/Content1';
import { ScrollToHOC, ScrollArea } from 'react-scroll-to';

const Landing = ({ history, scrollTo }) => {
  const [canScroll, setCanScroll] = useState(false);
  const scrollHeight = window.innerHeight;

  const goToChapter1 = () => {
    console.log('here');
    setCanScroll(true);
    scrollTo({ id: 'scroll', y: scrollHeight, smooth: true });
    setTimeout(() => {
      history.push(`/chapter1`);
    }, 700);
  };

  return (
    <ScrollArea
      id='scroll'
      className={`w-100 ${canScroll ? 'overflow-auto' : 'overflow-hidden'}`}
    >
      <div className={`w-100 landing`} style={{ paddingTop: '50px' }}>
        <div className='landing-header w-100 tc pa4'>
          <img src={landing1} height='100%' alt='chapter 1 icon' />
        </div>
        <div className='landing-content w-100'>
          <h1 className='tc fw7 mt0 title'>
            THE <br /> MEANING <br /> OF DREAMS
          </h1>
          <div className='ph4 tc subtitle'>
            A visual exploration on Google searches for the interpretation of
            dreams
          </div>
        </div>
        <div className='landing-footer w-100 tc' onClick={goToChapter1}>
          <div>
            <img src={'images/down-arrow.svg'} width={35} />
          </div>
        </div>
        <div style={{ paddingTop: '50px' }}>
          <Content1 />
        </div>
      </div>
    </ScrollArea>
  );
};

export default ScrollToHOC(Landing);
