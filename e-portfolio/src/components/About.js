import React from "react";

const About = () => {
  return (
    <>
      <section id="about">
        <div class="container">
          <div class="about__row">
            <div class="about__wrapper">
              <div class="about__wrapper--left">
                <h1 class="about__title">ABOUT ME</h1>
                <p class="section__para">
                  <br />
                  Zafran, a young mathematician from Washington State
                  University, is a prominent leader. Notably serving as the
                  Secretary-General of the Overseas Indonesian Students'
                  Association Alliance (OISAA/PPI Dunia).
                  <br />
                  <br />
                  He is a dedicated digital literacy enthusiast with a strong
                  passion in data science and machine learning, driven to apply
                  his knowledge to real-world problems.
                  <br />
                  <br />
                  With his unique combination of leadership, mathematical
                  prowess, and passion for digital literacy, Zafran is poised to
                  make significant contributions in both academic and
                  professional domains.
                </p>
                <br />
                <h1 class="light__mode--blue">Adept in:</h1>
                <div class="techstack__list">
                  <div class="techstack">
                    <figure class="techstack__img--wrapper">
                      <img
                        src="./assets/icons8-r-project-240.png"
                        alt=""
                        class="techstack__img"
                      />
                    </figure>
                    <span class="techstack__name">R</span>
                  </div>
                  <div class="techstack">
                    <figure class="techstack__img--wrapper">
                      <img
                        src="./assets/icons8-matlab-240.png"
                        alt=""
                        class="techstack__img"
                      />
                    </figure>
                    <span class="techstack__name">MATLAB</span>
                  </div>
                  <div class="techstack">
                    <figure class="techstack__img--wrapper">
                      <img
                        src="./assets/icons8-python-480.png"
                        alt=""
                        class="techstack__img"
                      />
                    </figure>
                    <span class="techstack__name">Python</span>
                  </div>
                  <div class="techstack">
                    <figure class="techstack__img--wrapper">
                      <img
                        src="./assets/icons8-microsoft-excel-480.png"
                        alt=""
                        class="techstack__img"
                      />
                    </figure>
                    <span class="techstack__name">Excel</span>
                  </div>
                  <div class="techstack">
                    <figure class="techstack__img--wrapper">
                      <img
                        src="./assets/AarYf.png"
                        alt=""
                        class="techstack__img"
                      />
                    </figure>
                    <span class="techstack__name">LaTeX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src="./assets/ymxb.png" class="shape shape--0" alt="" />
        <img src="./assets/b24ac.png" class="shape shape--1" alt="" />
        <img src="./assets/ball.png" class="shape shape--2" alt="" />
        <img src="./assets/cube.png" class="shape shape--3" alt="" />
      </section>
    </>
  );
};

export default About;
