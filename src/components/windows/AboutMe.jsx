import React, { useState } from 'react';
import { InstagramIcon, GithubIcon, LinkedInIcon } from '../XPIcons';

export default function AboutMe() {
  const [expanded, setExpanded] = useState({ social: true, skills: true, software: true });

  const toggleSection = (section) => {
    setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="about-container">
      {/* Left Sidebar */}
      <div className="about-sidebar">

        {/* Social Links */}
        <div style={{ marginBottom: '12px' }}>
          <div
            onClick={() => toggleSection('social')}
            style={{ background: 'linear-gradient(180deg, #fff 0%, #E8EEF7 100%)', borderRadius: '4px 4px 0 0', padding: '4px 8px', border: '1px solid #fff', borderBottom: 'none', color: '#003399', fontWeight: 'bold', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
          >
            <span>Social Links</span>
            <span style={{ fontSize: '14px', transform: expanded.social ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>^</span>
          </div>
          {expanded.social && (
            <div style={{ background: 'rgba(0,0,0,0.1)', border: '1px solid #fff', borderTop: 'none', borderRadius: '0 0 4px 4px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <div style={{ width: 16, height: 16, display: 'flex' }}><InstagramIcon /></div>
                <span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Instagram</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <div style={{ width: 16, height: 16, display: 'flex' }}><GithubIcon /></div>
                <span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Github</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <div style={{ width: 16, height: 16, display: 'flex' }}><LinkedInIcon /></div>
                <span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>LinkedIn</span>
              </div>
            </div>
          )}
        </div>

        {/* Skills */}
        <div style={{ marginBottom: '12px' }}>
          <div
            onClick={() => toggleSection('skills')}
            style={{ background: 'linear-gradient(180deg, #fff 0%, #E8EEF7 100%)', borderRadius: '4px 4px 0 0', padding: '4px 8px', border: '1px solid #fff', borderBottom: 'none', color: '#003399', fontWeight: 'bold', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
          >
            <span>Skills</span>
            <span style={{ fontSize: '14px', transform: expanded.skills ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>^</span>
          </div>
          {expanded.skills && (
            <div style={{ background: 'rgba(0,0,0,0.1)', border: '1px solid #fff', borderTop: 'none', borderRadius: '0 0 4px 4px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>⚛️</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>React</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>🟢</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Node.js & Express</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>🍃</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>MongoDB</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>🌐</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>REST APIs</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>🎨</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>UI/UX Design</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>🧠</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Problem Solving</span></div>
            </div>
          )}
        </div>

        {/* Software */}
        <div style={{ marginBottom: '12px' }}>
          <div
            onClick={() => toggleSection('software')}
            style={{ background: 'linear-gradient(180deg, #fff 0%, #E8EEF7 100%)', borderRadius: '4px 4px 0 0', padding: '4px 8px', border: '1px solid #fff', borderBottom: 'none', color: '#003399', fontWeight: 'bold', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
          >
            <span>Software</span>
            <span style={{ fontSize: '14px', transform: expanded.software ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>^</span>
          </div>
          {expanded.software && (
            <div style={{ background: 'rgba(0,0,0,0.1)', border: '1px solid #fff', borderTop: 'none', borderRadius: '0 0 4px 4px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>💻</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>VS Code</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>📦</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Git / GitHub</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>🐳</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Docker</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>📮</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Postman</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>✒️</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Figma</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>🗂️</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Notion</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>🛠️</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Chrome DevTools</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ fontSize: '14px' }}>⚡</span><span style={{ fontSize: '11px', color: '#fff', textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Vercel / Netlify</span></div>
            </div>
          )}
        </div>

      </div>

      {/* Main Content Area */}
      <div className="about-main">
        <h1 style={{ fontSize: '28px', color: '#fff', marginBottom: '24px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          About Me
        </h1>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
          <div style={{ width: '64px', height: '64px', flexShrink: 0 }}>
            <img src="/assets/Avatar/4.jpeg" alt="Avatar" style={{ width: '100%', height: '100%', borderRadius: '8px', border: '2px solid rgba(255,255,255,0.5)', boxShadow: '2px 2px 5px rgba(0,0,0,0.3)' }} />
          </div>
          <p style={{ fontSize: '13px', lineHeight: '1.6', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            I'm Affan, a passionate MERN Stack Developer. I specialize in building modern, scalable web applications using MongoDB, Express.js, React, and Node.js. My journey in web development started with a deep curiosity for how things work under the hood, and it has evolved into a full-fledged career where I build interactive and immersive digital experiences.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div style={{ width: '64px', height: '64px', flexShrink: 0 }}>
            <img src="/assets/Avatar/1.png" alt="Avatar" style={{ width: '100%', height: '100%', borderRadius: '8px', border: '2px solid rgba(255,255,255,0.5)', boxShadow: '2px 2px 5px rgba(0,0,0,0.3)' }} />
          </div>
          <p style={{ fontSize: '13px', lineHeight: '1.6', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Beyond just writing code, I focus heavily on UI/UX design, ensuring that every application I build is not only highly functional but also visually stunning. I tend to invest heavily in the architecture and performance of whatever I'm building, rather than rushing to get it out the door. This Windows XP-themed portfolio is a tribute to the classic era of computing, blended with the power of modern web technologies.
          </p>
        </div>
      </div>
    </div>
  );
}
