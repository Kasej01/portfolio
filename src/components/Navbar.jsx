import { Link } from 'react-router-dom';
import '../styles/components/navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li className="nav-list-item">
                    <Link to="/about"><button>About</button></Link>
                </li>
                <li className="resume-list-item">
                    <Link to="/resume"><button className="resume-btn">Resume</button></Link>
                </li>
                <li className="nav-list-item">
                    <Link to="/projects"><button>Projects</button></Link>
                </li>
                <li className="nav-list-item">
                    <Link to="/contact"><button>Contact</button></Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;