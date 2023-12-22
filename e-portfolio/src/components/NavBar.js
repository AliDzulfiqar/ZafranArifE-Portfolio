import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function toggleModal() {
    if (isModalOpen) {
      setIsModalOpen(false);
      console.log(isModalOpen);
      document.body.classList.remove("modal--open");
    } else {
      setIsModalOpen(true);
      console.log(isModalOpen);
      document.body.classList.add("modal--open");
    }
  }

  return (
    <nav>
      <ul className="nav__link--list">
        <li className="nav__link">
          <Link
            to="/"
            className="nav__link--anchor link__hover-effect link__hover-effect--black click nav__link--active"
          >
            home
          </Link>
        </li>
        <li className="nav__link">
          <a href="/#about"
            className="nav__link--anchor link__hover-effect link__hover-effect--black click"
          >
            about
          </a>
        </li>
        <li className="nav__link">
          <Link
            to="/projects"
            className="nav__link--anchor link__hover-effect link__hover-effect--black click nav__link--active"
          >
            projects
          </Link>
        </li>
        <li className="nav__link">
          <Link
            to="/activities"
            className="nav__link--anchor link__hover-effect link__hover-effect--black click nav__link--active"
          >
            activities
          </Link>
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
