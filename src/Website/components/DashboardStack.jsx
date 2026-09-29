import { useEffect, useRef, useState } from "react";

import {
  cubicBezier,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { Pause, Play } from "lucide-react";

import "./DashboardStack.css";
import ProductScreenshot from "./ProductScreenshot";

const PERIOD = 3000;
const DURATION = 850;

const ease = cubicBezier(0.65, 0, 0.35, 1);

const labels = [
  "Dashboard",
  "Balance Sheet",
  "Bank",
  "Assets",
  "Audit",
  "GST",
  "Invoices",
  "Profit & Loss",
  "Stock",
  "Payroll",
];

const modulo = (value, count) =>
  ((value % count) + count) % count;

function CarouselCard({
  src,
  index,
  count,
  position,
  geometry,
  active,
  label,
  onHoverStart,
  onHoverEnd,
}) {
  const transform = useTransform(position, (current) => {
    const offset = index - current;

    if (offset === 0) return "none";

    const tilt = Math.max(
      -1,
      Math.min(1, offset)
    );

    return `translate3d(
      ${offset * geometry.step}px,
      ${tilt * (tilt < 0 ? 18 : geometry.drop)}px,
      0
    ) rotate(${tilt * geometry.tilt}deg)`;
  });

  const selected = index === active;

  return (
    <motion.div
      className="dashboard-carousel__card"
      style={{
        transform,
        width: geometry.width,
        height: geometry.height,
        marginLeft: -geometry.width / 2,
      }}
      role="group"
      aria-roledescription="slide"
      aria-label={`${modulo(index, count) + 1} of ${count}: ${label}`}
      aria-hidden={!selected}
      data-slide={index}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <ProductScreenshot
        src={src}
        alt={`BizOne ${label}`}
        draggable={false}
        decoding="async"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "top center",
        }}
      />
    </motion.div>
  );
}

export function DashboardStack({ images }) {
  const count = images.length;

  const viewport = useRef(null);

  const [width, setWidth] = useState(0);

  const [aspect, setAspect] =
    useState(16 / 9);

  const [ready, setReady] =
    useState(false);

  const [paused, setPaused] =
    useState(false);

  const [active, setActive] =
    useState(count);

  const [
    reducedMotion,
    setReducedMotion,
  ] = useState(() =>
    window
      .matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      .matches
  );

  const position =
    useMotionValue(count);

  const progress =
    useMotionValue(0);

  const clock = useRef({
    current: count,
    elapsed: 0,
    movement: null,
  });

  const selectRef = useRef(null);

  // Slightly increased card width
  const cardWidth = Math.round(
    (width < 640
      ? width * 0.84
      : width < 1024
        ? width * 0.74
        : Math.min(
            1280,
            width * 0.64
          )) / 2
  ) * 2;

  const geometry = {
    width: cardWidth,

    // Slightly increased card height
    height:
      (cardWidth / aspect) * 1.02,

    step:
      cardWidth +
      width *
        (width < 640
          ? 0.075
          : 0.07),

    tilt:
      width < 640 ? 4 : 6,

    drop:
      cardWidth * 0.16,
  };

  useEffect(() => {
    const preference =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

    const update = () =>
      setReducedMotion(
        preference.matches
      );

    preference.addEventListener(
      "change",
      update
    );

    update();

    return () =>
      preference.removeEventListener(
        "change",
        update
      );
  }, []);

  useEffect(() => {
    const observer =
      new ResizeObserver(
        ([entry]) =>
          setWidth(
            entry.contentRect.width
          )
      );

    observer.observe(
      viewport.current
    );

    return () =>
      observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    setReady(false);

    const pending =
      images.map(
        async (src, index) => {
          const img =
            new Image();

          img.src = src;

          await img.decode();

          if (
            !cancelled &&
            index === 0 &&
            img.naturalHeight
          ) {
            setAspect(
              img.naturalWidth /
                img.naturalHeight
            );
          }
        }
      );

    Promise.allSettled(
      pending
    ).then(() => {
      if (!cancelled) {
        setReady(true);
      }
    });

    clock.current = {
      current: count,
      elapsed: 0,
      movement: null,
    };

    position.set(count);

    progress.set(0);

    setActive(count);

    return () => {
      cancelled = true;
    };
  }, [
    images,
    count,
    position,
    progress,
  ]);

  useEffect(() => {
    let frame;
    let last = null;

    const state =
      clock.current;

    const finish = (
      target
    ) => {
      // Three complete copies cover even long manual selections.
      // Rebase only after motion finishes to the identical middle-copy arrangement.

      const canonical =
        count +
        modulo(
          target,
          count
        );

      state.current =
        canonical;

      state.movement =
        null;

      position.set(
        canonical
      );

      setActive(
        canonical
      );
    };

    const select = (
      target
    ) => {
      if (
        !ready ||
        count < 2 ||
        state.movement
      )
        return;

      state.elapsed = 0;

      progress.set(0);

      setActive(
        target
      );

      if (
        reducedMotion ||
        target ===
          state.current
      ) {
        finish(target);
      } else {
        state.movement = {
          from:
            state.current,

          to:
            target,

          elapsed: 0,
        };
      }
    };

    if (
      reducedMotion &&
      state.movement
    ) {
      finish(
        state.movement.to
      );
    }

    selectRef.current = (
      index
    ) => {
      if (
        state.movement
      ) {
        state.pending =
          index;

        return;
      }

      let delta =
        modulo(
          index -
            modulo(
              state.current,
              count
            ),
          count
        );

      if (
        delta >
        count / 2
      ) {
        delta -=
          count;
      }

      select(
        state.current +
          delta
      );
    };

    const tick = (
      now
    ) => {
      const delta =
        last === null
          ? 0
          : Math.min(
              now - last,
              64
            );

      last = now;

      if (
        !document.hidden &&
        ready &&
        !paused
      ) {
        if (
          state.movement
        ) {
          state.movement.elapsed +=
            delta;

          const fraction =
            Math.min(
              1,
              state
                .movement
                .elapsed /
                DURATION
            );

          position.set(
            state
              .movement
              .from +
              (state
                .movement
                .to -
                state
                  .movement
                  .from) *
                ease(
                  fraction
                )
          );

          if (
            fraction ===
            1
          ) {
            finish(
              state
                .movement
                .to
            );
          }
        }

        if (
          !reducedMotion &&
          count > 1
        ) {
          state.elapsed +=
            delta;

          progress.set(
            Math.min(
              1,
              state.elapsed /
                PERIOD
            )
          );

          if (
            state.elapsed >=
              PERIOD &&
            !state.movement
          ) {
            select(
              state.current +
                1
            );
          }
        }
      } else if (
        !document.hidden &&
        ready &&
        paused &&
        state.movement
      ) {
        // Existing slide movement can complete while autoplay is paused.

        state.movement.elapsed +=
          delta;

        const fraction =
          Math.min(
            1,
            state
              .movement
              .elapsed /
              DURATION
          );

        position.set(
          state
            .movement
            .from +
            (state
              .movement
              .to -
              state
                .movement
                .from) *
              ease(
                fraction
              )
        );

        if (
          fraction ===
          1
        ) {
          finish(
            state
              .movement
              .to
          );
        }
      }

      if (
        !document.hidden &&
        !state.movement &&
        state.pending !==
          undefined
      ) {
        const pending =
          state.pending;

        delete state.pending;

        selectRef.current?.(
          pending
        );
      }

      frame =
        requestAnimationFrame(
          tick
        );
    };

    const visibility =
      () => {
        last = null;
      };

    document.addEventListener(
      "visibilitychange",
      visibility
    );

    frame =
      requestAnimationFrame(
        tick
      );

    return () => {
      cancelAnimationFrame(
        frame
      );

      document.removeEventListener(
        "visibilitychange",
        visibility
      );

      selectRef.current =
        null;
    };
  }, [
    count,
    paused,
    ready,
    reducedMotion,
    position,
    progress,
  ]);

  const activeIndex =
    count
      ? modulo(
          active,
          count
        )
      : 0;

  return (
    <div
      ref={viewport}
      className="dashboard-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="BizOne product previews"
    >
      <div
        className="dashboard-carousel__stage"
        style={{
          // Reduced unnecessary bottom gap
          height:
            geometry.height +
            geometry.drop +
            0,
        }}
      >
        {count > 0 &&
          Array.from(
            {
              length:
                count *
                3,
            },

            (
              _,
              index
            ) => (
              <CarouselCard
                key={`${index}-${
                  images[
                    index %
                      count
                  ]
                }`}
                src={
                  images[
                    index %
                      count
                  ]
                }
                index={
                  index
                }
                count={
                  count
                }
                position={
                  position
                }
                geometry={
                  geometry
                }
                active={
                  active
                }
                label={
                  labels[
                    index %
                      count
                  ] ||
                  `Preview ${
                    (index %
                      count) +
                    1
                  }`
                }
                onHoverStart={() =>
                  setPaused(true)
                }
                onHoverEnd={() =>
                  setPaused(false)
                }
              />
            )
          )}
      </div>
    </div>
  );
}