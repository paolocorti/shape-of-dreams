import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AppContext } from '../appContext';
import { motion } from 'framer-motion';
import './Footer.scss';
import { isMobileWithTablet } from '../constants';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';
import legend from './images/legend.svg'
import menu from './images/menu.svg';

const NavigationFooter = ({ history }) => {
  const context = useContext(AppContext);

  const changeSection = (section) => {
    if (isMobileWithTablet) {
      context.setSelectedView(section)
    } else {
      history.push({
        search: "?" + new URLSearchParams({ section: section }).toString()
      })
    }
  }

  return (
    <div className='footer ph4' style={{ flex: 1, height: '50px' }}>
      <div className="flex w-100 items-center" style={{ maxWidth: isMobileWithTablet ? '100%' : '75%', margin: '0 auto' }}>
        <div className='w-10 flex justify-center items-center h-100 pointer'>
          <motion.div
            whileHover={{
              rotateZ: -90,
              transition: {
                ease: "easeOut",
                duration: 0.5
              },
            }}
            style={{ marginTop: '4px' }}
          ><img
              src={menu}
              alt='Menu icon'
              width={20}
              onClick={() => context.toggleMenu()}
              className='svg-hover'
            />
          </motion.div>
        </div>
        <div
          className='w-40 flex justify-center items-center pointer footer-el h-100'
          onClick={() => changeSection('read')}
        >
          <div className={`link cursor-pointer ${context.selectedView === 'read' ? 'active' : '/'}`}>
            {isMobileWithTablet ? 'READ' : 'READ THE STORY'}
          </div>
        </div>
        <div
          className='w-40 flex justify-center items-center pointer footer-el h-100'
          onClick={() => changeSection('explore')}
        >
          <div className={`link cursor-pointer ${context.selectedView === 'explore' ? 'active' : '/'}`}>
            {isMobileWithTablet ? 'EXPLORE' : 'EXPLORE THE DREAMS'}
          </div>
        </div>
        <div className='w-10 flex justify-center items-center h-100'>
          <motion.div
            whileHover={{
              rotateY: 30,
              transition: {
                ease: "easeOut",
                duration: 0.5
              },
            }}
            style={{ marginTop: '4px' }}
          >
            <img
              src={legend}
              alt='Legend icon'
              width={26}
              onClick={() => context.toggleLegend()}
              className='pointer svg-hover'
            />
          </motion.div>
          {
            !isMobileWithTablet && (
              <React.Fragment>
                <motion.div
                  whileHover={{
                    rotateY: 30,
                    transition: {
                      ease: "easeOut",
                      duration: 0.5
                    },
                  }}
                  style={{ marginLeft: '5px' }}
                >
                  <FacebookShareButton url={'the-shape-of-dreams.com'} className='svg-hover'>
                    <FacebookIcon size={24} round={true} iconBgStyle={{ fill: '#ffffff', border: '2px solid #43449a' }} logoFillColor={'#43449a'} />
                  </FacebookShareButton>
                </motion.div>
                <motion.div
                  whileHover={{
                    rotateY: 30,
                    transition: {
                      ease: "easeOut",
                      duration: 0.5
                    },
                  }}
                  style={{ marginLeft: '5px' }}
                >
                  <TwitterShareButton url={'http://the-shape-of-dreams.com'} title={'The Shape of Dreams'} className='svg-hover'>
                    <TwitterIcon size={24} round={true} iconBgStyle={{ fill: '#ffffff', border: '2px solid #43449a' }} logoFillColor={'#43449a'} />
                  </TwitterShareButton>
                </motion.div>
              </React.Fragment>
            )
          }
        </div>
      </div>

    </div >
  );
};

export default withRouter(NavigationFooter); 