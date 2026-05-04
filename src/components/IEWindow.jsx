import React, { useState, useEffect, useRef } from 'react';
import Window from './Window';
import { BackIcon, ForwardIcon, StopIcon, RefreshIcon, HomeIcon, IEIcon } from './XPIcons';

export default function IEWindow({ win, onClose, onMinimize, onMaximize, onFocus, onUpdatePosition, onUpdateSize, address, children }) {
  const [loading, setLoading] = useState(true);
  const startPos = useRef({ x: 0, y: 0, w: 0, h: 0 });

  useEffect(() => {
    // Play loading sound via Web Audio
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = 800;
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) { /* ignore */ }

    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleResizeStart = (e, dir) => {
    if (win.isMaximized) return;
    e.preventDefault();
    e.stopPropagation();
    onFocus();
    startPos.current = {
      x: e.clientX, y: e.clientY,
      w: win.size.width, h: win.size.height,
      px: win.position.x, py: win.position.y,
    };

    const handleMove = (ev) => {
      const dx = ev.clientX - startPos.current.x;
      const dy = ev.clientY - startPos.current.y;
      let newW = startPos.current.w;
      let newH = startPos.current.h;
      let newX = startPos.current.px;
      let newY = startPos.current.py;

      if (dir.includes('e')) newW = Math.max(300, startPos.current.w + dx);
      if (dir.includes('s')) newH = Math.max(200, startPos.current.h + dy);
      if (dir.includes('w')) {
        newW = Math.max(300, startPos.current.w - dx);
        newX = startPos.current.px + (startPos.current.w - newW);
      }
      if (dir.includes('n')) {
        newH = Math.max(200, startPos.current.h - dy);
        newY = startPos.current.py + (startPos.current.h - newH);
      }
      onUpdateSize({ width: newW, height: newH });
      onUpdatePosition({ x: newX, y: newY });
    };
    const handleUp = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
  };

  const resizeHandleStyle = (cursor, pos) => ({
    position: 'absolute', ...pos, cursor, zIndex: 1,
  });

  // Override the window to inject IE toolbar between title bar and body
  return (
    <div
      className="xp-window"
      style={win.isMaximized
        ? { left: 0, top: 0, width: '100%', height: 'calc(100% - 30px)', zIndex: win.zIndex, display: win.isMinimized ? 'none' : 'block' }
        : { left: win.position.x, top: win.position.y, width: win.size.width, height: win.size.height, zIndex: win.zIndex, display: win.isMinimized ? 'none' : 'block' }
      }
      onMouseDown={onFocus}
    >
      {/* Resize handles */}
      {!win.isMaximized && (
        <>
          <div style={resizeHandleStyle('n-resize', { top: -3, left: 8, right: 8, height: 6 })} onMouseDown={e => handleResizeStart(e, 'n')} />
          <div style={resizeHandleStyle('s-resize', { bottom: -3, left: 8, right: 8, height: 6 })} onMouseDown={e => handleResizeStart(e, 's')} />
          <div style={resizeHandleStyle('w-resize', { left: -3, top: 8, bottom: 8, width: 6 })} onMouseDown={e => handleResizeStart(e, 'w')} />
          <div style={resizeHandleStyle('e-resize', { right: -3, top: 8, bottom: 8, width: 6 })} onMouseDown={e => handleResizeStart(e, 'e')} />
          <div style={resizeHandleStyle('nw-resize', { top: -3, left: -3, width: 10, height: 10 })} onMouseDown={e => handleResizeStart(e, 'nw')} />
          <div style={resizeHandleStyle('ne-resize', { top: -3, right: -3, width: 10, height: 10 })} onMouseDown={e => handleResizeStart(e, 'ne')} />
          <div style={resizeHandleStyle('sw-resize', { bottom: -3, left: -3, width: 10, height: 10 })} onMouseDown={e => handleResizeStart(e, 'sw')} />
          <div style={resizeHandleStyle('se-resize', { bottom: -3, right: -3, width: 10, height: 10 })} onMouseDown={e => handleResizeStart(e, 'se')} />
        </>
      )}

      <div className="xp-window-frame">
        {/* Title Bar */}
        <IETitleBar
          win={win}
          onClose={onClose}
          onMinimize={onMinimize}
          onMaximize={onMaximize}
          onUpdatePosition={onUpdatePosition}
        />

        {/* IE Menu Bar */}
        <div style={{ background: '#ECE9D8', padding: '1px 4px', borderBottom: '1px solid #ACA899', fontSize: 11, display: 'flex', gap: 12 }}>
          <span style={{ cursor: 'pointer' }}>File</span>
          <span style={{ cursor: 'pointer' }}>Edit</span>
          <span style={{ cursor: 'pointer' }}>View</span>
          <span style={{ cursor: 'pointer' }}>Favorites</span>
          <span style={{ cursor: 'pointer' }}>Tools</span>
          <span style={{ cursor: 'pointer' }}>Help</span>
        </div>

        {/* IE Toolbar */}
        <div className="ie-toolbar">
          <button className="ie-toolbar-btn"><BackIcon /><span>Back</span></button>
          <button className="ie-toolbar-btn"><ForwardIcon /><span>Forward</span></button>
          <button className="ie-toolbar-btn"><StopIcon /><span>Stop</span></button>
          <button className="ie-toolbar-btn"><RefreshIcon /><span>Refresh</span></button>
          <button className="ie-toolbar-btn"><HomeIcon /><span>Home</span></button>
          <div className={`ie-throbber ${!loading ? 'stopped' : ''}`}>
            <IEIcon />
          </div>
        </div>

        {/* Address Bar */}
        <div className="xp-window-addressbar">
          <span className="xp-window-addressbar-label">Address</span>
          <input
            className="xp-window-addressbar-input"
            value={address || 'https://www.myprojects.com'}
            readOnly
          />
        </div>

        {/* Body */}
        <div className="xp-window-body" style={{ position: 'relative' }}>
          {loading ? (
            <div className="ie-loading">
              <div className="ie-loading-spinner" />
              <div className="ie-loading-text">Loading page...</div>
            </div>
          ) : (
            children
          )}
        </div>

        {/* Status Bar */}
        <div className="xp-window-statusbar">
          {loading ? '⏳ Opening page...' : '✓ Done'}
        </div>
      </div>
    </div>
  );
}

function IETitleBar({ win, onClose, onMinimize, onMaximize, onUpdatePosition }) {
  const handleMouseDown = (e) => {
    if (win.isMaximized) return;
    e.preventDefault();
    const offsetX = e.clientX - win.position.x;
    const offsetY = e.clientY - win.position.y;

    const handleMove = (ev) => {
      onUpdatePosition({
        x: ev.clientX - offsetX,
        y: Math.max(0, ev.clientY - offsetY),
      });
    };
    const handleUp = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
  };

  return (
    <div className="xp-title-bar" onMouseDown={handleMouseDown} onDoubleClick={onMaximize}>
      <span className="xp-title-icon"><IEIcon /></span>
      <span className="xp-title-text">{win.title}</span>
      <div className="xp-title-buttons" onMouseDown={e => e.stopPropagation()}>
        <button className="xp-title-btn minimize" onClick={onMinimize}>
          <svg width="8" height="2" viewBox="0 0 8 2"><rect width="8" height="2" fill="#fff"/></svg>
        </button>
        <button className="xp-title-btn maximize" onClick={onMaximize}>
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
            <rect x="0.5" y="0.5" width="8" height="8" stroke="#fff" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <button className="xp-title-btn close" onClick={onClose}>
          <svg width="8" height="8" viewBox="0 0 8 8">
            <line x1="0" y1="0" x2="8" y2="8" stroke="#fff" strokeWidth="1.5"/>
            <line x1="8" y1="0" x2="0" y2="8" stroke="#fff" strokeWidth="1.5"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
