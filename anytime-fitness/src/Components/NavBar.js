import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
            <section id='nav-bar' >
                <Link to='/'>Home</Link>
                <Link to='/classes'>Classes</Link>
                <Link to='/add-class'>Add class</Link>
                <Link to='/client'>Signup</Link>
                <button id='login'>Sign Up / Sign In</button>
            </section>
        </>
    )
}

export default NavBar;
