import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FarmGuide 🌾</div>
      <nav className="nav">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/categorys">FarmGuiding</Link></li>
          <li><Link to="/aboutus">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
