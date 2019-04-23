import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import './Selector.scss';

const styles = {
  slideContainer: {
    height: 50,
    width: 260
  }
};

const TopicSelector = ({ topics, onSwipe }) => {
  return (
    <div className='topicSelector relative mt3'>
      <div
        className='flex relative justify-center items-center w-100 h-100'
        style={{ borderRadius: '15px' }}
      >
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
      </div>
    </div>
  );
};

export default TopicSelector;
