import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`}>
          <i class="bi bi-code-slash"> </i>
          DevBlog
        </Link>
      </h2>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">
            New Post
          </Link>
        </li>
        <li>
          <Link to={`/admin`}>
            <i class="bi bi-person-fill"> </i>
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;