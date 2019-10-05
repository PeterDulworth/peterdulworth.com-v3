import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext.js';

const Footer = () => {
  const theme = useContext(ThemeContext);
  const footerThemeClass = theme.getThemeClass('Footer');

  return (
    <div className={`Footer ${footerThemeClass}`}>
      <div>&copy; Peter Dulworth 2019</div>
      <div>psd2@rice.edu | 6330 Main Street, Houston, TX 77005 | (832) 567-5653</div>
      <div>
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
