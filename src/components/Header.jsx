import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BsPersonCircle,
  BsFillHouseFill,
  BsFillLockFill,
} from "react-icons/bs";

export const Header = () => {
  const activeStyle = ({ isActive }) => {
    return isActive ? "active-navLink" : "";
  };

  const logout = () => {
    localStorage.removeItem("myVanLife123X");
  }

  return (
    <header>
      <nav>
        <div className="site-logo">
          <NavLink to="/" className={activeStyle}>
            Vanlife <BsFillHouseFill />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="host" className={activeStyle}>
              Host
            </NavLink>
          </li>
          <li>
            <NavLink to="about" className={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="vans" className={activeStyle}>
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink to="login" className={activeStyle}>
              <BsPersonCircle />
            </NavLink>
          </li>
          <li>
            <Link to="/" relative="path" onClick={logout}>
              <BsFillLockFill />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
