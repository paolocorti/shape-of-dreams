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
        <img className='pointer' src={'/images/prev.svg'} onClick={prev} style={{ height: 40, opacity: activeIndex > 1 ? 1 : 0 }} />
        <img className='pointer' src={'/images/change.svg'} style={{ height: 30 }} />
        <img className='pointer' src={'/images/next.svg'} onClick={next} style={{ height: 40, opacity: activeIndex < 4 ? 1 : 0 }} />
      </div>
    </div>

  );
};

export default NavigationBar;
