import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import NavigationFooter from '../components/NavigationFooter';
import Landing1 from './Landing1';
import Explore1 from './Explore1';
import Content1 from './Content1';

const Chapter1 = ({ history }) => {
  const [selectedView, setSelectedView] = useState('landing');

  const onSwipeRight = () => {
    history.push(`/chapter2`);
  };

  const onSwipeLeft = () => {
    history.push(`/chapter5`);
  };

  const goToExplore1 = () => {
    history.push(`/explore1`);
  };

  console.log(selectedView);

  return (
    <Swipe
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      className='chapter1'
    >
      {selectedView === 'landing' && <Landing1 />}
      {selectedView === 'explore' && <Explore1 />}
      {selectedView === 'content' && <Content1 />}
      <NavigationFooter
        setSelectedView={setSelectedView}
        selectedView={selectedView}
      />
    </Swipe>
  );
};

export default Chapter1;
