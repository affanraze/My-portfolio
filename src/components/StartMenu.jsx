import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  PersonIcon, DocumentIcon, ContactIcon, FolderIcon, MyComputerIcon,
  GithubIcon, LinkedInIcon, InstagramIcon, LogOffIcon, ShutDownIcon,
  PaintIcon, ClockIcon, NotepadIcon, MediaIcon, MusicIcon, ImageIcon, CmdIcon
} from './XPIcons';

export default function StartMenu({
  onClose, onOpenAboutMe, onOpenResume, onOpenContact, onOpenMyComputer, onOpenMyProjects, onOpenPaint, onOpenNotepad, onOpenClock, onOpenImageViewer, onOpenMediaPlayer, onOpenMusicPlayer, onOpenCmd
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        const startBtn = document.getElementById('start-button');
        if (startBtn && startBtn.contains(e.target)) return;
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleShutDown = () => {
    onClose();
    // Play shutdown sound
    const audio = new Audio('https://archive.org/download/windows-xp-shutdown/Windows%20XP%20Shutdown.mp3');
    audio.volume = 0.5;
    audio.play().catch(() => {});

    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '0';
    setTimeout(() => {
      window.close();
      document.body.innerHTML = '<div style="background:#000;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;color:#fff;font-family:Tahoma;font-size:16px;">It is now safe to turn off your computer.</div>';
      document.body.style.opacity = '1';
    }, 1500);
  };

  return (
    <motion.div
      ref={menuRef}
      className="start-menu animate-slide-up"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.15 }}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Header */}
      <div className="start-menu-header">
        <div className="start-menu-avatar"><img src="assets/Avatar/3.jpeg" alt="" /></div>
        <div className="start-menu-username">Affan<span style={{ color: '#FFB900', fontStyle: 'italic', marginLeft: '2px' }}>xp</span></div>
      </div>

      {/* Body */}
      <div className="start-menu-body" style={{ display: 'flex', flexWrap: 'wrap', flex: 1 }}>
        {/* Left column */}
        <div className="start-menu-left" style={{ flex: '1 1 200px', minWidth: '50%', padding: '6px 0', background: '#fff', display: 'flex', flexDirection: 'column' }}>
          <MenuItem icon={<FolderIcon />} label="My Projects" sub="View my work" onClick={onOpenMyProjects} bold />
          <MenuItem icon={<ContactIcon />} label="Contact Me" sub="Send me a message" onClick={onOpenContact} bold />
          <MenuItem icon={<PersonIcon />} label="About Me" sub="Learn about me" onClick={onOpenAboutMe} bold />
          
          <div className="start-menu-separator" style={{ margin: '6px 4px' }} />
          
          <MenuItem icon={<ImageIcon />} label="Image Viewer" onClick={onOpenImageViewer} />
          <MenuItem icon={<MediaIcon />} label="Media Player" onClick={onOpenMediaPlayer} />
          <MenuItem icon={<PaintIcon />} label="Paint" onClick={onOpenPaint} />
          <MenuItem icon={<MusicIcon />} label="Music Player" onClick={onOpenMusicPlayer} />
          <MenuItem icon={<NotepadIcon />} label="Notepad" onClick={onOpenNotepad} />
          <MenuItem icon={<ClockIcon />} label="Clock" onClick={onOpenClock} />
        </div>

        {/* Right column */}
        <div className="start-menu-right" style={{ flex: '1 1 170px', minWidth: '40%', padding: '6px 0', background: '#D3E5FA' }}>
          <MenuItemRight icon={<MyComputerIcon />} label="My Computer" onClick={onOpenMyComputer} bold />
          <MenuItemRight icon={<FolderIcon color="#1C75D8" />} label="My Projects" onClick={onOpenMyProjects} bold />
          <MenuItemRight icon={<DocumentIcon />} label="My Resume" onClick={onOpenResume} bold />
          <MenuItemRight icon={<PersonIcon />} label="About Me" onClick={onOpenAboutMe} bold />
          <MenuItemRight icon={<ContactIcon />} label="Contact Me" onClick={onOpenContact} bold />

          <div className="start-menu-separator" style={{ margin: '6px 4px' }} />
          
          <MenuItemRight icon={<MediaIcon />} label="Media Player" onClick={onOpenMediaPlayer} />
          <MenuItemRight icon={<MusicIcon />} label="Music Player" onClick={onOpenMusicPlayer} />
          <MenuItemRight icon={<ImageIcon />} label="Image Viewer" onClick={onOpenImageViewer} />
          <MenuItemRight icon={<PaintIcon />} label="Paint" onClick={onOpenPaint} />
          <MenuItemRight icon={<CmdIcon />} label="Command Prompt" onClick={onOpenCmd} />

          <div className="start-menu-separator" style={{ margin: '6px 4px' }} />

          <MenuItemRight icon={<InstagramIcon />} label="Instagram" onClick={() => window.open('#', '_blank')} />
          <MenuItemRight icon={<GithubIcon />} label="Github" onClick={() => window.open('#', '_blank')} />
          <MenuItemRight icon={<LinkedInIcon />} label="LinkedIn" onClick={() => window.open('#', '_blank')} />
        </div>
      </div>

      {/* Footer */}
      <div className="start-menu-footer">
        <button className="start-menu-footer-btn" onClick={onClose}>
          <LogOffIcon /> Log Off
        </button>
        <button className="start-menu-footer-btn" onClick={handleShutDown}>
          <ShutDownIcon /> Shut Down
        </button>
      </div>
    </motion.div>
  );
}

function MenuItem({ icon, label, sub, onClick, bold }) {
  return (
    <div className="start-menu-item" onClick={onClick} style={{ padding: '4px 8px' }}>
      <span style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </span>
      <div style={{ marginLeft: '4px' }}>
        <div style={{ fontWeight: bold ? 'bold' : 'normal', fontSize: 11 }}>{label}</div>
        {sub && <div style={{ fontSize: 10, color: '#888', marginTop: 1 }}>{sub}</div>}
      </div>
    </div>
  );
}

function MenuItemRight({ icon, label, onClick, bold }) {
  return (
    <div className="start-menu-item-right" onClick={onClick} style={{ padding: '4px 8px' }}>
      <span style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </span>
      <span style={{ fontWeight: bold ? 'bold' : 'normal', color: '#000' }}>{label}</span>
    </div>
  );
}
