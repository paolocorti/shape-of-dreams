import React, { useState, useContext } from 'react';
import Swipe from 'react-easy-swipe';
import Page from '../components/Page';
import { AppContext } from '../appContext';
import NavigationFooter from '../components/NavigationFooter';
import Landing2 from './Landing2';
import Explore2 from './Explore2';
import Content2 from './Content2';
import Header from '../components/Header';

const Chapter2 = ({ history }) => {
  const [selectedView, setSelectedView] = useState('landing');
  const context = useContext(AppContext);

  const onSwipeMove = position => {
    if (position.x && position.x > 200) {
      history.push({
        pathname: `/chapter1`,
        state: { prev: context.previousPath === `/chapter1` ? true : false }
      });
    }

    if (position.x && position.x < -200) {
      history.push({
        pathname: `/chapter3`,
        state: { prev: context.previousPath === `/chapter3` ? true : false }
      });
    }
  };

  const onSwipeEnd = () => {
    context.setPreviousPath(`/chapter2`);
  };

  return (
    <Page chapter='chapter2'>
      <Header />
      <Swipe onSwipeMove={onSwipeMove} onSwipeEnd={onSwipeEnd}>
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
