import React, { useState } from 'react';
import './styles/_index.scss';
import Nav from './js/components/Nav';
import LandingPage from './js/pages/LandingPage';
import Content from './js/components/Content';
import Footer from './js/components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeContext } from './js/contexts/themeContext.js';

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
                        <Route path='/test'>
                            <div>hello :3</div>
                        </Route>
                        <Route path='/'>
                            <Nav />
                            <LandingPage />
                            <Content />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </ThemeContext.Provider>
    );
}

export default App;
