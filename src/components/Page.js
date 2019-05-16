import React, { useContext, useState, useEffect } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';
import { isIOS, isMobile } from 'react-device-detect';

const gradients = {
  chapter1: 'linear-gradient(#e1eaef, #e4f3ec)',
  chapter2: 'linear-gradient(#e5f2ef, #d0d7eb)',
  chapter3: 'linear-gradient(#efe2e1, #ebf5f5)',
  chapter4: 'linear-gradient(#e6f1eb, #dde6ed)'
}

const Page = ({ activeIndex, pageIndex, chapter, children, location: { state } }) => {
  const context = useContext(AppContext);
  const [activePage, setActivePage] = useState(false)
  useEffect(() => {
    const active = activeIndex === pageIndex
    setActivePage(active)
  }, [activeIndex])

  const actualPath = context.actualPath;
  const previousPath = context.previousPath;

  const cx = classNames({
    page: true,
    // 'page--prev': state && state.prev,
    // 'page--left': previousPath < actualPath,
    'page-right': actualPath < previousPath,
    chapter1: chapter === 'chapter1',
    chapter2: chapter === 'chapter2',
    chapter3: chapter === 'chapter3',
    chapter4: chapter === 'chapter4',
    chapter5: chapter === 'chapter5'
  });

  const calculatedTop = activeIndex === pageIndex ? 0 : (activeIndex < pageIndex ? '100%' : '-100%')

  return (
    <section className={cx} style={{
      position: !isMobile ? (activeIndex === pageIndex ? 'relative' : 'absolute') : 'auto',
      top: !isMobile ? calculatedTop : 'auto',
      transition: '1s top',
      background: context.selectedView === 'content' ? 'white' : gradients[chapter]
    }}>
      <div className={`page__inner ${isIOS && 'fullheight'}`}>{children}</div>
    </section >
  );
};

export default withRouter(Page);
