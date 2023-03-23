import React, { useContext } from 'react';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import rectanglesSketch from '../sketches/rectanglesSketch';
import mountainsSketch from '../sketches/mountainsSketch';
import { ThemeContext } from '../contexts/themeContext';

const ArtPage = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className='ArtPage'>
      <div id='rectanglesSketch'>
        <ReactP5Wrapper sketch={rectanglesSketch} isDarkMode={theme.isDarkMode} />
      </div>
      <div id='mountainsSketch'>
        <ReactP5Wrapper sketch={mountainsSketch} isDarkMode={theme.isDarkMode} />
      </div>
    </div>
  );
};

export default ArtPage;
