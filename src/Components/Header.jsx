import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MdOutlineGTranslate, MdOutlineWbSunny } from "react-icons/md";
import { BiMoon } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import ThemeContext from "../Store/ThemeContext";
import { setLogout } from "../Store/userSlice";

const Header = ({ theme }) => {
  const { user } = useSelector((user) => user);
  const { setTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", "light");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setLogout();
    window.location.reload();
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <header>
      <h1>
        <Link to={"/"}>Notees</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>{user.name && <Link to={"/archived"}>Archived</Link>}</li>
        </ul>
      </nav>
      <button className="toggle-locale" type="button">
        <MdOutlineGTranslate className="" />
      </button>
      <button type="button" onClick={handleClick} className="toggle-theme">
        {theme === "light" ? <BiMoon /> : <MdOutlineWbSunny />}
      </button>
      {user.name && (
        <button className="button-logout" onClick={handleLogout}>
          <HiOutlineLogout />
          <p>{user.name}</p>
        </button>
      )}
    </header>
  );
};

export default Header;
