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
import Container from './components/Container';
import NavigationFooter from './components/NavigationFooter';
import Menu from './components/Menu';
import Legend from './components/Legend';
import About from './components/About';
import { isMobileWithTablet } from './constants';


const Routes = ({ location }) => {
  const { pathname } = location;
  const context = useContext(AppContext);

  return (
    <div className={`w-100 ${pathname === '/' ? 'h-100' : ''}`} style={{ height: isMobileWithTablet ? 'auto' : '100%', overflow: isMobileWithTablet ? 'auto' : 'hidden' }}>
      {pathname !== '/' && <Header />}
      {pathname !== '/' && <Menu />}
      {pathname !== '/' && <Legend />}
      {pathname !== '/' && <About />}
      <Route exact path='/' component={Landing} />
      {pathname !== '/' && isMobileWithTablet && (
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
        !isMobileWithTablet && (
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
