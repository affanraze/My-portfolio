import { useState, useCallback, useRef } from 'react';

export function useWindowManager() {
  const [windows, setWindows] = useState([]);
  const zCounter = useRef(100);

  const openWindow = useCallback((config) => {
    setWindows(prev => {
      const existing = prev.find(w => w.id === config.id);
      if (existing) {
        zCounter.current++;
        return prev.map(w =>
          w.id === config.id
            ? { ...w, isMinimized: false, zIndex: zCounter.current }
            : w
        );
      }
      zCounter.current++;
      return [...prev, {
        id: config.id,
        title: config.title,
        icon: config.icon || null,
        component: config.component,
        props: config.props || {},
        position: config.position || { x: 80 + prev.length * 30, y: 40 + prev.length * 30 },
        size: config.size || { width: 650, height: 450 },
        isMinimized: false,
        isMaximized: false,
        zIndex: zCounter.current,
      }];
    });
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows(prev => prev.filter(w => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows(prev => prev.map(w =>
      w.id === id ? { ...w, isMinimized: true } : w
    ));
  }, []);

  const maximizeWindow = useCallback((id) => {
    setWindows(prev => prev.map(w =>
      w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
    ));
  }, []);

  const focusWindow = useCallback((id) => {
    zCounter.current++;
    setWindows(prev => prev.map(w =>
      w.id === id ? { ...w, zIndex: zCounter.current } : w
    ));
  }, []);

  const updateWindow = useCallback((id, updates) => {
    setWindows(prev => prev.map(w =>
      w.id === id ? { ...w, ...updates } : w
    ));
  }, []);

  return { windows, openWindow, closeWindow, minimizeWindow, maximizeWindow, focusWindow, updateWindow };
}
