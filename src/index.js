import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import { AppContext } from './appContext';
import Routes from './Routes';
import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';

const supportsHistory = 'pushState' in window.history;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      previousPath: null,
      actualPath: null,
      selectedView: 'content',
      setPreviousPath: this.setPreviousPath,
      setActualPath: this.setActualPath,
      setSelectedView: this.setSelectedView,
      resetSelectedView: this.resetSelectedView,
      menuOpen: false,
      toggleMenu: this.toggleMenu,
      legendOpen: false,
      toggleLegend: this.toggleLegend
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
    // this.setState({
    //   selectedView: 'content'
    // });
  };

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  toggleLegend = () => {
    this.setState({
      legendOpen: !this.state.legendOpen
    });
  };

  render() {
    console.log(this.props);
    return (
      <HashRouter forceRefresh={!supportsHistory}>
        <AppContext.Provider value={this.state}>
          <Routes />
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
