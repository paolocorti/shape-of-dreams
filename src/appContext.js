import React from 'react';

export const AppContext = React.createContext({
  previousPath: null,
  actualPath: null,
  selectedView: 'landing',
  menuOpen: false,
  toggleMenu: () => {},
  setPreviousPath: () => {},
  setActualPath: () => {},
  setSelectedView: () => {},
  resetSelectedView: () => {}
});
