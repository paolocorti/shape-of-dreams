import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';
import legend from './legend.svg';

const Legend = ({ history, location }) => {
  const context = useContext(AppContext);
  const { pathname } = location;

  const goTo = path => {
    context.toggleLegend();
    history.push(path);
  };

  const closeLegend = () => {
    context.toggleLegend();
  };

  return (
    <div
      className={`legend w-100 flex flex-column justify-around fixed top-0 bottom-0 left-0 right-0 ${
        context.legendOpen ? 'open' : 'close'
        }`}
      onClick={closeLegend}
    >
      <img
        src={legend}
        style={{ position: 'absolute', width: '100%', top: 0 }}
      />

      {/* <div className='w-100 flex items-center ph4'>
        <div className='white tl'>
          <img
            src={'/images/close-white.svg'}
            alt='Close menu icon'
            width={30}
          />
        </div>
      </div> */}
    </div>
  );
};

export default withRouter(Legend);
