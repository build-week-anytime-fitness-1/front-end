// import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import App from '../App.css';
import { useState, useEffect } from 'react';
import UserForm from './UserForm';
import jwt_decode from 'jwt-decode';

function NavBar({ loggedIn, setLoggedIn, token, decoded }) {
  useEffect(() => {
    token !== null ? setLoggedIn(true) : setLoggedIn(false);
  }, [setLoggedIn, token]);

  return (
    <div>
      <nav id='nav-bar'>
        <Link to='/'>Home</Link>
        <Link to='classes'>Workouts</Link>
        {!loggedIn ? <Link to='client'>Signup</Link> : ''}
        {decoded.role === 1 && loggedIn ? (
          <Link to='instructor-form'>Instructor Registration</Link>
        ) : (
          ''
        )}
        {loggedIn ? (
          <Link to='logout' onClick={() => setLoggedIn(false)}>
            Logout
          </Link>
        ) : (
          <Link to='login'>login</Link>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
