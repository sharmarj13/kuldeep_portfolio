import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Scroll3DWrapper = ({ children, className = "" }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"] 
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        scale,
        transformPerspective: 1200,
        transformOrigin: "center top",
        willChange: "transform"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Scroll3DWrapper;
