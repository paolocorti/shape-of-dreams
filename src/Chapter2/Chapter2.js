import React, { useState, useContext } from 'react';
import Page from '../components/Page';
import { AppContext } from '../appContext';
import Explore2 from './Explore2';
import Content2 from './Content2';

const Chapter2 = ({ history, activeIndex, pageIndex }) => {
  const context = useContext(AppContext);
  console.log(activeIndex)
  return (
    <Page chapter='chapter2' activeIndex={activeIndex} pageIndex={pageIndex}>
      {context.selectedView === 'explore' && <Explore2 history={history} activeIndex={activeIndex} />}
      {context.selectedView === 'read' && <Content2 history={history} activeIndex={activeIndex} />}
    </Page>
  );
};

export default Chapter2;
