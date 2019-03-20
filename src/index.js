import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'tachyons';
import './index.css';
import Landing from './Landing';
import Chapter1 from './Chapter1';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';

import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className='w-100'>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path={'/chapter1'} component={Chapter1} />
            <Route exact path={'/chapter2'} component={Chapter2} />
            <Route exact path={'/chapter3'} component={Chapter3} />
            <Route exact path={'/chapter4'} component={Chapter4} />
            <Route exact path={'/chapter5'} component={Chapter5} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
