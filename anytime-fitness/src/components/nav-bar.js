import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <>
            <section id='nav-bar' >
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/courses'>Courses</Link>
                <Link to=''></Link>
                <button id='login'>Sign Up / Sign In</button>
            </section>
        </>
    )
}

export default NavBar;
