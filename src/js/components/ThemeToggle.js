import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext.js';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
    const theme = useContext(ThemeContext);

    const moonActiveClass = theme.isDarkMode ? 'ThemeToggle__moon--active' : 'ThemeToggle__moon--inactive';
    const sunActiveClass = !theme.isDarkMode ? 'ThemeToggle__sun--active' : 'ThemeToggle__sun--inactive';

    return (
        <div className='ThemeToggle' onClick={theme.toggleDarkMode}>
            <FiMoon className={`ThemeToggle__moon ${moonActiveClass}`} />
            <FiSun className={`ThemeToggle__sun ${sunActiveClass}`} />
        </div>
    );
};

export default ThemeToggle;
