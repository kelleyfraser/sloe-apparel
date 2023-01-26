import React from 'react';
import Button from './button'

// Conditionally render profile based on if user is logged in or not.
function Profile(props) {
  return (
    <div className="page profile-container">
      {props.user.isLoggedIn ?
        <div className="profile-content">
          <h2>{props.user.username}'s Profile</h2>
        </div> : <div className="profile-content"></div>}
      {props.user.isLoggedIn ? <Button label="Log out" handleClick={props.handleClick} /> : <h2 className="mt-4">You're not logged in</h2>}
    </div>
  );
}

export default Profile;