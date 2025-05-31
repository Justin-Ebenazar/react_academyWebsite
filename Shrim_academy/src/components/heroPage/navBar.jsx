import './navBar.css'; // Optional: Add CSS for styling
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1></h1>
            </div>
            <ul className="navbar-links">
                <Link to="/" className='nav-link'><li><a href="#home">Home</a></li></Link>
                <li><a href="#about">About</a></li>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;