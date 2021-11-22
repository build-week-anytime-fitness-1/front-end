// import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import App from '../App.css';
import { useState, useEffect } from 'react';
import UserForm from './UserForm';

function NavBar({ loggedIn, setLoggedIn, token }) {

  useEffect(() => {
    token !== null ? setLoggedIn(true) : setLoggedIn(false);
  }, [setLoggedIn, token]);

  return (
    <div>
      <nav id='nav-bar'>
        <Link to='/'>Home</Link>
        <Link to='classes'>Workouts</Link>
        <Link to='client'>Signup</Link>
        {!loggedIn ? (
          <Link to='login'>login</Link>
        ) : (
          <Link to='logout' onClick={() => setLoggedIn(false)}>
            Logout
          </Link>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
