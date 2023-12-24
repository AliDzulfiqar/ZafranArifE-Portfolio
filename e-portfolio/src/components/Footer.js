import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <h2 className="footer__title">Zafran Akhmadery Arif</h2>
          <div className="footer__social--list">
            <div className="footer__social--icons">
              <a
                className="footer__social--icon"
                href="https://www.github.com/zafranarif99/"
                target="display"
              >
                <GitHubIcon />
              </a>
              <a
                className="footer__social--icon"
                href="https://www.linkedin.com/in/zafranarif99/"
                target="display"
              >
                <LinkedInIcon />
              </a>
              <a
                className="footer__social--icon"
                href="https://www.instagram.com/zafranarif99/"
                target="display"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div
            className="footer__copyright"
            href="https://instagram.com/BuildWebFast"
            target="display"
          >
            &copy; 2023 BuildWebFast. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
