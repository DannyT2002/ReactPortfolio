import React from 'react';
import useReveal from '../hooks/useReveal';

const interests = [
  'Video Games', 'Family & Friends', 'Horror Movies', 'Podcasts', 'Problem Solving', 'Design',
];

const About = () => {
  const reveal = useReveal();

  return (
    <section id="about" className="section">
      <div className="container" ref={reveal}>
        <p className="section-eyebrow">About</p>
        <h2 className="section-title">A bit <span className="grad">about me</span></h2>

        <div className="about-grid">
          <div className="about-bio">
            <p>
              Hello! I'm <span className="hl">Danny Torres</span>, a dedicated web
              developer specializing in crafting intuitive and dynamic digital
              experiences. With a strong foundation in front-end development and
              UI/UX design, I excel at transforming complex challenges into
              elegant solutions.
            </p>
            <p>
              Outside of my professional pursuits, I enjoy playing video games,
              spending time with family and friends, and immersing myself in
              horror movies and podcasts. I'm eager to collaborate on innovative
              projects and drive impactful results.
            </p>
            <div className="interests">
              {interests.map((i) => <span key={i}>{i}</span>)}
            </div>
          </div>

          <aside className="about-card">
            <h3>Quick facts</h3>
            <div className="fact"><span>Role</span><strong>Web &amp; Mobile Dev</strong></div>
            <div className="fact"><span>Focus</span><strong>Front-end · UI/UX</strong></div>
            <div className="fact"><span>Stack</span><strong>React · .NET · Node</strong></div>
            <div className="fact"><span>Status</span><strong>Open to work</strong></div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
