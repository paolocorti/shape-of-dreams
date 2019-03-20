import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import NavigationFooter from '../components/NavigationFooter';
import Landing3 from './Landing3';

const Chapter3 = ({ history }) => {
  const [selectedView, setSelectedView] = useState('landing');

  const onSwipeMove = (position, event) => {
    console.log(`Moved ${position.x} pixels horizontally`);

    if (position.x && position.x > 200) {
      history.push(`/chapter2`);
    }

    if (position.x && position.x < -200) {
      history.push(`/chapter4`);
    }
  };

  console.log(selectedView);

  return (
    <Swipe onSwipeMove={onSwipeMove} className='chapter3'>
      <Landing3 />
      <NavigationFooter
        setSelectedView={setSelectedView}
        selectedView={selectedView}
      />
    </Swipe>
  );
};

export default Chapter3;
