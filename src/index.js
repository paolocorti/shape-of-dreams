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

    const legendOpen = localStorage.getItem('legendSeen') ? false : true;

    this.state = {
      previousPath: null,
      actualPath: null,
      selectedView: 'read',
      selectedIndex: 1,
      setPreviousPath: this.setPreviousPath,
      setActualPath: this.setActualPath,
      setSelectedView: this.setSelectedView,
      resetSelectedView: this.resetSelectedView,
      menuOpen: false,
      toggleMenu: this.toggleMenu,
      legendOpen: legendOpen,
      toggleLegend: this.toggleLegend,
      aboutOpen: false,
      toggleAbout: this.toggleAbout,
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

  resetSelectedView = (index) => {
    this.setState({
      selectedIndex: index + 1
    });
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

  toggleAbout = () => {
    this.setState({
      aboutOpen: !this.state.aboutOpen
    });
  };

  render() {
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
