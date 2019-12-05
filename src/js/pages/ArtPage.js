import React, { useContext } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import rectanglesSketch from '../sketches/rectanglesSketch';
import mountainsSketch from '../sketches/mountainsSketch';
import { ThemeContext } from '../contexts/themeContext';

const ArtPage = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className='ArtPage'>
      <div id='rectanglesSketch'>
        <P5Wrapper sketch={rectanglesSketch} isDarkMode={theme.isDarkMode} />
      </div>
      {/*<div id='mountainsSketch'>*/}
      {/*  <P5Wrapper sketch={mountainsSketch} isDarkMode={theme.isDarkMode} />*/}
      {/*</div>*/}
    </div>
  );
};

export default ArtPage;
