import React, { useState } from 'react';
import { projects } from '../../data/projects';

export default function MyProjects({ onOpenProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'websites') return p.category === 'website';
    if (filter === 'designs') return p.category === 'design';
    return true;
  });

  return (
    <div className="my-projects-container" style={{ display: 'flex', height: '100%', fontFamily: 'Tahoma, sans-serif' }}>
      {/* Sidebar */}
      <div className="my-projects-sidebar" style={{ width: '200px', background: 'linear-gradient(180deg, #7BA2E7 0%, #638BCE 100%)', display: 'flex', flexDirection: 'column', padding: '12px' }}>
        <div style={{ background: 'linear-gradient(180deg, #fff 0%, #E8EEF7 100%)', borderRadius: '4px 4px 0 0', padding: '4px 8px', border: '1px solid #fff', borderBottom: 'none', color: '#003399', fontWeight: 'bold', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          My Projects Tasks
        </div>
        <div style={{ background: '#D6E4FA', border: '1px solid #fff', borderTop: 'none', borderRadius: '0 0 4px 4px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div 
            onClick={() => setFilter('all')}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#215DC6', cursor: 'pointer', textDecoration: filter === 'all' ? 'underline' : 'none', fontWeight: filter === 'all' ? 'bold' : 'normal' }}
          >
            <span>📁</span> View all projects
          </div>
          <div 
            onClick={() => setFilter('websites')}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#215DC6', cursor: 'pointer', textDecoration: filter === 'websites' ? 'underline' : 'none', fontWeight: filter === 'websites' ? 'bold' : 'normal' }}
          >
            <span>🌐</span> View websites
          </div>
          <div 
            onClick={() => setFilter('designs')}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#215DC6', cursor: 'pointer', textDecoration: filter === 'designs' ? 'underline' : 'none', fontWeight: filter === 'designs' ? 'bold' : 'normal' }}
          >
            <span>🎨</span> View designs
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="my-projects-main" style={{ flex: 1, background: '#fff', overflowY: 'auto', padding: '16px' }}>
        <h2 style={{ color: '#000', fontSize: '16px', borderBottom: '1px solid #eee', paddingBottom: '8px', margin: '0 0 16px 0' }}>My Projects ({filteredProjects.length})</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              onClick={() => onOpenProject && onOpenProject(project)}
              style={{ 
                width: '240px', 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                cursor: 'pointer',
                padding: '12px',
                borderRadius: '4px',
                textAlign: 'center'
              }}
              className="project-folder-item"
            >
              <div style={{ width: '200px', height: '140px', border: '1px solid #ccc', padding: '2px', background: '#fff', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)', marginBottom: '8px' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span style={{ fontSize: '13px', color: '#000', fontWeight: '500' }}>{project.title}</span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .project-folder-item:hover { background: rgba(49, 106, 197, 0.1); }
        .project-folder-item:active { background: rgba(49, 106, 197, 0.3); }
        
        @media (max-width: 600px) {
          .my-projects-container { flex-direction: column !important; }
          .my-projects-sidebar { width: 100% !important; border-right: none !important; border-bottom: 2px solid rgba(255,255,255,0.3) !important; }
          .my-projects-main { padding: 10px !important; }
          .project-folder-item { width: 100% !important; max-width: none !important; flex-direction: row !important; text-align: left !important; gap: 12px !important; padding: 8px !important; }
          .project-folder-item div { width: 80px !important; height: 60px !important; flex-shrink: 0 !important; }
        }
      `}</style>
    </div>
  );
}
