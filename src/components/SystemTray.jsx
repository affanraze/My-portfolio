import React, { useState, useEffect } from 'react';

export default function SystemTray() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(interval);
  }, []);

  const formatted = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="system-tray">
      <div 
        style={{ background: '#FFC107', borderRadius: '50%', width: 14, height: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontSize: 10, fontWeight: 'bold', cursor: 'default' }} 
        title="Windows Security Alerts"
      >
        !
      </div>
      <span className="system-tray-clock">{formatted}</span>
    </div>
  );
}
