import React, { useState } from 'react';

export default function MediaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#000', color: '#fff' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
        {isPlaying ? (
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/iyIOl-s7JTU?autoplay=1" 
            title="The Winner Takes It All" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        ) : (
          <>
            <img 
              src="https://img.youtube.com/vi/iyIOl-s7JTU/hqdefault.jpg" 
              alt="Video Placeholder"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
            />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 60, height: 60, background: 'rgba(0,0,0,0.6)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={() => setIsPlaying(true)}>
              <div style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: '25px solid white', marginLeft: 8 }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
