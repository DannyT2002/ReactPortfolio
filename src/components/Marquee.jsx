import React from 'react';

const words = [
  'React', 'SwiftUI', '.NET Core', 'Node.js', 'PostgreSQL',
  'UI/UX', 'TypeScript', 'Flutter', 'SQL Server', 'Front-end',
];

// Duplicated once so the -50% keyframe loops seamlessly.
const Marquee = () => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee__track">
      {[...words, ...words].map((w, i) => (
        <span key={i}>{w}</span>
      ))}
    </div>
  </div>
);

export default Marquee;
