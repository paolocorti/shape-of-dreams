import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';

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
      className={`legend w-100 flex flex-column justify-around fixed top-0 bottom-0 left-0 right-0 ${context.legendOpen &&
        'open'}`}
    >
      {
        pathname === '/chapter1' &&
        (
          <div className='w-100 flex items-center ph4' onClick={() => goTo('/')}>
            <div className='white tl' style={{ fontSize: '34px' }}>
              HOW TO READ IT
            </div>
            <p>
              
            </p>
          </div>
        )
        
      }
      
      <div className='w-100 flex items-center ph4'>
        <div className='white tl' onClick={closeLegend}>
          <img
            src={'/images/close-white.svg'}
            alt='Close menu icon'
            width={30}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Legend);
