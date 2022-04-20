import React, { useEffect, useState } from 'react'

import logo from './logo.svg';
import './styles/styles.css';


function App() {


  return (
  <>
    <section class="hero">
      <div class="container">
        <h1>
          Hello,
        </h1>
        <h1>
          I'm Jason.
        </h1>
        <div class="hero-sub">
          <h2>
            I am a full stack web developer.
          </h2>
        </div>
        
      </div>
    </section>
    <section class="about-me">
      <div class="container">
        <h4>
          I would describe myself as
        </h4>
        <div class="about-me-sub">
          <div class="about-me-phrase">
            <h3>
              An <strong>independent thinker.</strong>
            </h3>
            <h3>
              A highly focused <strong>problem solver.</strong>
            </h3>
            <h3>
              An <strong>open mind</strong> for learning.
            </h3>
            <h3>
              Well <strong>organised</strong> with a deep <strong>attention for detail.</strong>
            </h3>
          </div>
        </div>
      </div>
    </section>
    <section class="projects">
      <div class="row">
        <h4>
          Some projects that I worked on
        </h4>
      </div>
      <div class="row">
        <div class="project-img-container col">
          <img class="project-img" src="https://msmtech.ca/wp-content/uploads/2022/04/AnimationFull1.gif" alt="" />
        </div>
        <div class="project-content col">
          <div class="row">
            <h4>Tableside scan to order system</h4>
          </div>
          <div class="row">
            <h4>Tableside scan to order system</h4>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default App;
