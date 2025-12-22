import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav>
        <Link to="/" className="logo">tunetwin</Link>
        <ul className="nav-links">
          <li><Link to="/search">search</Link></li>
          <li>about</li>
          <li>playlist</li>
          <li>submit</li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  