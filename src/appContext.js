import React from 'react';

export const AppContext = React.createContext({
  previousPath: null,
  actualPath: null,
  selectedView: 'read',
  selectedIndex: 1,
  menuOpen: false,
  legendOpen: false,
  aboutOpen: false,
  toggleMenu: () => { },
  toggleLegend: () => { },
  toggleAbout: () => { },
  setPreviousPath: () => { },
  setActualPath: () => { },
  setSelectedView: () => { },
  resetSelectedView: () => { }
});
