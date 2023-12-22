import React from "react";


const Landing = () => {
  return (
    <>
      <section id="landing">
    <div className="container">
      <div className="row">
        <div className="landing__wrapper">
          <a href="#about" className="scroll__more-below">
            More below! <i className="fas fa-arrow-down scroll__more-below--icon"></i>
          </a>
          <div className="landing__wrapper--left">
            <h1 className="landing__intro light__mode--blue">Introducing</h1>
            <h1 className="landing__title">
              <a className="hollow__text">ZAFRAN</a> ARIF
            </h1>
            <h2 className="landing__description">
              Mathematics, Leadership, Digital Literacy.
            </h2>
          </div>
          <div className="landing__wrapper--right">
            <figure>
              <img src="./assets/Profile picture_new.jpeg" alt="" className="profile-picture" />
            </figure>

            <div className="social__list">
              <a href="https://www.linkedin.com/in/zafranarif99/" className="social__link click" target="_blank">
                <figure>
                  <img src="./assets/icons8-linkedin.svg" className="social__link--icon" />
                </figure>
              </a>
              <a href="https://www.instagram.com/zafranarif99" className="social__link click" target="_blank">
                <figure>
                  <img src="./assets/icons8-instagram.svg" className="social__link--icon" />
                </figure>
              </a>
              <a href="https://github.com/zafranarif99" className="social__link click" target="_blank">
                <div className="github--logo">
                  <i className="fab fa-github social__link--icon"></i>
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
