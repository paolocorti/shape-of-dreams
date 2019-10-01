import React, { useContext } from 'react';
import { AppContext } from '../appContext';
import Content4 from './Content4';
import Explore4 from './Explore4';
import Page from '../components/Page';

const Chapter4 = ({ history, activeIndex, pageIndex }) => {
  const context = useContext(AppContext);
  const index = activeIndex || context.selectedIndex;

  return (
    <Page chapter='chapter4' activeIndex={index} pageIndex={pageIndex}>
      {context.selectedView === 'explore' && <Explore4 history={history} activeIndex={index} />}
      {context.selectedView === 'read' && <Content4 history={history} activeIndex={index} />}
    </Page>
  );
};

export default Chapter4;
