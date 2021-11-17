
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
            <div>
            <nav id='nav-bar' >
                <Link to='/'>Home</Link>
                <Link to='/client'>Signup</Link>
                <Link to='/add-class'>Add class</Link>
                <Link to='/login'>login</Link>
            </nav>
        </div>
    )
}

export default NavBar;

