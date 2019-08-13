import React from 'react';
import PropTypes from 'prop-types';
import { FiSun, FiMoon } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Nav = (props) => {
    return (
        <nav className="Nav">
            <ThemeToggle />
        </nav>
    );
};

Nav.propTypes = {
    
};

export default Nav;