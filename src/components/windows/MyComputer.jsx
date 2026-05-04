import React from 'react';
import { DriveIcon } from '../XPIcons';

export default function MyComputer({ onLoadingTrigger }) {
  const handleDriveClick = () => {
    if (onLoadingTrigger) {
      onLoadingTrigger();
    }
  };

  return (
    <div className="my-computer-content">
      <div className="xp-window-addressbar" style={{ margin: '-8px -8px 8px -8px', borderBottom: '1px solid #ACA899' }}>
        <span className="xp-window-addressbar-label">Address</span>
        <input className="xp-window-addressbar-input" value="My Computer" readOnly />
      </div>

      <div className="mc-section-title">
        <svg width="16" height="16" viewBox="0 0 16 16"><rect x="1" y="3" width="14" height="10" rx="1" fill="#C8C4B0" stroke="#666" strokeWidth="0.5"/></svg>
        Hard Disk Drives
      </div>
      <div className="mc-drive" onClick={handleDriveClick}>
        <div className="mc-drive-icon"><DriveIcon /></div>
        <div className="mc-drive-info">
          <div className="mc-drive-name">Local Disk (C:)</div>
          <div className="mc-drive-detail">45.2 GB free of 120 GB</div>
          <div style={{ width: 120, height: 8, background: '#ECE9D8', border: '1px solid #808080', marginTop: 2 }}>
            <div style={{ width: '62%', height: '100%', background: 'linear-gradient(180deg, #5882FA 0%, #2E5CD6 100%)' }} />
          </div>
        </div>
      </div>

      <div className="mc-section-title" style={{ marginTop: 16 }}>
        <svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" fill="none" stroke="#666" strokeWidth="1"/><circle cx="8" cy="8" r="2" fill="#666"/></svg>
        Devices with Removable Storage
      </div>
      <div className="mc-drive" onClick={handleDriveClick}>
        <div className="mc-drive-icon">
          <svg viewBox="0 0 32 32" fill="none" width="32" height="32">
            <circle cx="16" cy="16" r="12" fill="#E8E5D9" stroke="#5A6270" strokeWidth="1"/>
            <circle cx="16" cy="16" r="4" fill="#C8C4B0" stroke="#5A6270" strokeWidth="0.5"/>
          </svg>
        </div>
        <div className="mc-drive-info">
          <div className="mc-drive-name">CD Drive (D:)</div>
          <div className="mc-drive-detail">No disc inserted</div>
        </div>
      </div>

      <div style={{ marginTop: 20, padding: '8px', background: '#FFFFCC', border: '1px solid #E0D880', borderRadius: 2, fontSize: 11 }}>
        💡 <strong>Tip:</strong> Check out the "My Projects" folder on the desktop to see my work!
      </div>
    </div>
  );
}
