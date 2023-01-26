import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './button';
import Welcome from '../components/welcome';

function Header(props) {
  // Render 2 div elements for brand container + welcome container
  // Welcome container utilizes Welcome and Signin components
  return (
    <>
      <div className="brand-container">
        <NavLink className="navbar-brand" to="/">
          <img src="./images/smallLogo.png" alt="Logo" className="brand-img" />
          <h2 className="brand-name">SLOE APPAREL</h2>
        </NavLink>
      </div>
      <div className="welcome-container">
        {props.user.isLoggedIn ? <Welcome username={props.user.username} /> : <Button label="Log in" handleClick={props.handleClick} />}
      </div>
    </>
  );
}

export default Header;