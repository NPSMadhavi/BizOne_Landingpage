import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/*
 * =========================================================
 * SINGLE STACKING CARD
 * ---------------------------------------------------------
 * Ported from the "stacking-card" pattern: each card is
 * `sticky top-0`, so as the user scrolls past it, it stays
 * pinned while the *next* card scrolls up over it. The card
 * currently underneath gets scaled down slightly (via
 * `targetScale`) so you can see a sliver of it peeking out
 * from behind the new top card, creating the stack effect.
 * =========================================================
 */
function StackCard({
  i,
  image,
  label,
  progress,
  range,
  targetScale,
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // image zooms out slightly as its card scrolls into place
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  // card shrinks as later cards stack on top of it
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] w-[90%] origin-top overflow-hidden rounded-[25px] border border-white bg-white p-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.10),0_25px_45px_rgba(0,0,0,0.12),0_55px_70px_rgba(0,0,0,0.10)] md:w-[80%] md:rounded-[28px] md:p-[12px]"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-[18px] bg-white md:rounded-[20px]">
          <motion.div style={{ scale: imageScale }} className="h-full w-full">
            <img
              src={image}
              alt={label}
              draggable={false}
              className="h-full w-full select-none rounded-[14px] border border-white object-cover object-top md:rounded-[16px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/*
 * =========================================================
 * STACKING CARDS
 * ---------------------------------------------------------
 * Wrap this around your list of { image, label } items. It
 * measures scroll progress across its own height and hands
 * each card a slice of that progress so cards stack in order.
 * =========================================================
 */
export default function StackingCards({ items }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative w-full">
      {items.map((item, i) => {
        const targetScale = 1 - (items.length - i) * 0.05;
        return (
          <StackCard
            key={item.label}
            i={i}
            image={item.image}
            label={item.label}
            progress={scrollYProgress}
            range={[i * (1 / items.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}