import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import Header from '../components/Header';

function Page({ children, location: { state } }) {
  const cx = classNames({
    page: true,
    'page--prev': state && state.prev,
    'page--next': state && state.next
  });
  return (
    <section className={cx}>
      <Header />
      <div className='page__inner'>{children}</div>
    </section>
  );
}

export default withRouter(Page);
