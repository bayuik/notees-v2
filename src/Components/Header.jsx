import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineGTranslate, MdOutlineWbSunny } from "react-icons/md";
import { BiMoon } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../Store/themeSlice";

const Header = () => {
  const { theme } = useSelector(({ theme }) => theme);
  const { user } = useSelector((user) => user);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTheme());
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

  return (
    <header>
      <h1>
        <Link to={"/"}>Notees</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to={"/archived"}>Archived</Link>
          </li>
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
