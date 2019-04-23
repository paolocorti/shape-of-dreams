import React from 'react';
import './BluePetal.scss';

const Grid = ({ selectedPetal, setSelectedPetal }) => {
  return (
    <g>
      <g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='300' y2='298.9' />
            <line className='grid2' x1='300' y1='294.8' x2='300' y2='27.5' />
            <path className='grid1' d='M300,25.4' />
          </g>
        </g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='300.4' y2='299.1' />
            <line className='grid2' x1='302.5' y1='295.6' x2='436.3' y2='64' />
            <line className='grid1' x1='437.3' y1='62.2' x2='437.8' y2='61.3' />
          </g>
        </g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='300.9' y2='299.4' />
            <line className='grid2' x1='304.4' y1='297.4' x2='536' y2='163.7' />
            <line
              className='grid1'
              x1='537.8'
              y1='162.7'
              x2='538.7'
              y2='162.2'
            />
          </g>
        </g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='301' y2='300' />
            <line className='grid2' x1='305.1' y1='300' x2='572.5' y2='300' />
            <line className='grid1' x1='574.6' y1='300' x2='575.6' y2='300' />
          </g>
        </g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='300.9' y2='300.4' />
            <line className='grid2' x1='304.4' y1='302.5' x2='536' y2='436.3' />
            <line
              className='grid1'
              x1='537.8'
              y1='437.3'
              x2='538.7'
              y2='437.8'
            />
          </g>
        </g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='300.4' y2='300.9' />
            <line className='grid2' x1='302.5' y1='304.4' x2='436.3' y2='536' />
            <line
              className='grid1'
              x1='437.3'
              y1='537.8'
              x2='437.8'
              y2='538.7'
            />
          </g>
        </g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='300' y2='301' />
            <line className='grid2' x1='300' y1='305.1' x2='300' y2='572.5' />
            <line className='grid1' x1='300' y1='574.6' x2='300' y2='575.6' />
          </g>
        </g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='299.4' y2='300.9' />
            <line className='grid2' x1='297.4' y1='304.4' x2='163.7' y2='536' />
            <line
              className='grid1'
              x1='162.7'
              y1='537.8'
              x2='162.2'
              y2='538.7'
            />
          </g>
        </g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='299.1' y2='300.4' />
            <line className='grid2' x1='295.6' y1='302.5' x2='64' y2='436.3' />
            <line className='grid1' x1='62.2' y1='437.3' x2='61.3' y2='437.8' />
          </g>
        </g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='298.9' y2='300' />
            <line className='grid2' x1='294.8' y1='300' x2='27.5' y2='300' />
            <line className='grid1' x1='25.4' y1='300' x2='24.4' y2='300' />
          </g>
        </g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='299.1' y2='299.4' />
            <line className='grid2' x1='295.6' y1='297.4' x2='64' y2='163.7' />
            <line className='grid1' x1='62.2' y1='162.7' x2='61.3' y2='162.2' />
          </g>
        </g>
        <g>
          <g>
            <line className='grid1' x1='300' y1='300' x2='299.4' y2='299.1' />
            <line className='grid2' x1='297.4' y1='295.6' x2='163.7' y2='64' />
            <line className='grid1' x1='162.7' y1='62.2' x2='162.2' y2='61.3' />
          </g>
        </g>
      </g>
      <g>
        <circle className='grid3 pulse' cx='300' cy='25.4' r='10.3' />
        <circle
          className=''
          cx='300'
          cy='25.4'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(0)}
        />
      </g>
      <g>
        <circle className='grid3 pulse' cx='437.3' cy='62.2' r='10.3' />
        <circle
          className=''
          cx='437.3'
          cy='62.2'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(1)}
        />
      </g>
      <g>
        <circle className='grid3 pulse' cx='537.8' cy='162.7' r='10.3' />
        <circle
          className=''
          cx='537.8'
          cy='162.7'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(2)}
        />
      </g>
      <g>
        <circle className='grid3 pulse' cx='574.6' cy='300' r='10.3' />
        <circle
          className=''
          cx='574.6'
          cy='300'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(3)}
        />
      </g>
      <g>
        <circle className='grid3 pulse' cx='537.8' cy='437.3' r='10.3' />
        <circle
          className=''
          cx='537.8'
          cy='437.3'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(4)}
        />
      </g>
      <g>
        <circle className='grid3 pulse' cx='437.3' cy='537.8' r='10.3' />
        <circle
          className=''
          cx='437.3'
          cy='537.8'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(5)}
        />
      </g>
      <g>
        <circle className='grid3 pulse' cx='300' cy='574.6' r='10.3' />
        <circle
          className=''
          cx='300'
          cy='574.6'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(6)}
        />
      </g>
      <g>
        <circle className='grid3 pulse' cx='162.7' cy='537.8' r='10.3' />
        <circle
          className=''
          cx='162.7'
          cy='537.8'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(7)}
        />
      </g>
      <g>
        <circle className='grid3 pulse' cx='62.1' cy='437.3' r='10.3' />
        <circle
          className=''
          cx='62.1'
          cy='437.3'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(8)}
        />
      </g>
      <g>
        <circle className='grid3 pulse' cx='25.4' cy='300' r='10.3' />
        <circle
          className=''
          cx='25.4'
          cy='300'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(9)}
        />
      </g>
      <g>
        <circle className='grid3 pulse' cx='62.2' cy='162.7' r='10.3' />
        <circle
          className=''
          cx='62.2'
          cy='162.7'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(10)}
        />
      </g>
      <g>
        <circle className='grid3 pulse' cx='162.7' cy='62.1' r='10.3' />
        <circle
          className=''
          cx='162.7'
          cy='62.1'
          r='20'
          fill='transparent'
          onClick={() => setSelectedPetal(11)}
        />
      </g>
      <g id='on'>
        <circle
          className='grid4'
          cx='300'
          cy='25.4'
          r='23.1'
          style={{
            opacity: selectedPetal === 0 ? 1 : 0
          }}
        />
        <circle
          className='grid4'
          cx='437.3'
          cy='62.2'
          r='23.1'
          style={{
            opacity: selectedPetal === 1 ? 1 : 0
          }}
        />
        <circle
          className='grid4'
          cx='537.8'
          cy='162.7'
          r='23.1'
          style={{
            opacity: selectedPetal === 2 ? 1 : 0
          }}
        />
        <circle
          className='grid4'
          cx='574.6'
          cy='300'
          r='23.1'
          style={{
            opacity: selectedPetal === 3 ? 1 : 0
          }}
        />
        <circle
          className='grid4'
          cx='537.8'
          cy='437.3'
          r='23.1'
          style={{
            opacity: selectedPetal === 4 ? 1 : 0
          }}
        />
        <circle
          className='grid4'
          cx='437.3'
          cy='537.8'
          r='23.1'
          style={{
            opacity: selectedPetal === 5 ? 1 : 0
          }}
        />
        <circle
          className='grid4'
          cx='300'
          cy='574.6'
          r='23.1'
          style={{
            opacity: selectedPetal === 6 ? 1 : 0
          }}
        />
        <circle
          className='grid4'
          cx='162.7'
          cy='537.8'
          r='23.1'
          style={{
            opacity: selectedPetal === 7 ? 1 : 0
          }}
        />
        <circle
          className='grid4'
          cx='62.1'
          cy='437.3'
          r='23.1'
          style={{
            opacity: selectedPetal === 8 ? 1 : 0
          }}
        />
        <circle
          className='grid4'
          cx='25.4'
          cy='300'
          r='23.1'
          style={{
            opacity: selectedPetal === 9 ? 1 : 0
          }}
        />
        <circle
          className='grid4'
          cx='62.2'
          cy='162.7'
          r='23.1'
          style={{
            opacity: selectedPetal === 10 ? 1 : 0
          }}
        />
        <circle
          className='grid4'
          cx='162.7'
          cy='62'
          r='23.1'
          style={{
            opacity: selectedPetal === 11 ? 1 : 0
          }}
        />
      </g>
    </g>
  );
};

export default Grid;
