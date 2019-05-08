import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';
import { isIOS } from 'react-device-detect';
import Chapter1 from '../Chapter1';
import Chapter2 from '../Chapter2';
import Chapter3 from '../Chapter3';
import Chapter4 from '../Chapter4';
import SwipeableViews from 'react-swipeable-views';

const Container = ({ location, history }) => {
  const [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
    console.log('here')
    const index = Number(location.pathname.replace('/chapter', ''))
    setActiveIndex(index)
  }, [location])

  return (
    <div style={{ height: '100%', overflow: 'hidden'}}>
      <Chapter1 history={history} pageIndex={1} activeIndex={activeIndex}></Chapter1>
      <Chapter2 history={history} pageIndex={2} activeIndex={activeIndex}></Chapter2>
      <Chapter3 history={history} pageIndex={3} activeIndex={activeIndex}></Chapter3>
      <Chapter4 history={history} pageIndex={4} activeIndex={activeIndex}></Chapter4>
    </div>
  );
};

export default withRouter(Container);
