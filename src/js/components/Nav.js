import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='Nav'>
      <Link to='/' className='Nav__logo'>
        Peter Dulworth
      </Link>
      <div className='Nav__links'>
        <NavLink exact to='/' activeClassName='Nav__link--active'>
          home
        </NavLink>
        <NavLink exact to='/about' activeClassName='Nav__link--active'>
          about me
        </NavLink>
        <NavLink exact to='/pets' activeClassName='Nav__link--active'>
          pets
        </NavLink>
        <NavLink exact to='/projects' activeClassName='Nav__link--active'>
          projects
        </NavLink>
        <a href='http://www.peterdulworth.com/resume/'>Resume</a>
        <a href='http://splash.peterdulworth.com/'>splash</a>
      </div>
    </nav>
  );
};

export default Nav;
