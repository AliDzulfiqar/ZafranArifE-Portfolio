import React from "react";

const Contact = ({ closeModal }) => {
  return (
    <>
      <div class="modal">
        <div class="modal__wrapper modal__contact">
          <i
            onClick={closeModal}
            class="fas fa-times modal__exit click"
          ></i>
          <h3 class="modal__title modal__title--contact">REACH ME OUT</h3>
          <div class="modal__inner--wrapper">
            <div class="modal__inner--left">
              <i class="fas fa-envelope modal__icon--left"></i>
              <div class="email__wrapper">
                <h3 class="modal__sub-title">zafranarif@gmail.com</h3>
                <i
                  class="fas fa-copy modal__icon--copy"
                  onclick="copyToClipboard()"
                ></i>
              </div>
            </div>
            <div class="modal__inner--right">
              <a
                href="https://www.linkedin.com/in/zafranarif99/"
                target="_blank"
              >
                <figure>
                  <img
                    src="./assets/icons8-linkedin.svg"
                    class="modal__icon--right"
                  />
                </figure>
              </a>
              <h3 class="modal__sub-title">Zafran Akhmadery Arif</h3>
            </div>
          </div>
          <div class="modal__footer">
            <h3 class="modal__footer--text">
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
