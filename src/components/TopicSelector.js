import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { isMobile } from 'react-device-detect';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './Selector.scss';

const styles = {
  slideContainer: {
    height: 50,
    width: '100%'
  }
};

const TopicSelector = ({ topics, onSwipe, selectedIndex }) => {
  return (
    <div className='topicSelector relative mt3' style={{ width: isMobile ? '70%' : '100%' }}>
      <KeyboardEventHandler
        handleKeys={['all']}
        onKeyEvent={(key, e) => {
          if (key === 'up') {
            const newIndex = selectedIndex > 1 ? selectedIndex - 1 : 0
            onSwipe(newIndex)
          } else if (key === 'down') {
            const newIndex = selectedIndex < topics.length - 1 ? selectedIndex + 1 : topics.length - 1
            onSwipe(newIndex)
          }
        }}
      ></KeyboardEventHandler>
      <div
        className='flex relative justify-center items-center w-100 h-100'
        style={{ borderRadius: '15px' }}
      >
        {
          isMobile ?
            (
              <SwipeableViews
                containerStyle={styles.slideContainer}
                axis='y'
                resistance
                onChangeIndex={index => onSwipe(index)}
              >
                {topics.map((topic, index) => {
                  return (
                    <div
                      className='topicSelectorEl'
                      key={index}
                      style={{ borderRadius: '15px' }}
                    >
                      {topic}
                    </div>
                  );
                })}
              </SwipeableViews>
            ) : (
              <div>
                <div
                  className='topicSelectorEl'
                  style={{ borderRadius: '15px' }}
                >
                  {topics[selectedIndex]}
                </div>
              </div>
            )
        }
      </div>
    </div>
  );
};

export default TopicSelector;
