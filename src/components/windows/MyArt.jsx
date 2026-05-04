import React from 'react';
import { artworks } from '../../data/art';

export default function MyArt({ onOpenImageViewer }) {
  return (
    <div style={{ background: '#fff', height: '100%', overflowY: 'auto', display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', padding: '16px', gap: '16px' }}>
      {artworks.map(art => (
        <div 
          key={art.id} 
          onClick={() => onOpenImageViewer && onOpenImageViewer(art.id)}
          style={{ 
            width: '120px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '4px'
          }}
          className="art-folder-item"
        >
          <div style={{ width: '100px', height: '100px', border: '1px solid #ccc', padding: '4px', background: '#fff', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
            <img src={art.src} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ marginTop: '8px', fontSize: '12px', textAlign: 'center', color: '#000' }}>{art.title}</span>
        </div>
      ))}
      <style>{`
        .art-folder-item:hover { background: rgba(49, 106, 197, 0.1); }
        .art-folder-item:active { background: rgba(49, 106, 197, 0.3); }
      `}</style>
    </div>
  );
}
