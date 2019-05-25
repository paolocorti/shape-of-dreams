import React from 'react';

export const AppContext = React.createContext({
  previousPath: null,
  actualPath: null,
  selectedView: 'read',
  menuOpen: false,
  legendOpen: false,
  toggleMenu: () => {},
  toggleLegend: () => {},
  setPreviousPath: () => {},
  setActualPath: () => {},
  setSelectedView: () => {},
  resetSelectedView: () => {}
});
