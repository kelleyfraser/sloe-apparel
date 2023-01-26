import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <div className="navbar-links-container">
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/legal">Legal</NavLink>
        <NavLink to="/interest">Calculator</NavLink>
      </ul>
    </div>

  );
}

export default Menu;