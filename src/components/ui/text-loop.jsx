import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, Children } from "react";

/**
 * TextLoop — cycles through its children with a smooth slide animation.
 *
 * Props:
 *   children      — array of React nodes to loop through
 *   className     — extra classes applied to the wrapper
 *   interval      — seconds between each swap (default 2)
 *   transition    — framer-motion Transition object (default { duration: 0.3 })
 *   variants      — custom framer-motion Variants; falls back to built-in slide
 *   onIndexChange — callback fired with the new index on every change
 */
export function TextLoop({
  children,
  className = "",
  interval = 2,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    const intervalMs = interval * 1000;

    const timer = setInterval(() => {
      setCurrentIndex((current) => {
        const next = (current + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange]);

  const motionVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  return (
    <span className={`relative inline-block whitespace-nowrap overflow-hidden ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants || motionVariants}
          style={{ display: "inline-block" }}
        >
          {items[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
