import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
    <div className="container">
      <div className="row footer__row">
        <div className="footer__social--list">
          <a href="https://www.linkedin.com/in/zafranarif99/" target="_blank"
            className="footer__social--link link__hover-effect link__hover-effect--white">
            LINKEDIN
          </a>
          <a href="https://www.instagram.com/zafranarif99/" target="_blank"
            className="footer__social--link link__hover-effect link__hover-effect--white">
            INSTAGRAM
          </a>
          <a href="https://www.github.com/zafranarif99/" target="_blank"
            className="footer__social--link link__hover-effect link__hover-effect--white">
            GITHUB
          </a>
        </div>
        <div className="footer__copyright">
          E-Portfolio designed by BuildWebFast
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
