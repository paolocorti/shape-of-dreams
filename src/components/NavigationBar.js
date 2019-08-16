import React from 'react';
import prev from './images/prev.svg';
import next from './images/next.svg';
import change1 from './images/change1.svg';
import change2 from './images/change2.svg';
import change3 from './images/change3.svg';
import change4 from './images/change4.svg';
import './Selector.scss';


const NavigationBar = ({ history, activeIndex, content }) => {

  const setPrev = () => {
    const newIndex = activeIndex < 2 ? 1 : activeIndex - 1
    history.push(`/chapter${newIndex}?section=${content ? 'read' : 'explore'}`)
  }

  const setNext = () => {
    console.log(activeIndex)
    const newIndex = activeIndex > 4 ? 4 : activeIndex + 1
    history.push(`/chapter${newIndex}?section=${content ? 'read' : 'explore'}`)
  }

  return (
    <div className='navigationBarContainer' style={{ position: content ? 'fixed' : 'absolute' }}>
      <div className='navigationBar'>
        <img className='pointer svg-hover' src={prev} onClick={setPrev} style={{ height: 45, opacity: activeIndex > 1 ? 1 : 0, pointerEvents: activeIndex > 1 ? 'auto' : 'none' }} />
        {
          activeIndex === 1 &&
          (
            <img src={change1} style={{ height: 40 }} />
          )
        }
        {
          activeIndex === 2 &&
          (
            <img src={change2} style={{ height: 40 }} />
          )
        }
        {
          activeIndex === 3 &&
          (
            <img src={change3} style={{ height: 40 }} />
          )
        }
        {
          activeIndex === 4 &&
          (
            <img src={change4} style={{ height: 40 }} />
          )
        }
        <img className='pointer svg-hover' src={next} onClick={setNext} style={{ height: 45, opacity: activeIndex < 4 ? 1 : 0, pointerEvents: activeIndex < 4 ? 'auto' : 'none' }} />
      </div>
    </div>

  );
};

export default NavigationBar;
