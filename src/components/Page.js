import React, { useContext } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';

const Page = ({ chapter, children, location: { state } }) => {
  const context = useContext(AppContext);

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
  return (
    <section className={cx}>
      <div className='page__inner'>{children}</div>
    </section>
  );
};

export default withRouter(Page);
