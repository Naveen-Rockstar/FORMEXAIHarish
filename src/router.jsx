/**
 * FORMEXAI — Lightweight, Zero-Dependency Client-Side Router
 * Features:
 * - HTML5 History API (pushState, replaceState, popstate event)
 * - Native browser Back and Forward button support
 * - Direct route entry and page refresh support
 * - Automatic scroll to top on route transition
 * - Zero external router dependencies
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext({
  currentPath: '/',
  navigate: () => {},
  params: {},
});

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

export function RouterProvider({ children }) {
  // Normalize pathname: remove trailing slash unless root '/'
  const normalize = (path) => {
    if (!path) return '/';
    const cleaned = path.replace(/\/+$/, '');
    return cleaned === '' ? '/' : cleaned;
  };

  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return normalize(window.location.pathname);
    }
    return '/';
  });

  // Listen to browser Back / Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalize(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to, { replace = false, preserveScroll = false } = {}) => {
    if (!to) return;
    
    // Check if it's an external link
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      window.location.href = to;
      return;
    }

    // Check if it's an in-page hash anchor on the current page
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const [targetPath, hash] = to.split('#');
    const normalizedTarget = normalize(targetPath);

    if (replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }

    setCurrentPath(normalizedTarget);

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else if (!preserveScroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

/**
 * Accessible Link Component
 */
export function Link({ to, className = '', activeClassName = 'active', children, onClick, ...props }) {
  const { currentPath, navigate } = useRouter();

  const isInternal = to && !to.startsWith('http://') && !to.startsWith('https://') && !to.startsWith('mailto:') && !to.startsWith('tel:');
  const normalizedTo = to ? to.split('#')[0].replace(/\/+$/, '') || '/' : '/';
  const isActive = isInternal && (currentPath === normalizedTo || (normalizedTo !== '/' && currentPath.startsWith(normalizedTo)));

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && isInternal && !e.metaKey && !e.ctrlKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  const combinedClass = [className, isActive ? activeClassName : ''].filter(Boolean).join(' ');

  return (
    <a href={to} className={combinedClass} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
