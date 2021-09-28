import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { displayErrorMessage } from 'helpers/displayErrorMessage';
import { useAuth } from 'contexts/authContext';

export const Logout = () => {
  const { user, logout, error } = useAuth();

  const handleClick = async (e) => {
    // await logoutSubmitHandler();
    await logout(user.email, user.password);
  };

  return (
    <div className="logoutWrapper center">
      <button type="button" onClick={async (e) => await handleClick(e)}>
        Logout?
      </button>
      <br />
      {displayErrorMessage(error, 'Logout attempt unsuccessful')}
    </div>
  );
};
