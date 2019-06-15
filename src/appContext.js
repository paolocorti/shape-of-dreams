import React from 'react';

export const AppContext = React.createContext({
  previousPath: null,
  actualPath: null,
  selectedView: 'read',
  selectedIndex: 1,
  menuOpen: false,
  legendOpen: false,
  toggleMenu: () => { },
  toggleLegend: () => { },
  setPreviousPath: () => { },
  setActualPath: () => { },
  setSelectedView: () => { },
  resetSelectedView: () => { }
});
