import React, { useContext } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';
import { spring, AnimatedRoute } from 'react-router-transition';
import { AppContext } from './appContext';
import Landing from './Landing';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Header from './components/Header';
import Container from './components/Container';
import NavigationFooter from './components/NavigationFooter';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Menu from './components/Menu';
import Legend from './components/Legend';
import { isMobile } from 'react-device-detect';

const Routes = ({ location }) => {
  const { pathname } = location;
  const context = useContext(AppContext);

  return (
    <div className={`w-100 ${pathname === '/' ? 'h-100' : ''}`} style={{ height: isMobile ? 'auto' : '100%', overflow: isMobile ? 'auto' : 'hidden' }}>
      {pathname !== '/' && <Header />}

      {pathname !== '/' && <Menu />}

      {pathname !== '/' && <Legend />}

      <Route exact path='/' component={Landing} />

      {pathname !== '/' && isMobile && (
        <img
          src={'/images/swipe-left.svg'}
          style={{
            position: 'absolute',
            left: '5px',
            zIndex: 99,
            top: '50%',
            marginTop: '-18px'
          }}
          height={36}
        />
      )}

      {pathname !== '/' && isMobile && (
        <img
          src={'/images/swipe-right.svg'}
          style={{
            position: 'absolute',
            right: '5px',
            zIndex: 99,
            top: '50%',
            marginTop: '-18px'
          }}
          height={36}
        />
      )}

      {pathname !== '/' && isMobile && (
        <SwipeableRoutes
          containerStyle={{
            height:
              context.selectedView === 'read' ? 'calc(100vh - 50px)' : '100%'
          }}
          onChangeIndex={context.resetSelectedView}
        >
          <Route exact path={'/chapter1'} component={Chapter1} />
          <Route exact path={'/chapter2'} component={Chapter2} />
          <Route exact path={'/chapter3'} component={Chapter3} />
          <Route exact path={'/chapter4'} component={Chapter4} />
        </SwipeableRoutes>
      )}
      {
        !isMobile && (
          <Switch>
            <Route exact path={'/chapter1'} component={Container} />
            <Route exact path={'/chapter2'} component={Container} />
            <Route exact path={'/chapter3'} component={Container} />
            <Route exact path={'/chapter4'} component={Container} />
          </Switch>
        )
      }

      {pathname !== '/' && <NavigationFooter />}
    </div>
  );
};

export default withRouter(Routes);
