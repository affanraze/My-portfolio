import React, { useState } from 'react';

export default function Notepad() {
  const [text, setText] = useState('Welcome to Notepad!\n\nYou can type your notes here.');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#fff' }}>
      <div style={{ padding: '2px 4px', background: '#ECE9D8', borderBottom: '1px solid #ACA899', fontSize: 11, display: 'flex', gap: 12 }}>
        <span style={{ cursor: 'pointer' }}>File</span>
        <span style={{ cursor: 'pointer' }}>Edit</span>
        <span style={{ cursor: 'pointer' }}>Format</span>
        <span style={{ cursor: 'pointer' }}>View</span>
        <span style={{ cursor: 'pointer' }}>Help</span>
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          flex: 1,
          width: '100%',
          resize: 'none',
          border: 'none',
          padding: '4px',
          fontFamily: "'Courier New', Courier, monospace",
          fontSize: '13px',
          outline: 'none'
        }}
      />
    </div>
  );
}
