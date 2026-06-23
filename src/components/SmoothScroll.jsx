import React, { useEffect, useState } from 'react';

const SmoothScroll = ({ children }) => {
  const [lenisLoaded, setLenisLoaded] = useState(false);

  useEffect(() => {
    // If Lenis is already available globally, set loaded to true
    if (window.Lenis) {
      setLenisLoaded(true);
      return;
    }

    // Load Lenis from CDN dynamically
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/lenis@1.1.13/dist/lenis.min.js';
    script.async = true;
    script.onload = () => {
      setLenisLoaded(true);
    };
    script.onerror = () => {
      console.warn('Failed to load Lenis smooth scroll from CDN. Falling back to default scroll.');
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!lenisLoaded || !window.Lenis) return;

    // Initialize Lenis using the global constructor
    const lenis = new window.Lenis({
      lerp: 0.1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [lenisLoaded]);

  return <>{children}</>;
};

export default SmoothScroll;

