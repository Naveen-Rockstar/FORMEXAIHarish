/**
 * Formexai - useScrollSpy Hook
 * Tracks the active in-view section ID for navigation highlighting.
 */

import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(id);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveId('');
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
