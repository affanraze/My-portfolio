import React, { useState } from 'react';
import { artworks } from '../../data/art';

export default function ImageViewer({ initialImageId }) {
  const [currentIndex, setCurrentIndex] = useState(
    initialImageId ? artworks.findIndex(a => a.id === initialImageId) : 0
  );

  const currentArt = artworks[currentIndex >= 0 ? currentIndex : 0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#ECE9D8' }}>
      <div style={{ display: 'flex', gap: '10px', padding: '4px 8px', borderBottom: '1px solid #ACA899', background: '#ECE9D8', fontSize: '11px' }}>
        <button className="xp-toolbar-btn">File</button>
        <button className="xp-toolbar-btn">Edit</button>
        <button className="xp-toolbar-btn">View</button>
      </div>
      
      <div style={{ padding: '8px', background: '#f5f5f5', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'center', gap: '8px' }}>
        <button className="xp-button" onClick={handlePrev}>◀ Prev</button>
        <button className="xp-button" onClick={handleNext}>Next ▶</button>
      </div>

      <div style={{ flex: 1, backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px', overflow: 'hidden' }}>
        <img 
          src={currentArt?.src} 
          alt={currentArt?.title}
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%', 
            objectFit: 'contain', 
            boxShadow: '0 0 10px rgba(0,0,0,0.2)'
          }} 
        />
      </div>
    </div>
  );
}
