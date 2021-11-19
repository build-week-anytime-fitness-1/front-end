import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App.css';
import { useState, useEffect } from 'react';

const NavBar = () => {
      const [loggedIn, setLoggedIn] = useState(false);
      let token = localStorage.getItem('token')
    
    useEffect(() => {
        token !== null ? setLoggedIn(true) : setLoggedIn(false)
      },[setLoggedIn, token])

    return (
        <div>
            <nav id='nav-bar' >
                <Link to='/'>Home</Link>
                <Link to='/classes'>Workouts</Link>
                <Link to='/client'>Signup</Link>
                {loggedIn ? (
                    <Link to ='/logout' onClick={() => {
                        setLoggedIn(false);
                      }}>Logout</Link>
                    ) : <Link to='/login' >Login</Link>
}
            </nav>
        </div>
    );
}

export default NavBar;
