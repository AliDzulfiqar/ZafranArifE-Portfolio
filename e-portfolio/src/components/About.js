import React from "react";
import ymxbImage from "../assets/ymxb.png";
import b24acImage from "../assets/b24ac.png";
import ballImage from "../assets/ball.png";
import cubeImage from "../assets/cube.png";
import rLogo from "../assets/icons8-r-project-240.png";
import matlabLogo from "../assets/icons8-matlab-240.png";
import pythonLogo from "../assets/icons8-python-480.png";
import excelLogo from "../assets/icons8-microsoft-excel-480.png";
import latexLogo from "../assets/AarYf.png";

const About = () => {
  const techStacks = [
    { name: "R", logo: rLogo },
    { name: "MATLAB", logo: matlabLogo },
    { name: "Python", logo: pythonLogo },
    { name: "Excel", logo: excelLogo },
    { name: "LaTeX", logo: latexLogo },
  ];
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about__row">
            <div className="about__wrapper">
              <div className="about__wrapper--left">
                <h1 className="about__title">ABOUT ME</h1>
                <p className="section__para">
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
                <h1 className="light__mode--blue">Adept in:</h1>
                <div className="techstack__list">
                  {techStacks.map((tech, index) => (
                    <div className="techstack" key={index}>
                      <figure className="techstack__img--wrapper">
                        <img
                          src={tech.logo}
                          alt={`${tech.name} logo`} // It's a good practice to provide meaningful alt text for accessibility
                          className="techstack__img"
                        />
                      </figure>
                      <span className="techstack__name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src={ymxbImage} className="shape shape--0" alt="yxmb" />
        <img src={b24acImage} className="shape shape--1" alt="b24ac" />
        <img src={ballImage} className="shape shape--2" alt="ball" />
        <img src={cubeImage} className="shape shape--3" alt="cube" />
      </section>
    </>
  );
};

export default About;
