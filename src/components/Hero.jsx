import React from 'react';

const Hero = () => (
  <section id="top" className="hero shell">
    <div className="hero__meta">
      <span className="kicker">Web &amp; Mobile Developer</span>
      <span className="kicker">Portfolio — Edition 2026</span>
    </div>

    <h1 className="hero__name">
      <span className="ln">Danny</span>
      <span className="ln ln--two">Torres<em>.</em></span>
    </h1>

    <div className="hero__foot">
      <p className="hero__lead">
        I design and build <em className="italic">intuitive, fast</em> interfaces —
        <span className="dim"> turning complex problems into work that feels effortless.</span>
      </p>

      <div className="hero__aside">
        <span className="row"><b>Available</b> — Q3 2026</span>
        <span className="row">Front-end · UI/UX · Mobile</span>
        <a className="hero__cta" href="#work">Selected work ↓</a>
      </div>
    </div>
  </section>
);

export default Hero;
