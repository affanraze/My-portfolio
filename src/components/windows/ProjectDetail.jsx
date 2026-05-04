import React from 'react';

export default function ProjectDetail({ project }) {
  if (!project) return <div className="project-detail">No project selected.</div>;

  return (
    <div className="project-detail">
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <h3 style={{ fontSize: 13, color: '#003399', marginBottom: 6 }}>Tech Stack</h3>
      <div className="project-detail-tech">
        {project.techStack.map(tech => (
          <span key={tech} className="project-detail-badge">{tech}</span>
        ))}
      </div>

      {/* Project Image */}
      <div style={{
        width: '100%', border: '1px solid #D0D0D0',
        margin: '16px 0', borderRadius: 4, overflow: 'hidden', background: '#F0F0F0'
      }}>
        <img src={project.image} alt={project.title} style={{ width: '100%', display: 'block' }} />
      </div>

      <div className="project-detail-links">
        {project.liveUrl && project.liveUrl !== '#' && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-detail-link">
            🌐 View Live
          </a>
        )}
        {project.sourceUrl && project.sourceUrl !== '#' && (
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="project-detail-link">
            📦 View Source
          </a>
        )}
      </div>
    </div>
  );
}
