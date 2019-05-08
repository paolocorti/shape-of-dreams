import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../appContext';
import Content4 from './Content4';
import Explore4 from './Explore4';
import Page from '../components/Page';

const Chapter4 = ({ history, activeIndex, pageIndex }) => {
  const context = useContext(AppContext);

  return (
    <Page chapter='chapter4' activeIndex={activeIndex} pageIndex={pageIndex}>
      {context.selectedView === 'explore' && <Explore4 />}
      {context.selectedView === 'content' && <Content4 history={history} />}
    </Page>
  );
};

export default Chapter4;
