import React from "react";
import Project1PDF from "../assets/Project 1.pdf";
import Project2PDF from "../assets/Project 2.pdf";

const Project = () => {
  return (
    <>
      <section id="projects">
        <div className="container">
          <div className="row">
            <h1 className="section__title">MY PROJECTS</h1>
          </div>
          <div className="project__wrapper">
            <div className="project__wrapper--left">
              <h2 className="project__wrapper--title">Math Related</h2>
              <p className="project">
                <a href={Project1PDF} className="project">
                  Linear Optimization for Multi-period Team Assignment Planning
                </a>
              </p>
              <p className="project">
                <a href={Project2PDF} className="project">
                  Linear Algebra: The Foundation of Image Processing and
                  Artificial Intelligence
                </a>
              </p>
            </div>
            <div className="project__wrapper--right">
              <h2 className="project__wrapper--title">Publications</h2>
              <p className="project">
                <a
                  href="https://epaper.mediaindonesia.com/detail/asean-dan-tantangan-transformasi-digital"
                  className="project"
                >
                  Article:{" "}
                  <span className="italic">
                    ASEAN dan Tantangan Transformasi Digital
                  </span>
                </a>
              </p>
              <p className="project">
                <a
                  href="https://epaper.mediaindonesia.com/detail/a-6272"
                  className="project"
                >
                  Article:{" "}
                  <span className="italic">
                    Pemuda dan Hubungan Diplomatik ASEAN Masa Depan
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
