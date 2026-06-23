import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionCard = ({ children, index, nextRef }) => {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };
    checkScreen();
    window.addEventListener('resize', checkScreen, { passive: true });
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Track the scroll progress of the next section entering the viewport
  const { scrollYProgress } = useScroll({
    target: nextRef || containerRef,
    offset: nextRef ? ["start end", "start start"] : ["start start", "end start"]
  });

  // Calculate transitions: as the next section scrolls up, this section scales down slightly,
  // shifts up slightly, and fades.
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    nextRef && isDesktop ? [1, 0.94] : [1, 1]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    nextRef && isDesktop ? [1, 0.4] : [1, 1]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    nextRef && isDesktop ? [0, -30] : [0, 0]
  );

  return (
    <div 
      ref={containerRef} 
      className="relative w-full"
    >
      <motion.div
        style={{
          scale: isDesktop ? scale : 1,
          opacity: isDesktop ? opacity : 1,
          y: isDesktop ? y : 0,
          transformOrigin: "center top",
          zIndex: index + 10,
        }}
        className="relative lg:sticky lg:top-0 w-full min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-[#050510]"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SectionCard;
