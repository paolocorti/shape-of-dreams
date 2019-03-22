import React, { useState, useContext } from 'react';
import Page from '../components/Page';
import { AppContext } from '../appContext';
import Landing2 from './Landing2';
import Explore2 from './Explore2';
import Content2 from './Content2';

const Chapter2 = ({ history }) => {
  const context = useContext(AppContext);

  return (
    <Page chapter='chapter2'>
      {context.selectedView === 'landing' && <Landing2 />}
      {context.selectedView === 'explore' && <Explore2 />}
      {context.selectedView === 'content' && <Content2 />}
    </Page>
  );
};

export default Chapter2;
