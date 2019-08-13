import React, { useState } from 'react';
import './styles/_index.scss';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import Content from './components/Content';
import Footer from './components/Footer';

/**
 * the theme context exposes the theme itself and a method to toggle the theme
 */
export const ThemeContext = React.createContext({
  isDarkMode: true,
  toggleDarkMode: () => {}
});

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className="App">
        <Nav />
        <LandingPage />
        <Content />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
