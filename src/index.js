import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SwipeableRoutes from 'react-swipeable-routes';
import { AppContext } from './appContext';
import 'tachyons';
import './index.css';
import Landing from './Landing';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Header from './components/Header';
import NavigationFooter from './components/NavigationFooter';
import * as serviceWorker from './serviceWorker';

const supportsHistory = 'pushState' in window.history;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousPath: null,
      actualPath: null,
      selectedView: 'landing',
      setPreviousPath: this.setPreviousPath,
      setActualPath: this.setActualPath,
      setSelectedView: this.setSelectedView
    };
  }

  setPreviousPath = path => {
    this.setState({
      previousPath: path
    });
  };

  setActualPath = path => {
    this.setState({
      actualPath: path
    });
  };

  setSelectedView = view => {
    this.setState({
      selectedView: view
    });
  };

  resetSelectedView = () => {
    this.setState({
      selectedView: 'landing'
    });
  };

  render() {
    return (
      <HashRouter forceRefresh={!supportsHistory}>
        <AppContext.Provider value={this.state}>
          <div className='w-100'>
            <Route exact path='/' component={Landing} />

            <Header />

            <SwipeableRoutes
              containerStyle={{ height: '100%' }}
              onChangeIndex={this.resetSelectedView}
            >
              <Route exact path={'/chapter1'} component={Chapter1} />
              <Route exact path={'/chapter2'} component={Chapter2} />
              <Route exact path={'/chapter3'} component={Chapter3} />
              <Route exact path={'/chapter4'} component={Chapter4} />
            </SwipeableRoutes>

            <NavigationFooter />
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
                              exact
                              path={'/chapter1'}
                              component={Chapter1}
                            />
                            <Route
                              exact
                              path={'/chapter2'}
                              component={Chapter2}
                            />
                            <Route
                              exact
                              path={'/chapter3'}
                              component={Chapter3}
                            />
                            <Route
                              exact
                              path={'/chapter4'}
                              component={Chapter4}
                            />
                          </Switch>
                        )}
                      />
                    </CSSTransition>
                  </TransitionGroup>
                );
              }}
            /> */}
          </div>
        </AppContext.Provider>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
