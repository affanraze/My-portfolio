import React, { useState, useEffect, useRef } from 'react';

export default function Cmd() {
  const [lines, setLines] = useState([
    'Microsoft Windows XP [Version 5.1.2600]',
    '(C) Copyright 1985-2001 Microsoft Corp.',
    '',
    'C:\\Documents and Settings\\Affan Dev>'
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView();
  }, [lines]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const input = e.target.value;
      if (input.trim() !== '') {
        setLines(prev => [
          ...prev.slice(0, -1),
          `C:\\Documents and Settings\\Affan Dev>${input}`,
          `'${input}' is not recognized as an internal or external command,`,
          'operable program or batch file.',
          '',
          'C:\\Documents and Settings\\Affan Dev>'
        ]);
      } else {
        setLines(prev => [...prev, 'C:\\Documents and Settings\\Affan Dev>']);
      }
      e.target.value = '';
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#ccc', fontFamily: "'Consolas', 'Lucida Console', monospace", fontSize: '12px', height: '100%', padding: '4px', overflowY: 'auto' }}>
      {lines.map((line, i) => {
        if (i === lines.length - 1) {
          return (
            <div key={i} style={{ display: 'flex' }}>
              <span style={{ marginRight: '8px', whiteSpace: 'pre' }}>{line}</span>
              <input
                autoFocus
                onKeyDown={handleKeyDown}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#ccc',
                  outline: 'none',
                  fontFamily: "'Consolas', 'Lucida Console', monospace",
                  fontSize: '12px',
                  flex: 1
                }}
              />
            </div>
          );
        }
        return <div key={i} style={{ whiteSpace: 'pre-wrap', marginBottom: '2px' }}>{line}</div>;
      })}
      <div ref={endRef} />
    </div>
  );
}
