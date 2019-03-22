import React, { useState, useContext, useEffect } from 'react';
import Swipe from 'react-easy-swipe';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AppContext } from '../appContext';
import Page from '../components/Page';
import Landing1 from './Landing1';
import Explore1 from './Explore1';
import Content1 from './Content1';

const Chapter1 = ({ history }) => {
  const context = useContext(AppContext);

  return (
    <Page chapter='chapter1'>
      {/* <TransitionGroup>
        <CSSTransition
          key={context.selectedView}
          classNames='view'
          timeout={{
            enter: 5000,
            exit: 5000
          }}
        > */}
      <React.Fragment>
        {context.selectedView === 'content' && <Content1 />}
        {context.selectedView === 'explore' && <Explore1 />}
      </React.Fragment>
      {/* </CSSTransition>
      </TransitionGroup> */}
    </Page>
  );
};

export default Chapter1;
