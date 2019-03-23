import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../appContext';
import Content4 from './Content4';
import Page from '../components/Page';

const Chapter4 = ({ history }) => {
  const context = useContext(AppContext);

  return (
    <Page chapter='chapter4'>
      <Content4 />
    </Page>
  );
};

export default Chapter4;
