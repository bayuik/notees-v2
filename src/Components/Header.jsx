import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineGTranslate, MdOutlineWbSunny } from "react-icons/md";
import { BiMoon } from "react-icons/bi";

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
        <button className="toggle-locale" type="button" >
          <MdOutlineGTranslate className="" />
        </button>
        <button className="toggle-theme">
          <MdOutlineWbSunny className="" />
          <BiMoon/>
        </button>
    </header>
  );
};

export default Header;
