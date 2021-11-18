import React from 'react';
import { Link } from 'react-router-dom';
import App from '../App.css';

const NavBar = () => {

    return (
        <div>
            <nav id='nav-bar' >
                <Link to='/'>home</Link>
                <Link to='/client'>signup</Link>
                <Link to='/login'>login</Link>
            </nav>
        </div>
    );
}

export default NavBar;
