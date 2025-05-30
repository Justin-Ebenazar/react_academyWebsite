import React from 'react';
import './navBar.css'; // Optional: Add CSS for styling

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1></h1>
            </div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;