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
        <circle className='grid4 pulse' cx='300' cy='25.4' r='15' />
        <circle className='grid3' cx='300' cy='25.4' r={selectedPetal === 0 ? 8 : 4} />
        <circle
          className=''
          cx='300'
          cy='25.4'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(0)}
          onMouseEnter={() => setSelectedPetal(0)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>
      <g>
        <circle className='grid4 pulse' cx='437.3' cy='62.2' r='15' />
        <circle className='grid3' cx='437.3' cy='62.2' r={selectedPetal === 1 ? 8 : 4} />
        <circle
          className=''
          cx='437.3'
          cy='62.2'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(1)}
          onMouseEnter={() => setSelectedPetal(1)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>
      <g>
        <circle className='grid4 pulse' cx='537.8' cy='162.7' r='15' />
        <circle className='grid3' cx='537.8' cy='162.7' r={selectedPetal === 2 ? 8 : 4} />
        <circle
          className=''
          cx='537.8'
          cy='162.7'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(2)}
          onMouseEnter={() => setSelectedPetal(2)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>
      <g>
        <circle className='grid4 pulse' cx='574.6' cy='300' r='15' />
        <circle className='grid3' cx='574.6' cy='300' r={selectedPetal === 3 ? 8 : 4} />
        <circle
          className=''
          cx='574.6'
          cy='300'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(3)}
          onMouseEnter={() => setSelectedPetal(3)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>
      <g>
        <circle className='grid4 pulse' cx='537.8' cy='437.3' r='15' />
        <circle className='grid3' cx='537.8' cy='437.3' r={selectedPetal === 4 ? 8 : 4} />
        <circle
          className=''
          cx='537.8'
          cy='437.3'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(4)}
          onMouseEnter={() => setSelectedPetal(4)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>
      <g>
        <circle className='grid4 pulse' cx='437.3' cy='537.8' r='15' />
        <circle className='grid3' cx='437.3' cy='537.8' r={selectedPetal === 5 ? 8 : 4} />
        <circle
          className=''
          cx='437.3'
          cy='537.8'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(5)}
          onMouseEnter={() => setSelectedPetal(5)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>
      <g>
        <circle className='grid4 pulse' cx='300' cy='574.6' r='15' />
        <circle className='grid3' cx='300' cy='574.6' r={selectedPetal === 6 ? 8 : 4} />
        <circle
          className=''
          cx='300'
          cy='574.6'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(6)}
          onMouseEnter={() => setSelectedPetal(6)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>
      <g>
        <circle className='grid4 pulse' cx='162.7' cy='537.8' r='15' />
        <circle className='grid3' cx='162.7' cy='537.8' r={selectedPetal === 7 ? 8 : 4} />
        <circle
          className=''
          cx='162.7'
          cy='537.8'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(7)}
          onMouseEnter={() => setSelectedPetal(7)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>
      <g>
        <circle className='grid4 pulse' cx='62.1' cy='437.3' r='15' />
        <circle className='grid3' cx='62.1' cy='437.3' r={selectedPetal === 8 ? 8 : 4} />
        <circle
          className=''
          cx='62.1'
          cy='437.3'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(8)}
          onMouseEnter={() => setSelectedPetal(8)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>
      <g>
        <circle className='grid4 pulse' cx='25.4' cy='300' r='15' />
        <circle className='grid3' cx='25.4' cy='300' r={selectedPetal === 9 ? 8 : 4} />
        <circle
          className=''
          cx='25.4'
          cy='300'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(9)}
          onMouseEnter={() => setSelectedPetal(9)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>
      <g>
        <circle className='grid4 pulse' cx='62.2' cy='162.7' r='15' />
        <circle className='grid3' cx='62.2' cy='162.7' r={selectedPetal === 10 ? 8 : 4} />
        <circle
          className=''
          cx='62.2'
          cy='162.7'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(10)}
          onMouseEnter={() => setSelectedPetal(10)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>
      <g>
        <circle className='grid4 pulse' cx='162.7' cy='62.1' r='15' />
        <circle className='grid3' cx='162.7' cy='62.1' r={selectedPetal === 11 ? 8 : 4} />
        <circle
          className=''
          cx='162.7'
          cy='62.1'
          r='30'
          fill='transparent'
          onClick={() => setSelectedPetal(11)}
          onMouseEnter={() => setSelectedPetal(11)}
          onMouseLeave={() => setSelectedPetal(null)}
        />
      </g>

    </g>
  );
};

export default Grid;
