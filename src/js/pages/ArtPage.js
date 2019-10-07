import React, { useContext } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import circlesSketch from '../sketches/circlesSketch';
import rectanglesSketch from '../sketches/rectanglesSketch';
import { ThemeContext } from '../contexts/themeContext';

const ArtPage = () => {
  const theme = useContext(ThemeContext);
  const artPageThemeClass = theme.getThemeClass('ArtPage');

  return (
    <div className='ArtPage'>
      {/*<P5Wrapper sketch={circlesSketch} background={theme.isDarkMode ? 22 : 255} />*/}
      <div id='rectanglesSketch'>
        <P5Wrapper sketch={rectanglesSketch} isDarkMode={theme.isDarkMode} />
      </div>
    </div>
  );
};

export default ArtPage;
