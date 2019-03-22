import React, { useState, useContext } from 'react';
import Swipe from 'react-easy-swipe';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AppContext } from '../appContext';
import Page from '../components/Page';
import NavigationFooter from '../components/NavigationFooter';
import Landing1 from './Landing1';
import Explore1 from './Explore1';
import Content1 from './Content1';
import Header from '../components/Header';

const Chapter1 = ({ history }) => {
  const [selectedView, setSelectedView] = useState('landing');
  const context = useContext(AppContext);

  const onSwipeMove = position => {
    if (position.x && position.x > 200) {
      history.push({
        pathname: `/chapter4`,
        state: { prev: context.previousPath === `/chapter4` ? true : false }
      });
    }

    if (position.x && position.x < -200) {
      history.push({
        pathname: `/chapter2`,
        state: { prev: context.previousPath === `/chapter2` ? true : false }
      });
    }
  };

  const onSwipeEnd = () => {
    context.setPreviousPath(`/chapter1`);
  };

  return (
    <Page chapter='chapter1'>
      <Header />
      <Swipe onSwipeMove={onSwipeMove} onSwipeEnd={onSwipeEnd}>
        <TransitionGroup>
          <CSSTransition
            key={selectedView}
            classNames='view'
            timeout={{
              enter: 2000,
              exit: 2000
            }}
          >
            <React.Fragment>
              {selectedView === 'landing' && <Landing1 />}
              {selectedView === 'explore' && <Explore1 />}
              {selectedView === 'content' && <Content1 />}
            </React.Fragment>
          </CSSTransition>
        </TransitionGroup>
        <NavigationFooter
          setSelectedView={setSelectedView}
          selectedView={selectedView}
        />
      </Swipe>
    </Page>
  );
};

export default Chapter1;
