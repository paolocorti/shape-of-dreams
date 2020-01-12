import { isMobile, isTablet } from 'react-device-detect';
import { withOrientationChange } from 'react-device-detect';

export const years = [
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019
];

export const languages = ['EN', 'SP', 'FR', 'PO', 'RU', 'JP', 'AR'];

export const isMobileWithTablet = isMobile ? (isTablet ? (window.innerWidth < window.innerHeight ? true : false) : true) : false;
console.log('isMobileWithTablet', isMobileWithTablet)