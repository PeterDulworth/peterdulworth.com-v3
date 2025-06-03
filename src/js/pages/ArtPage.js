import React, { useContext } from 'react';
import rectanglesSketch from '../sketches/rectanglesSketch';
import mountainsSketch from '../sketches/mountainsSketch';
import { ThemeContext } from '../contexts/themeContext';
import { ReactP5Wrapper, P5WrapperClassName } from '@p5-wrapper/react';
import styled, { createGlobalStyle } from "styled-components";

const GlobalWrapperStyles = createGlobalStyle`
  .${P5WrapperClassName} {
    position: relative;
  }
`;

// const StyledCentredText = styled.span`
//   .${P5WrapperClassName} & {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     color: white;
//     font-size: 2rem;
//     margin: 0;
//     text-align: center;
//   }
// `;

const ArtPage = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className='ArtPage'>
      <div className='ArtSection__header'>
        Running Calculator
      </div>
      <div className='ArtSection__content'>
        Calculate your pace for a given time and vice versa for common race distances. <a href='https://peterdulworth.github.io/running-calculator/'>Try it out</a>.
      </div>
      <div className='ArtSection__header'>
        Smash Rankings
      </div>
      <div className='ArtSection__content'>
        Create a pool of players, record matches, and track their ELO (glicko2) rankings. <a href='http://smash-ranking.surge.sh/'>Try it out</a>.
      </div>
      <div className='ArtSection__header'>
        Sketches
      </div>
      <div id='rectanglesSketch'>
        <GlobalWrapperStyles />
        <ReactP5Wrapper sketch={rectanglesSketch} isDarkMode={theme.isDarkMode} >
        </ReactP5Wrapper>
      </div>
      <div id='mountainsSketch'>
        <ReactP5Wrapper sketch={mountainsSketch} isDarkMode={theme.isDarkMode} />
      </div>
    </div>
  );
};

export default ArtPage;
