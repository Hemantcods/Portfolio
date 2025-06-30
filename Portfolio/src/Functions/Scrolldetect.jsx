import { useEffect, useState } from 'react';

function useScrollDirection() {
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setDirection('up');
      }
      lastScrollY = currentScrollY;
    };

    const handleKey = (e) => {
      const scrollKeys = {
        ArrowUp: 'up',
        ArrowDown: 'down',
        PageUp: 'up',
        PageDown: 'down',
        ' ': 'down',
      };
      if (scrollKeys[e.key]) setDirection(scrollKeys[e.key]);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  return direction;
}

export default useScrollDirection;