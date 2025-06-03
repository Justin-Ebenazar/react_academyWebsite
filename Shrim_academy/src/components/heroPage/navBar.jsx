import './navBar.css'; // Optional: Add CSS for styling
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1></h1>
            </div>
            <ul className="navbar-links">
                <li><HashLink to="/#section-home" smooth className='nav-link'>Home</HashLink></li>
                <li><HashLink to="/#section-courses" smooth className='nav-link'>Courses</HashLink></li>
                <li><HashLink to="/#section-about" smooth className='nav-link'>About</HashLink></li>
                <li><HashLink to="/#section-about" smooth className='nav-link'>Contact</HashLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;