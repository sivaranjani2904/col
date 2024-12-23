import './homePage.css';
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

function navbar() {
 

    return (
    
<header className="nav-head">
        <nav className="navbar">
          <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#special">Specialties</a></li>
            <li><a href="#doctor">Doctor</a></li>

          </ul>
          <div className="login-button">
          <Link to="/login">
            <button >Login</button>
            </Link>
          </div>
        </nav>
      </header>
    
    );
}
      export default navbar;