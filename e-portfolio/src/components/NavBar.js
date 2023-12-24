import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { Switch } from "@mui/material";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = ({ toggleModal, check, change }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        <div className="nav__mobile--icon click">
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
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
        {isOpen && (
          <div className="nav__mobile--menu" isOpen={isOpen}>
            <NavLink 
              to="/"
              className="nav__mobile--link click"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              home
            </NavLink>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToAbout();
              }}
              className="nav__mobile--link click"
            >
              about
            </a>
            <NavLink 
              to="/projects"
              className="nav__mobile--link click"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              projects
            </NavLink>
            <NavLink 
              to="/activities"
              className="nav__mobile--link click"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              activities
            </NavLink>
            <a
              onClick={toggleModal}
              className="nav__mobile--link click"
            >
              contacts
            </a>
            <Switch defaultChecked onChange={change} checked={check} />
          </div>
        )}
      </nav>
    </section>
  );
};

// {isOpen && (
//   <MobileMenu isOpen={isOpen}>
//     <MobileLink
//       href="#about"
//       onClick={() => {
//         setIsOpen(!isOpen);
//       }}
//     >
//       About
//     </MobileLink>
//     <MobileLink
//       href="#skills"
//       onClick={() => {
//         setIsOpen(!isOpen);
//       }}
//     >
//       Skills
//     </MobileLink>
//     <MobileLink
//       href="#experience"
//       onClick={() => {
//         setIsOpen(!isOpen);
//       }}
//     >
//       Experience
//     </MobileLink>
//     <MobileLink
//       href="#projects"
//       onClick={() => {
//         setIsOpen(!isOpen);
//       }}
//     >
//       Projects
//     </MobileLink>
//     <Switch defaultChecked onChange={change} checked={check} />
//   </MobileMenu>
// )}

export default NavBar;
