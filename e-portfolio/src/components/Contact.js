import React from "react";
import linkedInIcon from "../assets/icons8-linkedin.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ closeModal }) => {
  const copyToClipboard = () => {
    const email = "zafranarif99@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text to clipboard", err);
      });
  };

  return (
    <>
      <div className="modal">
        <div className="modal__wrapper modal__contact">
          <FontAwesomeIcon
            icon={faTimes}
            className="modal__exit click"
            onClick={closeModal}
          />
          <h3 className="modal__title modal__title--contact">REACH ME OUT</h3>
          <div className="modal__inner--wrapper">
            <div className="modal__inner--left">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="modal__icon--left"
              />
              <div className="email__wrapper">
                <h3 className="modal__sub-title">zafranarif@gmail.com</h3>
                <FontAwesomeIcon
                  icon={faCopy}
                  className="modal__icon--copy click"
                  onClick={copyToClipboard}
                />
              </div>
            </div>
            <div className="modal__inner--right">
              <a
                href="https://www.linkedin.com/in/zafranarif99/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure>
                  <img
                    src={linkedInIcon}
                    className="modal__icon--right"
                    alt="LinkedIn"
                  />
                </figure>
              </a>
              <h3 className="modal__sub-title">Zafran Akhmadery Arif</h3>
            </div>
          </div>
          <div className="modal__footer">
            <h3 className="modal__footer--text">
              Pullman, Washington
              <br />
              GMT -07.00
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
