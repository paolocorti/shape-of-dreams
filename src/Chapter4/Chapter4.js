import React, { useState, useContext } from 'react';
import Swipe from 'react-easy-swipe';
import { AppContext } from '../appContext';
import NavigationFooter from '../components/NavigationFooter';
import Landing4 from './Landing4';
import Page from '../components/Page';

const Chapter4 = ({ history }) => {
  const [selectedView, setSelectedView] = useState('landing');
  const context = useContext(AppContext);

  const onSwipeMove = position => {
    if (position.x && position.x > 200) {
      history.push({
        pathname: `/chapter3`,
        state: { prev: context.previousPath === `/chapter3` ? true : false }
      });
    }

    if (position.x && position.x < -200) {
      history.push({
        pathname: `/chapter1`,
        state: { prev: context.previousPath === `/chapter1` ? true : false }
      });
    }
  };

  const onSwipeEnd = () => {
    context.setPreviousPath(`/chapter4`);
  };

  return (
    <Page>
      <Swipe
        onSwipeMove={onSwipeMove}
        onSwipeEnd={onSwipeEnd}
        className='chapter4'
      >
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
