import React, { useContext } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';
import legendMob from './how-to-mob.png';
import legend from './how-to-desk.png';
import gotIt from './images/got-it.svg'
import { isMobileWithTablet } from '../constants';

const Legend = ({ history, location }) => {
  const context = useContext(AppContext);

  const goTo = path => {
    context.toggleLegend();
    history.push(path);
  };

  const closeLegend = () => {
    localStorage.setItem('legendSeen', true);
    context.toggleLegend();
  };

  return (
    <div
      className={`legend ${
        context.legendOpen ? 'open' : 'close'
        }`}
      onClick={closeLegend}
    >
      <div
        className='read-close-legend pointer'
        onClick={closeLegend}
        style={{
          zIndex: 999,
        }}
      >
        <img
          alt='Close menu icon'
          src={gotIt}
          width={isMobileWithTablet ? 140 : 180}
          style={{
            boxShadow: '3px 4px 12px 1px #65628e',
            borderRadius: '14px'
          }}
        />
      </div>
      <img
        alt='Legend'
        src={isMobileWithTablet ? legendMob : legend}
        style={{ position: 'absolute', width: '100%', top: 0 }}
      />
    </div>
  );
};

export default withRouter(Legend);
