import React, { useContext } from 'react';
import Page from '../components/Page';
import { AppContext } from '../appContext';
import Explore2 from './Explore2';
import Content2 from './Content2';

const Chapter2 = ({ history, activeIndex, pageIndex }) => {
  const context = useContext(AppContext);
  const index = activeIndex || context.selectedIndex;

  return (
    <Page chapter='chapter2' activeIndex={index} pageIndex={pageIndex}>
      {context.selectedView === 'explore' && <Explore2 history={history} activeIndex={index} />}
      {context.selectedView === 'read' && <Content2 history={history} activeIndex={index} />}
    </Page>
  );
};

export default Chapter2;
