import React, { useState, useContext } from 'react';
import Swipe from 'react-easy-swipe';
import Page from '../components/Page';
import { AppContext } from '../appContext';
import NavigationFooter from '../components/NavigationFooter';
import Landing3 from './Landing3';

const Chapter3 = ({ history }) => {
  const [selectedView, setSelectedView] = useState('landing');
  const context = useContext(AppContext);

  const onSwipeMove = position => {
    if (position.x && position.x > 200) {
      history.push({
        pathname: `/chapter2`,
        state: { prev: context.previousPath === `/chapter2` ? true : false }
      });
    }

    if (position.x && position.x < -200) {
      history.push({
        pathname: `/chapter4`,
        state: { prev: context.previousPath === `/chapter4` ? true : false }
      });
    }
  };

  const onSwipeEnd = () => {
    context.setPreviousPath(`/chapter3`);
  };

  return (
    <Page>
      <Swipe
        onSwipeMove={onSwipeMove}
        onSwipeEnd={onSwipeEnd}
        className='chapter3'
      >
        <Landing3 />
        <NavigationFooter
          setSelectedView={setSelectedView}
          selectedView={selectedView}
        />
      </Swipe>
    </Page>
  );
};

export default Chapter3;
