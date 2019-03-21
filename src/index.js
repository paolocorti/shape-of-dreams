import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'tachyons';
import './index.css';
import Landing from './Landing';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';

import * as serviceWorker from './serviceWorker';

const supportsHistory = 'pushState' in window.history;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter forceRefresh={!supportsHistory}>
        <div className='w-100'>
          {/* <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path={'/chapter1'} component={Chapter1} />
            <Route exact path={'/chapter2'} component={Chapter2} />
            <Route exact path={'/chapter3'} component={Chapter3} />
            <Route exact path={'/chapter4'} component={Chapter4} />

            
          </Switch> */}

          <Route
            render={({ location }) => {
              const { pathname } = location;
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={pathname}
                    classNames='page'
                    timeout={{
                      enter: 1000,
                      exit: 1000
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
          />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
