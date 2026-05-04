import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BootScreen from './components/BootScreen';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import Window from './components/Window';
import IEWindow from './components/IEWindow';
import { useWindowManager } from './hooks/useWindowManager';

// Window Contents
import MyComputer from './components/windows/MyComputer';
import MyProjects from './components/windows/MyProjects';
import AboutMe from './components/windows/AboutMe';
import Resume from './components/windows/Resume';
import Contact from './components/windows/Contact';
import ProjectDetail from './components/windows/ProjectDetail';
import Paint from './components/windows/Paint';
import Notepad from './components/windows/Notepad';
import ClockApp from './components/windows/ClockApp';
import Cmd from './components/windows/Cmd';
import ImageViewer from './components/windows/ImageViewer';
import MediaPlayer from './components/windows/MediaPlayer';
import MusicPlayer from './components/windows/MusicPlayer';
import MyArt from './components/windows/MyArt';

import { MyComputerIcon, FolderIcon, IEIcon, PersonIcon, DocumentIcon, ContactIcon, PaintIcon, NotepadIcon, ClockIcon, CmdIcon, ImageIcon, MediaIcon, MusicIcon } from './components/XPIcons';

export default function App() {
  const [phase, setPhase] = useState('boot');
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [isAppLoading, setIsAppLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const wm = useWindowManager();

  useEffect(() => {
    if (phase === 'desktop') {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  useEffect(() => {
    if (isAppLoading) {
      document.documentElement.classList.add('xp-loading');
      document.body.classList.add('xp-loading');
    } else {
      document.documentElement.classList.remove('xp-loading');
      document.body.classList.remove('xp-loading');
    }
  }, [isAppLoading]);

  // Helper for responsive initial sizes
  const getResponsiveSize = (defaultWidth, defaultHeight) => {
    const width = Math.min(window.innerWidth - 20, defaultWidth);
    const height = Math.min(window.innerHeight - 60, defaultHeight);
    return { width, height };
  };

  const handleOpenWindow = (id, title, IconComp, ContentComp, props = {}, defaultSize, isIE = false) => {
    if (isAppLoading) return;
    
    // Check if window is already open
    const existing = wm.windows.find(w => w.id === id);
    if (existing) {
      if (existing.isMinimized) wm.minimizeWindow(id); // toggle or focus
      wm.focusWindow(id);
      setStartMenuOpen(false);
      return;
    }

    setIsAppLoading(true);
    setStartMenuOpen(false);

    setTimeout(() => {
      const size = getResponsiveSize(defaultSize?.width || 650, defaultSize?.height || 450);
      const position = { 
        x: Math.max(10, (window.innerWidth - size.width) / 2 + (wm.windows.length * 20)),
        y: Math.max(10, (window.innerHeight - size.height) / 2 - 30 + (wm.windows.length * 20))
      };

      wm.openWindow({
        id,
        title,
        icon: IconComp,
        component: isIE ? 'ie' : 'standard',
        props: { ContentComp, ...props },
        size,
        position,
      });
      setIsAppLoading(false);
    }, 2500); // Wait 2-3 seconds as requested
  };

  const openMyComputer = () => handleOpenWindow('my-computer', 'My Computer', MyComputerIcon, MyComputer, {
    onLoadingTrigger: () => {
      setIsAppLoading(true);
      setTimeout(() => setIsAppLoading(false), 1500);
    }
  });
  const openMyProjects = () => handleOpenWindow('my-projects', 'MyProjects - Internet Explorer', IEIcon, MyProjects, {
    onOpenProject: (project) => {
      handleOpenWindow(
        `project-${project.id}`,
        project.title + ' - Internet Explorer',
        IEIcon,
        ProjectDetail,
        { project },
        { width: 750, height: 520 },
        true
      );
    }
  }, { width: 850, height: 600 }, true);
  const openAboutMe = () => handleOpenWindow('about-me', 'About Me', PersonIcon, AboutMe, {}, { width: 650, height: 480 }, true);
  const openResume = () => handleOpenWindow('resume', 'Resume', DocumentIcon, Resume, {}, { width: 600, height: 500 });
  const openContact = () => handleOpenWindow('contact', 'Contact Me', ContactIcon, Contact, {}, { width: 480, height: 420 });
  
  // New Apps
  const openPaint = () => handleOpenWindow('paint', 'untitled - Paint', PaintIcon, Paint, {}, { width: 700, height: 500 });
  const openNotepad = () => handleOpenWindow('notepad', 'Untitled - Notepad', NotepadIcon, Notepad, {}, { width: 500, height: 400 });
  const openClock = () => handleOpenWindow('clock', 'Date and Time Properties', ClockIcon, ClockApp, {}, { width: 350, height: 350 });
  const openCmd = () => handleOpenWindow('cmd', 'C:\\WINDOWS\\system32\\cmd.exe', CmdIcon, Cmd, {}, { width: 660, height: 340 });
  const openImageViewer = (imageId) => handleOpenWindow('image-viewer', 'Windows Picture and Fax Viewer', ImageIcon, ImageViewer, { initialImageId: imageId }, { width: 600, height: 450 });
  const openMediaPlayer = () => handleOpenWindow('media-player', 'Windows Media Player', MediaIcon, MediaPlayer, {}, { width: 500, height: 350 });
  const openMusicPlayer = () => handleOpenWindow('music-player', 'Winamp', MusicIcon, MusicPlayer, {}, { width: 300, height: 400 });

  const openMyArt = () => handleOpenWindow('my-art', 'My Art', ImageIcon, MyArt, { onOpenImageViewer: openImageViewer }, { width: 600, height: 450 });

  if (phase === 'boot') {
    return <BootScreen onComplete={() => setPhase('desktop')} />;
  }

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      <Desktop
        onOpenMyComputer={openMyComputer}
        onOpenAboutMe={openAboutMe}
        onOpenResume={openResume}
        onOpenMyProjects={openMyProjects}
        onOpenContact={openContact}
        onOpenMyArt={openMyArt}
      />

      {wm.windows.map(win => {
        const { ContentComp, ...contentProps } = win.props;
        const isIE = win.component === 'ie';
        const WrapperComp = isIE ? IEWindow : Window;

        return (
          <WrapperComp
            key={win.id}
            win={win}
            onClose={() => wm.closeWindow(win.id)}
            onMinimize={() => wm.minimizeWindow(win.id)}
            onMaximize={() => wm.maximizeWindow(win.id)}
            onFocus={() => wm.focusWindow(win.id)}
            onUpdatePosition={(pos) => wm.updateWindow(win.id, { position: pos })}
            onUpdateSize={(size) => wm.updateWindow(win.id, { size: size })}
            address={contentProps.project ? `https://www.myprojects.com/${contentProps.project.id}` : undefined}
          >
            <ContentComp {...contentProps} />
          </WrapperComp>
        );
      })}

      <AnimatePresence>
        {startMenuOpen && (
          <StartMenu
            onClose={() => setStartMenuOpen(false)}
            onOpenAboutMe={openAboutMe}
            onOpenResume={openResume}
            onOpenContact={openContact}
            onOpenMyComputer={openMyComputer}
            onOpenMyProjects={openMyProjects}
            onOpenPaint={openPaint}
            onOpenNotepad={openNotepad}
            onOpenClock={openClock}
            onOpenImageViewer={() => openImageViewer(null)}
            onOpenMediaPlayer={openMediaPlayer}
            onOpenMusicPlayer={openMusicPlayer}
            onOpenCmd={openCmd}
          />
        )}
      </AnimatePresence>

      <Taskbar
        windows={wm.windows}
        startMenuOpen={startMenuOpen}
        onStartClick={() => setStartMenuOpen(!startMenuOpen)}
        onWindowClick={(id) => {
          const win = wm.windows.find(w => w.id === id);
          if (win?.isMinimized) {
            wm.minimizeWindow(id);
            wm.focusWindow(id);
            wm.updateWindow(id, { isMinimized: false });
          } else {
            wm.focusWindow(id);
          }
        }}
      />
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              position: 'fixed',
              bottom: 35,
              right: 10,
              background: '#FFFFE1',
              border: '1px solid #000',
              borderRadius: 8,
              padding: '12px 16px',
              boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
              zIndex: 9999,
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
              maxWidth: 300
            }}
          >
            {/* Balloon Tail */}
            <div style={{ position: 'absolute', bottom: -9, right: 30, width: 0, height: 0, borderLeft: '9px solid transparent', borderRight: '9px solid transparent', borderTop: '9px solid #000' }}>
              <div style={{ position: 'absolute', bottom: 1, right: -8, width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '8px solid #FFFFE1' }} />
            </div>

            <div style={{ color: '#0054E3', fontSize: 24, marginTop: -4 }}>ℹ️</div>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: 13, marginBottom: 4 }}>Welcome to Affan xp</div>
              <div style={{ fontSize: 11 }}>A faithful xp inspired interface, custom built to showcase my work and attention to details.</div>
            </div>
            <button 
              onClick={() => setShowNotification(false)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 'bold', marginLeft: 8 }}
            >
              ✕
            </button>
          </motion.div>
        )}
      <AnimatePresence>
        {isAppLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.1)',
              zIndex: 10000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'progress',
              pointerEvents: 'all'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <img src="/icons/wait.png" alt="Loading" style={{ width: '32px', height: '32px' }} />
              <div style={{ 
                background: 'rgba(255,255,255,0.9)', 
                padding: '4px 12px', 
                borderRadius: '12px', 
                border: '1px solid #0054E3',
                fontSize: '11px',
                fontWeight: 'bold',
                color: '#0054E3',
                boxShadow: '2px 2px 5px rgba(0,0,0,0.2)'
              }}>
                Please wait...
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
