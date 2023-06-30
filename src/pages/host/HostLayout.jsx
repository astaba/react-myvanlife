import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
  const activeStyle = ({ isActive }) => {
    return isActive ? "active-navLink" : "";
  };

  return (
    <div className="host">
      <nav>
        <ul>
          <li>
            <NavLink to="." end={true} className={activeStyle}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="income" className={activeStyle}>
              Income
            </NavLink>
          </li>
          <li>
            <NavLink to="vans" className={activeStyle}>
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={activeStyle}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
