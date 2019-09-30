import React, { useContext } from 'react';
import { AppContext } from '../appContext';
import Page from '../components/Page';
import Explore1 from './Explore1';
import Content1 from './Content1';

const Chapter1 = ({ history, activeIndex, pageIndex }) => {
  const context = useContext(AppContext);
  const index = activeIndex || context.selectedIndex;

  return (
    <Page chapter='chapter1' activeIndex={index} pageIndex={pageIndex}>
      <React.Fragment>
        {context.selectedView === 'read' && <Content1 activeIndex={index} history={history} />}
        {context.selectedView === 'explore' && <Explore1 activeIndex={index} history={history} />}
      </React.Fragment>
    </Page>
  );
};

export default Chapter1;
