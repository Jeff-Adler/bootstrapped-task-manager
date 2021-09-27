import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { displayErrorMessage } from 'helpers/displayErrorMessage';

export const Logout = ({ logoutSubmitHandler, user, error }) => {
  const handleClick = async (e) => {
    await logoutSubmitHandler();
  };

  return (
    <div className="logoutWrapper center">
      {user ? (
        <>
          <button type="button" onClick={async (e) => await handleClick(e)}>
            Logout?
          </button>
          <br />
          {displayErrorMessage(error, 'Logout attempt unsuccessful')}
        </>
      ) : (
        <>
          <h3>Not logged in!</h3>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};
