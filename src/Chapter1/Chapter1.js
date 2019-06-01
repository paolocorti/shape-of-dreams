import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../appContext';
import Page from '../components/Page';
import Explore1 from './Explore1';
import Content1 from './Content1';
import { isMobile } from 'react-device-detect';

const Chapter1 = ({ history, activeIndex, pageIndex }) => {
  const context = useContext(AppContext);

  return (
    <Page chapter='chapter1' activeIndex={activeIndex} pageIndex={pageIndex}>
      <React.Fragment>
        {context.selectedView === 'read' && <Content1 activeIndex={activeIndex} history={history} />}
        {context.selectedView === 'explore' && <Explore1 activeIndex={activeIndex} history={history} />}
      </React.Fragment>
    </Page>
  );
};

export default Chapter1;
