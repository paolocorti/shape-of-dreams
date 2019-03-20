import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import NavigationFooter from '../components/NavigationFooter';
import Landing2 from './Landing2';

const Chapter2 = ({ history }) => {
  const [selectedView, setSelectedView] = useState('landing');

  const onSwipeMove = (position, event) => {
    console.log(`Moved ${position.x} pixels horizontally`);

    if (position.x && position.x > 400) {
      history.push(`/chapter1`);
    }

    if (position.x && position.x < -400) {
      history.push(`/chapter3`);
    }
  };

  return (
    <Swipe onSwipeMove={onSwipeMove} className='chapter1'>
      <Landing2 />
      <NavigationFooter
        setSelectedView={setSelectedView}
        selectedView={selectedView}
      />
    </Swipe>
  );
};

export default Chapter2;
