import React from "react";

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
                <a href="https://drive.google.com/file/d/1gvJRqC7LC3-DhltSZvI45SDaLk6DOvHr/view?usp=sharing" className="project">
                  Linear Optimization for Multi-period Team Assignment Planning
                </a>
              </p>
              <p className="project">
                <a
                  href="https://drive.google.com/file/d/1-lN4LFJaGHeA4RpcAEc2gS_pKgi7oawn/view?usp=sharing"
                  className="project"
                >
                  The Foundation of Linear Algebra
                </a>
              </p>
              <p className="project">
                <a
                  href="https://github.com/zafranarif99/MATLAB_Radiographs"
                  className="project"
                >
                  MATLAB Radiograph
                </a>
              </p>
              <p className="project">
                <a
                  href="https://github.com/zafranarif99/R_DataFrameBasic"
                  className="project"
                >
                  R Data Frame Tutorial
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
              <p className="project">
                <a
                  href="https://drive.google.com/file/d/1O5fMjT_0WBxWREI98iaOwapLSZ4LB3Of/view?usp=sharing"
                  className="project"
                >
                  Article:{" "}
                  <span className="italic">
                    Digital Literacy 5.0 to Enhance Multicultural Education
                  </span>
                </a>
              </p>
              <p className="project">
                <a
                  href="https://drive.google.com/file/d/1oeMiWoIGmtsRbRAZKsaVZeDt03vZBU4z/view?usp=sharing"
                  className="project"
                >
                  Article:{" "}
                  <span className="italic">
                    Gas ultrafine bubbles enhance the potency of chlorine and
                    peracetic acid against eliminating multi-species biofilms on
                    stainless-steel surfaces
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
