import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='Nav'>
      <span>Peter Dulworth</span>
      <div className='Nav__links'>
        <NavLink exact to='/' activeClassName='Nav__link--active'>
          work
        </NavLink>
        <NavLink exact to='/about' activeClassName='Nav__link--active'>
          about me
        </NavLink>
        <NavLink exact to='/art' activeClassName='Nav__link--active'>
          art
        </NavLink>
        <a href='http://www.peterdulworth.com/resume/'>Resume</a>
      </div>
    </nav>
  );
};

export default Nav;