import React from "react";

const Project = () => {
  return (
    <>
      <section id="projects">
      <div class="container">
        <div class="row">
          <h1 class="section__title">
            MY PROJECTS
          </h1>
        </div>
        <div class="project__wrapper">
          <div class="project__wrapper--left">
            <h2 class="project__wrapper--title">Math Related</h2>
            <p class="project"><a href="./assets/Project 1.pdf" class="project">Linear Optimization for Multi-period Team Assignment Planning</a></p>
            <p class="project"><a href="./assets/Project 2.pdf" class="project">Linear Algebra: The Foundation of Image Processing and Artificial Intelligence</a></p>
          </div>
          <div class="project__wrapper--right">
            <h2 class="project__wrapper--title">Publications</h2>
            <p class="project"><a href="https://epaper.mediaindonesia.com/detail/asean-dan-tantangan-transformasi-digital" class="project">Article: <span class="italic">ASEAN dan Tantangan Transformasi Digital</span></a></p>
            <p class="project"><a href="https://epaper.mediaindonesia.com/detail/a-6272" class="project">Article: <span class="italic">Pemuda dan Hubungan Diplomatik ASEAN Masa Depan</span></a></p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Project;
