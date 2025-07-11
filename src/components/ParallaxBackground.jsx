import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxBackground = ({ children, imageUrl, speed = 0.5 }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", `${50 * speed}%`]);

  return (
    <div className="relative h-full w-full overflow-hidden" ref={containerRef}>
      <motion.div 
        className="absolute inset-0"
        style={{ y: yBg }}
      >
        {imageUrl && (
          <img 
            src={imageUrl}
            alt="Background"
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
