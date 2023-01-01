import React from "react";

const Header = () => {
  return (
    <header>
      <h1>
        <a href="/">Notees</a>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/archived">Archived</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
