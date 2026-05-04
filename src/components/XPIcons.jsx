import React from 'react';

export const WindowsFlag = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1" fill="#FF0000"/>
    <rect x="9" y="1" width="6" height="6" rx="1" fill="#00B800"/>
    <rect x="1" y="9" width="6" height="6" rx="1" fill="#0050EF"/>
    <rect x="9" y="9" width="6" height="6" rx="1" fill="#FFB900"/>
  </svg>
);

export const AuthenticXPFlag = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.4))' }}>
    <path d="M 5,20 Q 20,5 45,15 L 45,45 Q 20,35 5,50 Z" fill="#F04F23" />
    <path d="M 50,15 Q 75,25 95,15 L 95,45 Q 75,55 50,45 Z" fill="#79C314" />
    <path d="M 5,53 Q 20,38 45,48 L 45,78 Q 20,68 5,83 Z" fill="#00A5F3" />
    <path d="M 50,48 Q 75,58 95,48 L 95,78 Q 75,88 50,78 Z" fill="#FFBA00" />
    {/* White dividers (optional but adds gloss) */}
    <path d="M 5,20 Q 20,5 45,15" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" />
    <path d="M 50,15 Q 75,25 95,15" stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none" />
  </svg>
);

export const MyComputerIcon = ({ width = '100%', height = '100%' }) => (
  <img src="/icons/this pc.webp" alt="My Computer" style={{ width, height, objectFit: 'contain' }} />
);

export const RecycleBinIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <path d="M14 14h20l-2 28H16L14 14z" fill="#B8C4D8" stroke="#5A6270" strokeWidth="1"/>
    <rect x="12" y="10" width="24" height="4" rx="1" fill="#8890A0" stroke="#5A6270" strokeWidth="1"/>
    <rect x="20" y="7" width="8" height="4" rx="1" fill="#A0A8B4" stroke="#5A6270" strokeWidth="0.5"/>
    <line x1="20" y1="18" x2="19" y2="38" stroke="#5A6270" strokeWidth="0.8"/>
    <line x1="24" y1="18" x2="24" y2="38" stroke="#5A6270" strokeWidth="0.8"/>
    <line x1="28" y1="18" x2="29" y2="38" stroke="#5A6270" strokeWidth="0.8"/>
  </svg>
);

export const FolderIcon = ({ color = '#FFD54F' }) => (
  <svg viewBox="0 0 48 48" fill="none">
    <path d="M4 12V40a2 2 0 002 2h36a2 2 0 002-2V16a2 2 0 00-2-2H22l-4-4H6a2 2 0 00-2 2z" fill={color} stroke="#C6930A" strokeWidth="1"/>
    <path d="M4 16h40v24a2 2 0 01-2 2H6a2 2 0 01-2-2V16z" fill={color} opacity="0.85"/>
    <path d="M4 16h40v4H4z" fill="rgba(255,255,255,0.3)"/>
  </svg>
);

export const IEIcon = ({ width = '100%', height = '100%' }) => (
  <img src="/icons/Internet-Explorer-Logo-2001.png" alt="Internet Explorer" style={{ width, height, objectFit: 'contain' }} />
);

export const PersonIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="16" r="9" fill="#5BA3E6" stroke="#2968B0" strokeWidth="1"/>
    <path d="M8 42c0-9 7-16 16-16s16 7 16 16" fill="#5BA3E6" stroke="#2968B0" strokeWidth="1"/>
  </svg>
);

export const DocumentIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <path d="M12 4h18l10 10v30a2 2 0 01-2 2H12a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#fff" stroke="#5A6270" strokeWidth="1.5"/>
    <path d="M30 4v10h10" fill="#E0E0E0" stroke="#5A6270" strokeWidth="1"/>
    <line x1="16" y1="22" x2="32" y2="22" stroke="#999" strokeWidth="1"/>
    <line x1="16" y1="27" x2="32" y2="27" stroke="#999" strokeWidth="1"/>
    <line x1="16" y1="32" x2="28" y2="32" stroke="#999" strokeWidth="1"/>
    <line x1="16" y1="37" x2="30" y2="37" stroke="#999" strokeWidth="1"/>
  </svg>
);

export const ContactIcon = ({ width = '100%', height = '100%' }) => (
  <img src="/icons/contactme.ico" alt="Contact Me" style={{ width, height, objectFit: 'contain' }} />
);

export const DriveIcon = () => (
  <svg viewBox="0 0 32 32" fill="none">
    <rect x="2" y="8" width="28" height="16" rx="2" fill="#C8C4B0" stroke="#5A6270" strokeWidth="1"/>
    <rect x="4" y="11" width="18" height="10" rx="1" fill="#E8E5D9"/>
    <circle cx="26" cy="16" r="2" fill="#5DB84A"/>
    <rect x="4" y="22" width="8" height="1" fill="#ACA899"/>
  </svg>
);

export const LogOffIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <path d="M8 1v6M4.5 3.5A6 6 0 1013 8a6 6 0 00-5-7.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const ShutDownIcon = () => (
  <svg viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6" fill="none" stroke="#FF4444" strokeWidth="1.5"/>
    <line x1="8" y1="2" x2="8" y2="8" stroke="#FF4444" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const BackIcon = () => (
  <svg viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" fill="#4CAF50"/>
    <path d="M12 5L7 10l5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ForwardIcon = () => (
  <svg viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" fill="#4CAF50"/>
    <path d="M8 5l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StopIcon = () => (
  <svg viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="9" fill="#E53935"/>
    <line x1="6" y1="6" x2="14" y2="14" stroke="#fff" strokeWidth="2"/>
    <line x1="14" y1="6" x2="6" y2="14" stroke="#fff" strokeWidth="2"/>
  </svg>
);

export const RefreshIcon = () => (
  <svg viewBox="0 0 20 20" fill="none">
    <path d="M3 10a7 7 0 0113-3.5M17 10a7 7 0 01-13 3.5" stroke="#1C75D8" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 3v4h-4M4 17v-4h4" stroke="#1C75D8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const HomeIcon = () => (
  <svg viewBox="0 0 20 20" fill="none">
    <path d="M3 10l7-7 7 7" stroke="#FF8F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 9v7a1 1 0 001 1h3v-4h2v4h3a1 1 0 001-1V9" stroke="#FF8F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="#333"/>
  </svg>
);

export const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="2" fill="#0077B5"/>
    <path d="M7 10v7M7 7v.01M11 17v-4c0-1.5 1-2 2-2s2 .5 2 2v4M11 10v7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)"/>
    <defs><linearGradient id="ig" x1="2" y1="22" x2="22" y2="2"><stop stopColor="#FFDD55"/><stop offset=".5" stopColor="#FF543E"/><stop offset="1" stopColor="#C837AB"/></linearGradient></defs>
    <circle cx="12" cy="12" r="5" stroke="#fff" strokeWidth="1.5"/>
    <circle cx="18" cy="6" r="1" fill="#fff"/>
  </svg>
);

export const PaintIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <path d="M24 4c-11 0-20 7.5-20 16.5C4 29 11.5 35 20 36c1.5.2 2-1 2-2s-1-2.5 0-3c1-.6 2.5 1 4 1h3c8 0 15-6 15-14C44 11.5 35 4 24 4z" fill="#E8D88C" stroke="#A68310" strokeWidth="2"/>
    <circle cx="12" cy="16" r="3" fill="#E53935"/>
    <circle cx="20" cy="10" r="3" fill="#4CAF50"/>
    <circle cx="30" cy="12" r="3" fill="#1C75D8"/>
    <circle cx="36" cy="18" r="3" fill="#FFB900"/>
    <path d="M16 42l16-16-4-4-16 16c-1 1-1 3 0 4h0c1 1 3 1 4 0z" fill="#D32F2F"/>
    <path d="M12 44l4-4-2-2-4 4c-.5.5-.5 1.5 0 2h0c.5.5 1.5.5 2 0z" fill="#757575"/>
  </svg>
);

export const ClockIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" fill="#fff" stroke="#1C75D8" strokeWidth="3"/>
    <circle cx="24" cy="24" r="16" fill="none" stroke="#E0E7F0" strokeWidth="1"/>
    <path d="M24 10v14l8 8" stroke="#333" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="24" r="2" fill="#E53935"/>
  </svg>
);

export const NotepadIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <path d="M10 6h28v36H10V6z" fill="#fff" stroke="#5A6270" strokeWidth="1.5"/>
    <path d="M6 10h36v6H6v-6z" fill="#1C75D8" stroke="#0B5ED7" strokeWidth="1.5"/>
    <path d="M10 6h6v36h-6V6z" fill="#E0E7F0" stroke="#5A6270" strokeWidth="1.5"/>
    <line x1="18" y1="20" x2="34" y2="20" stroke="#999" strokeWidth="1"/>
    <line x1="18" y1="26" x2="34" y2="26" stroke="#999" strokeWidth="1"/>
    <line x1="18" y1="32" x2="30" y2="32" stroke="#999" strokeWidth="1"/>
    <circle cx="13" cy="12" r="1.5" fill="#333"/>
    <circle cx="13" cy="20" r="1.5" fill="#333"/>
    <circle cx="13" cy="28" r="1.5" fill="#333"/>
    <circle cx="13" cy="36" r="1.5" fill="#333"/>
  </svg>
);

export const CmdIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <rect x="6" y="8" width="36" height="32" rx="2" fill="#000" stroke="#5A6270" strokeWidth="2"/>
    <rect x="6" y="8" width="36" height="8" rx="2" fill="#E0E0E0" stroke="#5A6270" strokeWidth="1"/>
    <path d="M10 24l6-4-6-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="18" y1="24" x2="24" y2="24" stroke="#fff" strokeWidth="2"/>
  </svg>
);

export const MediaIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <rect x="6" y="10" width="36" height="28" rx="2" fill="#1C75D8" stroke="#0B5ED7" strokeWidth="2"/>
    <circle cx="24" cy="24" r="10" fill="#fff"/>
    <path d="M21 19l8 5-8 5v-10z" fill="#1C75D8"/>
    <circle cx="12" cy="16" r="2" fill="#fff"/>
    <circle cx="36" cy="16" r="2" fill="#fff"/>
    <circle cx="12" cy="32" r="2" fill="#fff"/>
    <circle cx="36" cy="32" r="2" fill="#fff"/>
  </svg>
);

export const MusicIcon = () => (
  <svg viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="20" fill="#222" stroke="#666" strokeWidth="2"/>
    <circle cx="24" cy="24" r="8" fill="#1C75D8"/>
    <circle cx="24" cy="24" r="2" fill="#fff"/>
    <path d="M28 14v10a4 4 0 00-6 3 4 4 0 108 0v-8h4v-5h-6z" fill="#fff"/>
  </svg>
);

export const ImageIcon = ({ width = '100%', height = '100%' }) => (
  <img src="/icons/my art.png" alt="My Art" style={{ width, height, objectFit: 'contain' }} />
);
