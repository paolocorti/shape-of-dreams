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
    <div className='topicSelector relative mt4'>
      <div className='flex relative justify-center items-center w-100 h-100'>
        <SwipeableViews
          containerStyle={styles.slideContainer}
          axis='y'
          resistance
          onChangeIndex={index => onSwipe(index)}
        >
          {topics.map((topic, index) => {
            return (
              <div className='topicSelectorEl' key={index}>
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
