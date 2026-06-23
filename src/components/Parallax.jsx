import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * A reusable component to apply hardware-accelerated parallax scrolling effect
 * to any elements (background layers, images, decorative divs, etc.).
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.speed=0.5] Speed factor for scroll displacement. Positive moves down-to-up, negative moves up-to-down.
 * @param {string} [props.className=""] Optional additional class names.
 */
const Parallax = ({ children, speed = 0.5, className = "", style = {} }) => {
  const ref = useRef(null);

  // Track the scroll position of the element relative to the viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to vertical position (Y axis translation)
  // When the element is entering viewport (0) it translates to -100px * speed
  // When leaving (1) it translates to 100px * speed
  const y = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ ...style, y, willChange: 'transform' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Parallax;
