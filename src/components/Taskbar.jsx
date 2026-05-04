import React from 'react';
import SystemTray from './SystemTray';
import { WindowsFlag } from './XPIcons';

export default function Taskbar({ windows, startMenuOpen, onStartClick, onWindowClick }) {
  return (
    <div className="taskbar">
      <button
        className={`start-btn ${startMenuOpen ? 'active' : ''}`}
        onClick={onStartClick}
        id="start-button"
      >
        <img src="/icons/Windows_XP_(Symbol)_(Saturated).svg" alt="Start" style={{ width: 16, height: 16, filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.3))', objectFit: 'contain' }} />
        <span style={{ fontStyle: 'italic', paddingRight: '4px' }}>start</span>
      </button>

      <div className="taskbar-windows">
        {windows.map(win => (
          <button
            key={win.id}
            className={`taskbar-window-btn ${!win.isMinimized ? 'active' : ''}`}
            onClick={() => onWindowClick(win.id)}
            title={win.title}
          >
            {win.icon && (
              <span style={{ width: 14, height: 14, display: 'flex', alignItems: 'center' }}>
                {React.createElement(win.icon, {})}
              </span>
            )}
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{win.title}</span>
          </button>
        ))}
      </div>

      <SystemTray />
    </div>
  );
}
