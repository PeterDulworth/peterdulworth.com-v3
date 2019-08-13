import React, { useState, useContext } from 'react';
import './styles/_index.scss';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import Content from './components/Content';
import Footer from './components/Footer';
import { ThemeContext } from './contexts/themeContext.js';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  const getThemeClass = (baseClassName) => {
    return isDarkMode ? `${baseClassName}--dark` : `${baseClassName}--light`;
  }

  const themeClass = isDarkMode ? 'App--dark' : 'App--light';

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, getThemeClass }}>
      <div className={`App ${themeClass}`}>
        <Nav />
        <LandingPage />
        <Content />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
