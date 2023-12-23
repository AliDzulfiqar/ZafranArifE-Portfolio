import React from "react";
import linkedinIcon from "../assets/icons8-linkedin.svg"; // adjust the path as necessary
import instagramIcon from "../assets/icons8-instagram.svg"; // adjust the path as necessary
import { FaGithub } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../assets/Profile picture.jpeg";
import Typewriter from "typewriter-effect";

const Landing = () => {
  const headline = ['Mathematics.', 'Leadership.', 'Digital Literacy.']

  return (
    <>
      <section id="landing">
        <div className="container">
          <div className="row">
            <div className="landing__wrapper">
              
              <div className="landing__wrapper--left">
                <h1 className="landing__intro light__mode--blue">
                  Introducing
                </h1>
                <h1 className="landing__title">
                  <span className="hollow__text">ZAFRAN</span> ARIF
                </h1>
                <h2 className="landing__description">
                  <Typewriter
                  options={{
                    strings: headline,
                    autoStart: true,
                    loop: true,
                    delay: 10,
                    deleteSpeed: 50,
                  }}
                />
                </h2>
                <a href="#about" className="scroll__more-below">
                More below!{" "}
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="scroll__more-below--icon"
                />
              </a>
              </div>
              <div className="landing__wrapper--right">
                <figure>
                  <img
                    src={profilePicture}
                    alt="ProfilePicture" 
                    className="profile-picture"
                  />
                </figure>

                <div className="social__list">
                  <a
                    href="https://www.linkedin.com/in/zafranarif99/"
                    className="social__link click"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure>
                      <img
                        src={linkedinIcon}
                        alt="LinkedIn"
                        className="social__link--icon"
                      />
                    </figure>
                  </a>
                  <a
                    href="https://www.instagram.com/zafranarif99"
                    className="social__link click"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <figure>
                      <img
                        src={instagramIcon}
                        alt="Instagram"
                        className="social__link--icon"
                      />
                    </figure>
                  </a>
                  <a
                    href="https://github.com/zafranarif99"
                    className="social__link click"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="github--logo">
                      <FaGithub className="social__link--icon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
