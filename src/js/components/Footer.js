import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext.js';

const Footer = () => {
  const theme = useContext(ThemeContext);
  const footerThemeClass = theme.getThemeClass('Footer');

  return (
    <div className={`Footer ${footerThemeClass}`}>
      <div>peterdulworth@alumni.rice.edu | San Francisco | (832) 567-5653</div>
      <div>
        <a rel='noreferrer noopener' target='_blank' href='http://www.peterdulworth.com/resume/'>
          Resume
        </a>
        <a rel='noreferrer noopener' target='_blank' href='https://www.linkedin.com/in/peter-dulworth/'>
          LinkedIn
        </a>
        <a rel='noreferrer noopener' target='_blank' href='https://github.com/PeterDulworth'>
          Github
        </a>
        <a rel='noreferrer noopener' target='_blank' href='http://splash.peterdulworth.com/'>
          Splash
        </a>
      </div>
    </div>
  );
};

export default Footer;
