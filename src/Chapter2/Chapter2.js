import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import Page from '../components/Page';
import NavigationFooter from '../components/NavigationFooter';
import Landing2 from './Landing2';
import Explore2 from './Explore2';
import Content2 from './Content2';

const Chapter2 = ({ history }) => {
  const [selectedView, setSelectedView] = useState('landing');

  const onSwipeMove = (position, event) => {
    console.log(`Moved ${position.x} pixels horizontally`);

    if (position.x && position.x > 200) {
      history.push(`/chapter1`);
    }

    if (position.x && position.x < -200) {
      history.push(`/chapter3`);
    }
  };

  return (
    <Page>
      <Swipe onSwipeMove={onSwipeMove} className='chapter1'>
        {selectedView === 'landing' && <Landing2 />}
        {selectedView === 'explore' && <Explore2 />}
        {selectedView === 'content' && <Content2 />}
        <NavigationFooter
          setSelectedView={setSelectedView}
          selectedView={selectedView}
        />
      </Swipe>
    </Page>
  );
};

export default Chapter2;
