import React from 'react';

const Project = ({ title, description, image, tags = [], deployedLink, repoLink }) => (
  <article className="project">
    <div className="project-media">
      <img src={image} alt={title} loading="lazy" />
    </div>
    <div className="project-body">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {tags.length > 0 && (
        <div className="project-tags">
          {tags.map((t) => <span key={t}>{t}</span>)}
        </div>
      )}
      <div className="project-links">
        {deployedLink && (
          <a className="live" href={deployedLink} target="_blank" rel="noopener noreferrer">
            Live demo
          </a>
        )}
        {repoLink && (
          <a className="code" href={repoLink} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        )}
      </div>
    </div>
  </article>
);

export default Project;
