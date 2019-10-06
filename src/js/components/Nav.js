import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='Nav'>
      <span>Peter Dulworth</span>
      <div className='Nav__links'>
        <NavLink to='/'>work</NavLink>
        <NavLink to='/about'>about me</NavLink>
        <NavLink to='/resume'>resume</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
