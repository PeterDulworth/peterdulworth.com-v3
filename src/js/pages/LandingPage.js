import React, { useContext } from 'react';
import CenterAlignedTable from '../components/CenterAlignedTable';
import SocialLinks from '../components/SocialLinks';
import { ThemeContext } from '../contexts/themeContext.js';
import RainbowText from '../components/RaindbowText';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketches/sketch';

const LandingPage = () => {
  const theme = useContext(ThemeContext);
  const subtitleThemeClass = theme.getThemeClass('LandingPage__subtitle');
  const titleThemeClass = theme.getThemeClass('LandingPage__title');

  // TODO add wavy underline
  return (
    <div className='LandingPage'>
      {/*<P5Wrapper sketch={sketch} className='test123' background={theme.isDarkMode ? 22 : 255} />*/}
      <div>
        <RainbowText text='Peter Dulworth' className={`LandingPage__title ${titleThemeClass}`} />
        <div className={`LandingPage__subtitle ${subtitleThemeClass}`}>
          <CenterAlignedTable
            items={[
              {
                left: 'SWE intern',
                right: <span className='LandingPage__indeed'>indeed.com</span>,
              },
              {
                left: 'CS',
                right: 'rice university',
              },
            ]}
          />
          <br />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
