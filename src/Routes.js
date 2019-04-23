import React, { useContext } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';
import { AppContext } from './appContext';
import Landing from './Landing';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Header from './components/Header';
import NavigationFooter from './components/NavigationFooter';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Menu from './components/Menu';
import Legend from './components/Legend';

const Routes = ({ location }) => {
  const { pathname } = location;
  const context = useContext(AppContext);

  console.log(context);

  return (
    <div className={`w-100 ${pathname === '/' ? 'h-100' : ''}`}>
      {pathname !== '/' && <Header />}
      <Menu />

      {context.menuOpen && <Menu />}

      {context.legendOpen && <Legend />}

      <Route exact path='/' component={Landing} />

      {/* {pathname !== '/' && (
        <img
          src={'/images/swipe-left.svg'}
          style={{
            position: 'absolute',
            left: '10px',
            zIndex: 99,
            top: '50%',
            marginTop: '-80px'
          }}
          height={160}
        />
      )} */}

      {/* {pathname !== '/' && (
        <img
          src={'/images/swipe-right.svg'}
          style={{
            position: 'absolute',
            right: '10px',
            zIndex: 99,
            top: '50%',
            marginTop: '-80px'
          }}
          height={160}
        />
      )} */}

      {pathname !== '/' && (
        <SwipeableRoutes
          containerStyle={{
            height:
              context.selectedView === 'content' ? 'calc(100vh - 50px)' : '100%'
          }}
          onChangeIndex={context.resetSelectedView}
        >
          <Route exact path={'/chapter1'} component={Chapter1} />
          <Route exact path={'/chapter2'} component={Chapter2} />
          <Route exact path={'/chapter3'} component={Chapter3} />
          <Route exact path={'/chapter4'} component={Chapter4} />
        </SwipeableRoutes>
      )}

      {/* <Route
        render={({ location }) => {
          const { pathname } = location;
          return (
            <TransitionGroup>
              <CSSTransition
                key={pathname}
                classNames='page'
                timeout={{
                  enter: 2000,
                  exit: 2000
                }}
              >
                <Route
                  location={location}
                  render={() => (
                    <Switch>
                      <Route exact path='/' component={Landing} />
                      <Route
                        path={'/:type(chapter1|chapter2|chapter3|chapter4)?'}
                        children={({ match }) => (
                          // <SwipeableRoutes
                          //   containerStyle={{
                          //     height: '100%',
                          //     width: '100%'
                          //   }}
                          //   onChangeIndex={context.resetSelectedView}
                          // >
                          <Route
                            exact
                            path={'/chapter1'}
                            component={Chapter1}
                          />
                          //   <Route
                          //     exact
                          //     path={'/chapter2'}
                          //     component={Chapter2}
                          //   />
                          //   <Route
                          //     exact
                          //     path={'/chapter3'}
                          //     component={Chapter3}
                          //   />
                          //   <Route
                          //     exact
                          //     path={'/chapter4'}
                          //     component={Chapter4}
                          //   />
                          // </SwipeableRoutes>
                        )}
                      />
                    </Switch>
                  )}
                />
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      /> */}

      {pathname !== '/' && <NavigationFooter />}
    </div>
  );
};

export default withRouter(Routes);
