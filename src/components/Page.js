import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';

function Page({ chapter, children, location: { state } }) {
  const cx = classNames({
    page: true,
    'page--prev': state && state.prev,
    'page--next': state && state.next,
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
}

export default withRouter(Page);
