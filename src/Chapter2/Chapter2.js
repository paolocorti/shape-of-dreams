import React, { useState, useContext } from 'react';
import Page from '../components/Page';
import { AppContext } from '../appContext';
import Explore2 from './Explore2';
import Content2 from './Content2';

const Chapter2 = ({ history, activeIndex, pageIndex }) => {
  const context = useContext(AppContext);

  return (
    <Page chapter='chapter2' activeIndex={activeIndex} pageIndex={pageIndex}>
      {context.selectedView === 'explore' && <Explore2 />}
      {context.selectedView === 'content' && <Content2 history={history} />}
    </Page>
  );
};

export default Chapter2;
