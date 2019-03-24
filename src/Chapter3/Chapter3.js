import React, { useState, useContext } from 'react';
import Page from '../components/Page';
import { AppContext } from '../appContext';
import Content3 from './Content3';
import Explore3 from './Explore3';

const Chapter3 = ({ history }) => {
  const context = useContext(AppContext);

  return (
    <Page chapter='chapter3'>
      {context.selectedView === 'explore' && <Explore3 />}
      {context.selectedView === 'content' && <Content3 />}
    </Page>
  );
};

export default Chapter3;
