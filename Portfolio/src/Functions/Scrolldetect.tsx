import { useEffect, useState, useRef } from 'react';

function Scrolldetect() {
  const [direction, setDirection] = useState<'up' | 'down' | 'none'>('none');
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const setScrollDirection = (dir: 'up' | 'down') => {
      setDirection(dir);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setDirection('none'), 150);
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY < 0) setScrollDirection('up');
      else if (e.deltaY > 0) setScrollDirection('down');
    };

    const handleKey = (e: KeyboardEvent) => {
      const scrollKeys: Record<string, 'up' | 'down'> = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        PageUp: 'up',
        PageDown: 'down',
        ' ': 'down',
      };
      if (scrollKeys[e.key]) setScrollDirection(scrollKeys[e.key]);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return direction;
}

export default Scrolldetect;