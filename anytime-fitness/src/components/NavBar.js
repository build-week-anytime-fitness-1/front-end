import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App.css';

const NavBar = () => {

    return (
        <div>
            <nav id='nav-bar' >
                <Link to='/'>Home</Link>
                <Link to='/classes'>Workouts</Link>
                <Link to='/client'>Signup</Link>
                <Link to='/login'>Login</Link>

            </nav>
        </div>
    );
}

export default NavBar;
