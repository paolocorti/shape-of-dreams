import React, { useState, useContext } from 'react';
import Page from '../components/Page';
import { AppContext } from '../appContext';
import Content3 from './Content3';
import Explore3 from './Explore3';

const Chapter3 = ({ history, activeIndex, pageIndex }) => {
  const context = useContext(AppContext);
  const index = activeIndex || context.selectedIndex;

  return (
    <Page chapter='chapter3' activeIndex={index} pageIndex={pageIndex}>
      {context.selectedView === 'explore' && <Explore3 history={history} activeIndex={index} />}
      {context.selectedView === 'read' && <Content3 history={history} activeIndex={index} />}
    </Page>
  );
};

export default Chapter3;
