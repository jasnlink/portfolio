import React, { useEffect, useState } from 'react'

import logo from './logo.svg';
import './styles/styles.css';


function App() {


  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {

    window.onscroll = (() => checkScrolling())

  }, [])


  let locked = false
  let lastCall = false

  function checkScrolling() {

    if(locked) return;

    if(lastCall) clearTimeout(lastCall);

    lastCall = setTimeout(() => {
      checkScrolling();
      // you do this because you want to handle the last
      // scroll event, even if it occurred while another
      // event was being processed.
    }, 1000);
    console.log('scrolling');
    locked = false
  }


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
          A few words about me...
        </h4>
        <div class="about-me-sub">
          <div class="about-me-phrase-1">
            <h3>
              I love solving problems and will stay laser focused until I get to the bottom of them.
            </h3>
          </div>
          <div class="about-me-phrase-2">
            <h3>
              I am an independent thinker with an open mind to learn new things.
            </h3>
          </div>
          <div class="about-me-phrase-3">
            <h3>
              I am well organised and pay deep attention to detail.
            </h3>
          </div>
        </div>
        
      </div>
    </section>
  </>
  );
}

export default App;
