import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to={'/'}>Notees</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to={'/archived'}>Archived</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
