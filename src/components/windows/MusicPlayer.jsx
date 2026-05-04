import React, { useState, useRef, useEffect } from 'react';
import { MusicIcon } from '../XPIcons';

const PLAYLIST = [
  { id: 1, title: 'Lofi Study Beats', artist: 'Chillhop', src: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3', cover: 'assets/Avatar/5.png' },
  { id: 2, title: 'In the End', artist: 'Linkin Park', src: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3', cover: 'assets/Avatar/5.png' }
];

export default function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const track = PLAYLIST[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      nextTrack();
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    setProgress(0);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    setProgress(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#ECE9D8' }}>
      <audio 
        ref={audioRef}
        src={track.src}
      />
      <div style={{ display: 'flex', padding: '16px', gap: '16px', alignItems: 'center', background: 'linear-gradient(180deg, #fff 0%, #ECE9D8 100%)', borderBottom: '1px solid #ACA899' }}>
        <div style={{ width: 80, height: 80, background: '#333', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', position: 'relative', overflow: 'hidden' }}>
          <img src={track.cover} alt={track.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1, overflow: 'hidden' }}>
          <h2 style={{ fontSize: 16, margin: 0, color: '#0054E3', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{track.title}</h2>
          <p style={{ fontSize: 12, color: '#666', margin: '4px 0', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>{track.artist}</p>
          <div style={{ fontSize: 11, color: '#333', marginTop: 8 }}>{isPlaying ? 'Playing...' : 'Paused'}</div>
        </div>
      </div>
      <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ height: 4, background: '#fff', border: '1px solid #ACA899', marginBottom: 16, position: 'relative' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: '#0054E3' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button className="xp-button" style={{ fontSize: 16 }} onClick={prevTrack}>⏮</button>
          <button className="xp-button" style={{ fontSize: 16, width: 60 }} onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="xp-button" style={{ fontSize: 16 }} onClick={nextTrack}>⏭</button>
        </div>
      </div>
    </div>
  );
}
