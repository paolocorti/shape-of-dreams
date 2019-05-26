import React, { useState, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { AppContext } from '../appContext';
import Page from '../components/Page';
import Explore1 from './Explore1';
import Content1 from './Content1';
import { isMobile } from 'react-device-detect';

const Chapter1 = ({ history, activeIndex, pageIndex }) => {
  const context = useContext(AppContext);

  return (
    <Page chapter='chapter1' activeIndex={activeIndex} pageIndex={pageIndex}>
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
        {context.selectedView === 'read' && <Content1 history={history} />}
        {context.selectedView === 'explore' && <Explore1 activeIndex={activeIndex} history={history} />}
      </React.Fragment>
      {/* </CSSTransition>
      </TransitionGroup> */}
    </Page>
  );
};

export default Chapter1;
