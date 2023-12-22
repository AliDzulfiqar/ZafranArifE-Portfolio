import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ toggleModal }) => {
  return (
    <nav>
      <ul className="nav__link--list">
        <li className="nav__link">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav__link--anchor nav__link--active link__hover-effect link__hover-effect--black click"
                : "nav__link--anchor link__hover-effect link__hover-effect--black click"
            }
          >
            home
          </NavLink>
        </li>
        <li className="nav__link">
          <a
            href="/#about"
            className="nav__link--anchor link__hover-effect link__hover-effect--black click"
          >
            about
          </a>
        </li>
        <li className="nav__link">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "nav__link--anchor nav__link--active link__hover-effect link__hover-effect--black click"
                : "nav__link--anchor link__hover-effect link__hover-effect--black click"
            }
          >
            projects
          </NavLink>
        </li>
        <li className="nav__link">
          <NavLink
            to="/activities"
            className={({ isActive }) =>
              isActive
                ? "nav__link--anchor nav__link--active link__hover-effect link__hover-effect--black click"
                : "nav__link--anchor link__hover-effect link__hover-effect--black click"
            }
          >
            activities
          </NavLink>
        </li>
        <li className="nav__link">
          <a
            onClick={toggleModal}
            className="nav__link--anchor link__hover-effect link__hover-effect--black click"
          >
            contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
