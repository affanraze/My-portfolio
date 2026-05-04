import React, { useState, useEffect } from 'react';

export default function ClockApp() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#ECE9D8' }}>
      <div style={{ position: 'relative', width: '200px', height: '200px', borderRadius: '50%', background: '#fff', border: '4px solid #0054E3', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)' }}>
        {/* Clock Center */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '12px', height: '12px', borderRadius: '50%', background: '#0054E3', transform: 'translate(-50%, -50%)', zIndex: 10 }} />
        
        {/* Hour Hand */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '6px', height: '50px', background: '#333', transformOrigin: 'bottom center', transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`, borderRadius: '3px' }} />
        
        {/* Minute Hand */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '4px', height: '70px', background: '#666', transformOrigin: 'bottom center', transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`, borderRadius: '2px' }} />
        
        {/* Second Hand */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', width: '2px', height: '80px', background: '#E53935', transformOrigin: 'bottom center', transform: `translate(-50%, -100%) rotate(${secondDeg}deg)` }} />
      </div>
      
      <div style={{ marginTop: '24px', fontSize: '24px', fontWeight: 'bold', color: '#0054E3', fontFamily: 'Tahoma' }}>
        {time.toLocaleTimeString()}
      </div>
      <div style={{ marginTop: '4px', fontSize: '14px', color: '#666' }}>
        {time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
    </div>
  );
}
