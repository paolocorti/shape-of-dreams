import React from 'react';

export const AppContext = React.createContext({
  previousPath: null,
  actualPath: null,
  selectedView: 'landing',
  setPreviousPath: () => {},
  setActualPath: () => {},
  setSelectedView: () => {},
  resetSelectedView: () => {}
});
