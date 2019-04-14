import React from 'react';

export const AppContext = React.createContext({
  previousPath: null,
  actualPath: null,
  selectedView: 'landing',
  menuOpen: false,
  legendOpen: false,
  toggleMenu: () => {},
  toggleLegend: () => {},
  setPreviousPath: () => {},
  setActualPath: () => {},
  setSelectedView: () => {},
  resetSelectedView: () => {}
});
