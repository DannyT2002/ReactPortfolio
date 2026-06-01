import React from 'react';

const Hero = () => (
  <section id="hero" className="hero">
    <div className="container hero-inner">
      <div className="hero-copy">
        <span className="hero-badge">
          <span className="dot" /> Available for new projects
        </span>
        <h1>
          Hi, I'm Danny —<br />
          I build <span className="grad">digital experiences</span>.
        </h1>
        <p className="hero-lead">
          Web &amp; mobile developer focused on turning complex problems into
          clean, intuitive, and fast interfaces. Front-end craft meets thoughtful
          UI/UX design.
        </p>
        <div className="hero-actions">
          <a href="#portfolio" className="btn btn-primary">View my work →</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
        <div className="hero-stats">
          <div className="stat"><strong>5+</strong><span>Technologies</span></div>
          <div className="stat"><strong>Full</strong><span>Stack focus</span></div>
          <div className="stat"><strong>UI/UX</strong><span>Design minded</span></div>
        </div>
      </div>

      <div className="hero-portrait">
        <div className="glow-ring" />
        <div className="frame">
          <img src="/assets/profile.jpg" alt="Danny Torres" />
          <span className="chip"><span className="dot" /> Danny Torres</span>
        </div>
      </div>
    </div>

    <a href="#about" className="scroll-cue" aria-label="Scroll to about">
      <span className="mouse" />
      Scroll
    </a>
  </section>
);

export default Hero;
