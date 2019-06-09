import React from 'react';
import { isMobile } from 'react-device-detect';
import './Selector.scss';


const NavigationBar = ({ history, activeIndex, content }) => {

  const prev = () => {
    const newIndex = activeIndex < 2 ? 1 : activeIndex - 1
    history.push(`/chapter${newIndex}?section=${content ? 'read' : 'explore'}`)
  }

  const next = () => {
    console.log(activeIndex)
    const newIndex = activeIndex > 4 ? 4 : activeIndex + 1
    history.push(`/chapter${newIndex}?section=${content ? 'read' : 'explore'}`)
  }

  return (
    <div className='navigationBarContainer' style={{ position: content ? 'fixed' : 'absolute' }}>
      <div className='navigationBar'>
        <img className='pointer' src={'/images/prev.svg'} onClick={prev} style={{ height: 45, opacity: activeIndex > 1 ? 1 : 0, pointerEvents: activeIndex > 1 ? 'auto' : 'none' }} />
        {
          activeIndex === 1 &&
          (
            <img className='pointer' src={'/images/change1.svg'} style={{ height: 40 }} />
          )
        }
        {
          activeIndex === 2 &&
          (
            <img className='pointer' src={'/images/change2.svg'} style={{ height: 40 }} />
          )
        }
        {
          activeIndex === 3 &&
          (
            <img className='pointer' src={'/images/change3.svg'} style={{ height: 40 }} />
          )
        }
        {
          activeIndex === 4 &&
          (
            <img className='pointer' src={'/images/change4.svg'} style={{ height: 40 }} />
          )
        }
        <img className='pointer' src={'/images/next.svg'} onClick={next} style={{ height: 45, opacity: activeIndex < 4 ? 1 : 0, pointerEvents: activeIndex < 4 ? 'auto' : 'none' }} />
      </div>
    </div>

  );
};

export default NavigationBar;
