import React, { useState, useRef, useCallback } from 'react';

export default function Window({ win, onClose, onMinimize, onMaximize, onFocus, onUpdatePosition, onUpdateSize, children }) {
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizing, setResizing] = useState(false);
  const [resizeDir, setResizeDir] = useState(null);
  const frameRef = useRef(null);
  const startPos = useRef({ x: 0, y: 0, w: 0, h: 0 });

  const handleMouseDownTitle = (e) => {
    if (win.isMaximized) return;
    e.preventDefault();
    onFocus();
    setDragging(true);
    setDragOffset({
      x: e.clientX - win.position.x,
      y: e.clientY - win.position.y,
    });

    const handleMove = (ev) => {
      onUpdatePosition({
        x: ev.clientX - (e.clientX - win.position.x),
        y: Math.max(0, ev.clientY - (e.clientY - win.position.y)),
      });
    };
    const handleUp = () => {
      setDragging(false);
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleUp);
    };
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleUp);
  };

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

  const style = win.isMaximized
    ? { left: 0, top: 0, width: '100%', height: 'calc(100% - 30px)', zIndex: win.zIndex, display: win.isMinimized ? 'none' : 'flex' }
    : { left: win.position.x, top: win.position.y, width: win.size.width, height: win.size.height, zIndex: win.zIndex, display: win.isMinimized ? 'none' : 'flex' };

  const resizeHandleStyle = (cursor, pos) => ({
    position: 'absolute', ...pos, cursor, zIndex: 1,
  });

  return (
    <div className="xp-window" style={style} onMouseDown={onFocus}>
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
        <div className="xp-title-bar" onMouseDown={handleMouseDownTitle} onDoubleClick={onMaximize}>
          {win.icon && (
            <span className="xp-title-icon">
              {React.createElement(win.icon, {})}
            </span>
          )}
          <span className="xp-title-text">{win.title}</span>
          <div className="xp-title-buttons" onMouseDown={e => e.stopPropagation()}>
            <button className="xp-title-btn minimize" onClick={onMinimize} title="Minimize">
              <svg width="8" height="2" viewBox="0 0 8 2"><rect width="8" height="2" fill="#fff"/></svg>
            </button>
            <button className="xp-title-btn maximize" onClick={onMaximize} title="Maximize">
              {win.isMaximized ? (
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <rect x="2" y="0" width="7" height="7" stroke="#fff" strokeWidth="1.5" fill="none"/>
                  <rect x="0" y="2" width="7" height="7" stroke="#fff" strokeWidth="1.5" fill="var(--xp-title-active-start)"/>
                </svg>
              ) : (
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <rect x="0.5" y="0.5" width="8" height="8" stroke="#fff" strokeWidth="1.5" fill="none"/>
                </svg>
              )}
            </button>
            <button className="xp-title-btn close" onClick={onClose} title="Close">
              <svg width="8" height="8" viewBox="0 0 8 8">
                <line x1="0" y1="0" x2="8" y2="8" stroke="#fff" strokeWidth="1.5"/>
                <line x1="8" y1="0" x2="0" y2="8" stroke="#fff" strokeWidth="1.5"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="xp-window-body">
          {children}
        </div>
      </div>
    </div>
  );
}
