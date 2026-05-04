import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthenticXPFlag } from './XPIcons';

export default function BootScreen({ onComplete }) {
  // loading -> login -> welcome -> transition
  const [phase, setPhase] = useState('loading'); 

  useEffect(() => {
    if (phase === 'loading') {
      const timer = setTimeout(() => {
        setPhase('login');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const playSound = () => {
    try {
      const audio = new Audio('/sounds/xp-startup.mp3');
      audio.volume = 0.5;
      audio.play().catch(e => console.error("Audio failed:", e));
    } catch (e) { /* ignore */ }
  };

  const handleLogin = () => {
    setPhase('welcome');
    setTimeout(() => {
      setPhase('transition');
      setTimeout(() => {
        playSound();
        onComplete();
      }, 800);
    }, 2500); // Show welcome for 2.5 seconds
  };

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="boot-screen"
          style={{ background: phase === 'loading' ? '#000' : undefined }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatePresence mode="wait">
            {phase === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%', justifyContent: 'center' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 60, padding: '0 20px', textAlign: 'center' }}>
                  <img src="/icons/Windows_XP_(Symbol)_(Saturated).svg" alt="Windows XP Logo" style={{ width: typeof window !== 'undefined' && window.innerWidth < 600 ? '120px' : '180px', marginBottom: '15px' }} />
                  <div style={{ textAlign: 'left', width: 'fit-content', position: 'relative' }}>
                    <div style={{ fontSize: typeof window !== 'undefined' && window.innerWidth < 600 ? '32px' : '42px', fontWeight: 'bold', color: '#fff', display: 'flex', alignItems: 'baseline', letterSpacing: '-1px' }}>
                      Affan<span style={{ color: '#FFB900', fontSize: typeof window !== 'undefined' && window.innerWidth < 600 ? '20px' : '28px', fontWeight: '900', marginLeft: '4px', fontStyle: 'italic' }}>xp</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#fff', fontWeight: 'normal', marginTop: -8, marginLeft: 2, letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.9 }}>developer</div>
                  </div>
                </div>
                
                {/* Windows XP Loading Bar */}
                <div style={{ width: 160, height: 14, border: '1px solid #7c7c7c', borderRadius: 2, position: 'relative', overflow: 'hidden', background: '#000', padding: '1px' }}>
                  <motion.div
                    style={{ position: 'absolute', top: 1, left: 1, bottom: 1, width: 42, display: 'flex', gap: 2 }}
                    animate={{ x: [-42, 160] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  >
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{ 
                        flex: 1, 
                        background: 'linear-gradient(to bottom, #2838c7 0%, #5979f1 50%, #2838c7 100%)', 
                        borderRadius: 1,
                        boxShadow: 'inset 0 0 2px rgba(255,255,255,0.3)'
                      }} />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}

            {phase === 'login' && (
              <motion.div
                key="login"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="login-screen"
              >
                {/* Left Side */}
                <div className="login-left">
                  <div className="login-divider"></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/icons/Windows_XP_(Symbol)_(Saturated).svg" alt="XP Flag" style={{ width: '60px', objectFit: 'contain' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                       <div style={{ fontSize: typeof window !== 'undefined' && window.innerWidth < 600 ? '24px' : '32px', fontWeight: 'bold', color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'baseline' }}>
                         Affan<span style={{ color: '#FFB900', fontSize: typeof window !== 'undefined' && window.innerWidth < 600 ? '16px' : '20px', marginLeft: '4px', fontStyle: 'italic', fontWeight: '900' }}>xp</span>
                       </div>
                       <div style={{ fontSize: '11px', color: '#fff', marginTop: '-6px', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Developer</div>
                    </div>
                  </div>
                  <div style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                    To begin, click on Affan to log in
                  </div>
                </div>

                {/* Right Side */}
                <div className="login-right">
                  <div className="boot-user-panel" onClick={handleLogin} style={{ background: 'linear-gradient(90deg, rgba(49,106,197,0.8) 0%, rgba(49,106,197,0) 100%)', border: '1px solid rgba(255,255,255,0.2)', padding: '8px 40px 8px 8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', marginTop: 0 }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '4px', overflow: 'hidden', border: '2px solid #fff' }}>
                       <img src="/assets/Avatar/2.jpeg" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="boot-user-info">
                      <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>Affan</div>
                      <div style={{ fontSize: '11px', color: '#FFB900' }}>MERN Stack Developer</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {phase === 'welcome' && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}
              >
                <div className="boot-welcome">welcome</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <motion.div style={{ width: 8, height: 8, background: '#fff', borderRadius: '50%' }} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} />
                  <motion.div style={{ width: 8, height: 8, background: '#fff', borderRadius: '50%' }} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} />
                  <motion.div style={{ width: 8, height: 8, background: '#fff', borderRadius: '50%' }} animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} />
                </div>
              </motion.div>
            )}

            {phase === 'transition' && (
              <motion.div
                key="transition"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                  Loading your personal settings...
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Boot Screen Footer Text */}
          {phase === 'loading' && (
            <div 
              style={{ 
                position: 'absolute', 
                bottom: 40, 
                left: 0, 
                right: 0, 
                padding: '0 50px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                color: '#fff', 
                fontSize: typeof window !== 'undefined' && window.innerWidth < 600 ? 10 : 13, 
                opacity: 0.9, 
                fontFamily: 'Tahoma, "MS Sans Serif", sans-serif' 
              }}
            >
              <div>
                <div>Copyright © 1985-2001 Affan Corporation</div>
                <div style={{ marginTop: 2, fontSize: typeof window !== 'undefined' && window.innerWidth < 600 ? 8 : 11 }}>All rights reserved.</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase' }}>Affan</div>
                <div style={{ fontSize: typeof window !== 'undefined' && window.innerWidth < 600 ? 8 : 10, opacity: 0.9 }}>Corporation</div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
