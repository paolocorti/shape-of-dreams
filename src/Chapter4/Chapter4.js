import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../appContext';
import Landing4 from './Landing4';
import Page from '../components/Page';

const Chapter4 = ({ history }) => {
  const context = useContext(AppContext);

  return (
    <Page chapter='chapter4'>
      <Landing4 />
    </Page>
  );
};

export default Chapter4;
