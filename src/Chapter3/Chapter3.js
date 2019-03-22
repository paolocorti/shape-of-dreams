import React, { useState, useContext, useEffect } from 'react';
import Page from '../components/Page';
import { AppContext } from '../appContext';
import Landing3 from './Landing3';

const Chapter3 = ({ history }) => {
  const context = useContext(AppContext);

  return (
    <Page chapter='chapter3'>
      <Landing3 />
    </Page>
  );
};

export default Chapter3;
