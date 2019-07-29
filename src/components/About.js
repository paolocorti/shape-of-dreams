import React, { useContext } from 'react';
import './About.scss';
import { AppContext } from '../appContext';
import closeWhite from './images/close-white.svg'
import { isMobile } from 'react-device-detect';

const About = ({ history }) => {
  const context = useContext(AppContext);

  const closeLegend = () => {
    context.toggleAbout();
  };

  return (
    <div
      className={`about ${context.aboutOpen ? 'open' : 'close'}`}
    >
      <div className='about-wrapper'>
        <h3 className='tl fw7 mv0 f1 white'>
          Team
          </h3>
        <div className='tl mt3 f3 white'>
          Concept, analysis, design and illustrations
          </div>
        <div className='tl fw7 f3'>
          <a className='white link-white' href="https://twitter.com/fedfragapane" target="_blank">Federica Fragapane</a>
        </div>
        <div className='tl mt3 f3 white'>
          Development
          </div>
        <div className='tl fw7 f3'>
          <a className='white' href="http://bowler-lab.com" target="_blank">Paolo Corti</a>
        </div>
        <div className='tl mt3 f3 white'>
          Google Trends
          </div>
        <div className='tl fw7 f3 white'>
          <a className='white' href="https://twitter.com/smfrogers" target="_blank">Simon Rogers</a>&nbsp;&&nbsp;
            <a className='white' href="https://twitter.com/albertocairo" target="_blank">Alberto Cairo</a>
        </div>
        <div className='tl mv4'>
          <h3 className='tl fw7 mv0 f1 white'>
            About
            </h3>
          <p className='white f4'>
            This project explores how people look for the <b className='white'>meaning of their dreams on Google</b>. In order to do that, we studied the related queries to questions such as <i className='white'>What does it mean to dream about..., Why do I dream about..., Meaning of dreaming...</i> in seven languages. This allowed us to have a list of dreams subjects by language and year, from 2008 to 2018. We didn’t include in our dataset violent dreams as to not trigger bad memories.
            </p>
          <p className='white f4'>
            We then re-translated all the results in English and worked on different explorations, <b className='white'>the four chapters</b> of the project: what are the most recurring subjects? How do the macro-categories of dreams change according to time and language? What is the search interest over time for a selection of subjects? And how do the same dreams connect different languages? For each chapter we designed a <b className='white'>READ</b> section, with the main insights found and an <b className='white'>EXPLORE</b> section, with an interactive visualization that allows to explore all the data and to dive into a parallel – dreamlike – world, as it appears through the lenses of Google searches.
            </p>
        </div>
        <div
          className='close-about svg-hover pointer'
          onClick={closeLegend}
          style={{
            zIndex: 999,
          }}
        >
          <img
            alt='Close menu icon'
            src={closeWhite}
            width={30} />
        </div>
      </div>

    </div>
  );
};

export default About;
