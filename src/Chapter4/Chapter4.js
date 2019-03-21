import React, { useState } from 'react';
import Swipe from 'react-easy-swipe';
import NavigationFooter from '../components/NavigationFooter';
import Landing4 from './Landing4';
import Page from '../components/Page';

const Chapter4 = ({ history }) => {
  const [selectedView, setSelectedView] = useState('landing');

  const onSwipeMove = (position, event) => {
    console.log(`Moved ${position.x} pixels horizontally`);

    if (position.x && position.x > 200) {
      history.push(`/chapter3`);
    }

    if (position.x && position.x < -200) {
      history.push(`/chapter1`);
    }
  };

  return (
    <Page>
      <Swipe onSwipeMove={onSwipeMove} className='chapter4'>
        <Landing4 />
        <NavigationFooter
          setSelectedView={setSelectedView}
          selectedView={selectedView}
        />
      </Swipe>
    </Page>
  );
};

export default Chapter4;
