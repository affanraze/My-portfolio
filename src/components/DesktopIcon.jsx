import React from 'react';

export default function DesktopIcon({ id, label, Icon, selected, onSelect, onOpen }) {
  const isMobile = typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches;

  const handleClick = (e) => {
    e.stopPropagation();
    onSelect();
    if (isMobile) {
      onOpen();
    }
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    if (!isMobile) {
      onOpen();
    }
  };

  return (
    <div
      className={`desktop-icon ${selected ? 'selected' : ''}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      id={`desktop-icon-${id}`}
    >
      <div className="desktop-icon-img">
        <Icon />
      </div>
      <span className="desktop-icon-label">{label}</span>
    </div>
  );
}
