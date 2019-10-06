import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './js/contexts/themeContext.js';
import './styles/_index.scss';
import Nav from './js/components/Nav';
import HomePage from './js/pages/HomePage';
import GalleryPage from './js/pages/GalleryPage';
import Footer from './js/components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  const getThemeClass = (baseClassName) => {
    return isDarkMode ? `${baseClassName}--dark` : `${baseClassName}--light`;
  };

  const themeClass = isDarkMode ? 'App--dark' : 'App--light';

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, getThemeClass }}>
      <Router>
        <div className={`App ${themeClass}`}>
          <Switch>
            <Route path='/gallery'>
              <GalleryPage />
            </Route>
            <Route path='/'>
              <Nav />
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
