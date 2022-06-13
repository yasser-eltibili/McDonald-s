import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/mc.png';
const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-5'>
      <a className='navbar-brand' href='#'>
        <img
          src={Logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt=''
        />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavDropdown'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <NavLink className='nav-link' to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item active'>
            <NavLink className='nav-link' to='/new'>
              New order
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link' to='/orders'>
              Your orders
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
