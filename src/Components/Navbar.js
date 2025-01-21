import { Link } from "react-router-dom";
import React, { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";

const Navbar = () => {
  const { isDarkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div className="navbar">
      <div>
        <Link to="/"> Home </Link>
        <Link to="/about">About </Link>
        <Link to="/blog"> blog</Link>
      </div>
      <button
        className={isDarkTheme ? "btn-dark" : "btn-light"}
        onClick={() => setDarkTheme((prev) => !prev)}
      >
        {isDarkTheme ? "lightMode" : "Dark Mode"}
      </button>
    </div>
  );
};
export default Navbar;
