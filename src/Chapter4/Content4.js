import React, {useContext} from 'react';
import content1 from './cap4-1.jpg'
import { AppContext } from '../appContext';

const Content4 = ({}) => {
  const context = useContext(AppContext);

  return (
    <div className='w-100 bg-white'>
      <h4 className='tl fw6 mv0 ph4'>Chapter 4</h4>
      <h1 className='tl fw7 mt0 ph4'>Dreams that Connect Us</h1>
      <div className='ph4 tj f4'>
      <p className='lh-title'>
      What are the dreams that have been looked for in more than one language? We have analyzed the network of dreams to see what are the subjects that create such connections.
        </p>
      </div>
      <div className='w-100 tc mv4'>
        <img src={content1} width='100%' alt='chapter 4' />
      </div>
      <div className='ph4 tj f4'>
        <p className='lh-title'>
        Tap on START EXPLORING to see the networks of dreams.
        </p>
      </div>
      <div className='w-100 tc pb4'>
        <div className='flex flex-column ph4'>
          <div className='raleway fw7 tl' style={{ fontSize: '16px', color: '#43449a', letterSpacing: '1px'}}>START EXPLORING</div>
          <img src={'images/down-arrow.svg'} width={35} onClick={() => context.setSelectedView('explore')} />
        </div>
      </div>
    </div>
  );
};

export default Content4;
