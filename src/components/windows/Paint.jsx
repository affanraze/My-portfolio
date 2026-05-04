import React, { useRef, useState, useEffect } from 'react';

export default function Paint() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(2);

  const colors = [
    '#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080',
    '#FFFFFF', '#C0C0C0', '#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.closePath();
      setIsDrawing(false);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#ECE9D8' }}>
      <div style={{ display: 'flex', gap: '10px', padding: '4px 8px', borderBottom: '1px solid #ACA899', background: '#ECE9D8' }}>
        <button className="xp-button" onClick={clearCanvas}>Clear</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '11px' }}>Size:</span>
          <select value={brushSize} onChange={(e) => setBrushSize(Number(e.target.value))} style={{ fontSize: '11px' }}>
            <option value={2}>Small</option>
            <option value={5}>Medium</option>
            <option value={10}>Large</option>
          </select>
        </div>
      </div>
      
      <div style={{ display: 'flex', flex: 1, padding: '4px', gap: '4px', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 16px)', gap: '2px', alignContent: 'start', padding: '4px', background: '#ECE9D8', border: '1px solid #808080' }}>
          {colors.map(c => (
            <div 
              key={c}
              onClick={() => setColor(c)}
              style={{
                width: '16px', height: '16px', backgroundColor: c, 
                border: color === c ? '2px solid #000' : '1px solid #808080',
                cursor: 'pointer',
                boxShadow: color === c ? 'inset 1px 1px 0 #fff' : 'none'
              }}
            />
          ))}
        </div>
        
        <div style={{ flex: 1, overflow: 'auto', background: '#808080', padding: '4px' }}>
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseOut={stopDrawing}
            style={{ background: '#FFFFFF', cursor: 'crosshair', border: '1px solid #000' }}
          />
        </div>
      </div>
    </div>
  );
}
