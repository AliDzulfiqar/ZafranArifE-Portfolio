import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { Switch } from "@mui/material";

const NavBar = ({ toggleModal, check, change }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToAbout = () => {
    // Check if we're already on the Home page
    if (location.pathname === "/") {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "auto" });
      }
    } else {
      // Navigate to Home page and then scroll to About
      navigate("/", { state: { scrollToAbout: true } });
    }
  };
  return (
    <section>
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
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
              }}
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
          <Switch defaultChecked onChange={change} checked={check} />
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
