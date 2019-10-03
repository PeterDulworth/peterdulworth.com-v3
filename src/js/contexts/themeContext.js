import React from 'react';

/**
 * the theme context exposes the theme itself and a method to toggle the theme
 */
export const ThemeContext = React.createContext({
    isDarkMode: true,
    toggleDarkMode: () => {},
    getThemeClass: () => {},
});
