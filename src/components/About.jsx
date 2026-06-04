import React from 'react';
import useReveal from '../hooks/useReveal';

const About = () => {
  const reveal = useReveal();

  return (
    <section id="about" className="section shell">
      <div ref={reveal}>
        <div className="chapter">
          <span className="idx">01</span>
          <span className="ttl">About</span>
        </div>

        <div className="about__grid">
          <div>
            <p className="about__lead">
              A developer who cares about the <em>details between</em> the
              pixels — the timing of a transition, the weight of a line, the
              feel of an interaction.
            </p>
            <div className="about__body">
              <p>
                I'm Danny Torres, a web &amp; mobile developer with a strong
                foundation in front-end engineering and UI/UX design. I like
                taking ambiguous, complex problems and shaping them into
                interfaces that are clear, quick, and quietly satisfying to use.
              </p>
              <p>
                Away from the screen you'll find me deep in video games, horror
                movies and podcasts, or out with family and friends. I'm always
                up for collaborating on something with real craft behind it.
              </p>
            </div>
          </div>

          <div className="about__side">
            <figure className="about__portrait">
              <img src="/assets/portfolio.jpg" alt="Danny Torres" />
            </figure>
            <dl style={{ margin: 0 }}>
              <div className="fact"><dt>Role</dt><dd>Web &amp; Mobile Dev</dd></div>
              <div className="fact"><dt>Focus</dt><dd>Front-end · UI/UX</dd></div>
              <div className="fact"><dt>Stack</dt><dd>React · .NET · Node</dd></div>
              <div className="fact"><dt>Status</dt><dd>Open to work</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
