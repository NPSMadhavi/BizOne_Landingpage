import { ArrowRight, Sparkles } from "lucide-react";
import { TextLoop } from "@/components/ui/text-loop";


import assetsImage    from "../assets/assets.png";
import auditImage     from "../assets/audit.png";
import balanceImage   from "../assets/balance.png";
import bankImage      from "../assets/bank.png";
import batchImage     from "../assets/batch.png";
import dashboardImage from "../assets/dashboard.png";
import gstImage       from "../assets/gst.png";
import invoicesImage  from "../assets/invoices.png";
import pointImage     from "../assets/point.png";
import profitImage    from "../assets/profit.png";
import reportImage    from "../assets/report.png";
import stockImage     from "../assets/stock.png";
import payrollImage   from "../assets/payroll.png";

const dashboardImages = [
  dashboardImage,
  balanceImage,
  bankImage,
  assetsImage,
  auditImage,
  gstImage,
  invoicesImage,
  profitImage,
  stockImage,
  payrollImage,
];

const animatedTexts = [
  "from a single workspace",
  "with powerful automation",
  "across every business function",
  "without switching between tools",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-x-clip"
      style={{
        background: `
          radial-gradient(
            63.8% 99.45% at 100% 100%,
            #FFE8B9 0%,
            rgba(255, 232, 185, 0) 100%
          ),
          radial-gradient(
            67.27% 104.86% at 100% 28.23%,
            #FFDBD7 0%,
            rgba(255, 219, 215, 0) 100%
          ),
          radial-gradient(
            31.42% 60.81% at 9.81% 65.17%,
            #D8EAFB 0%,
            rgba(216, 234, 251, 0) 100%
          ),
          radial-gradient(
            56.6% 100% at 50% 0%,
            #F2F7FB 15.5%,
            rgba(242, 247, 251, 0) 100%
          ),
          #CEE4F8
        `,
      }}
    >
      {/* Background blur orb */}
      <div className="absolute left-1/2 top-[-180px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-6 pb-10 pt-[150px] lg:px-8">
        {/* ── BADGE ── */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FFFFFF] px-5 py-1 shadow-md md:mb-9 md:mt-4 md:py-2">
          <Sparkles size={18} strokeWidth={2} className="shrink-0 text-[#0072F8]" />
          <span className="text-[11px] font-medium text-[#596475] md:text-[13px] lg:text-[14px]">
            Multi-company business management
          </span>
        </div>

        {/* ── HEADING ── */}
        <h1
          className="
            max-w-5xl text-center
            text-[23px] font-bold leading-[1.4] text-[#071123]
            md:text-[43px] lg:text-[54px]
          "
        >
          Run your entire business,
          <br />
          <TextLoop
            interval={4}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="align-bottom"
          >
            {animatedTexts.map((text) => (
              <span
                key={text}
                style={{
                  background:
                    "linear-gradient(135deg, #002E99 0%, #0072F8 50%, #009FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {text}
              </span>
            ))}
          </TextLoop>
        </h1>

        {/* ── DESCRIPTION ── */}
        <p className="mt-3 max-w-4xl text-center text-[15px] leading-5 text-[#596475] md:mt-5 md:text-[19px] md:leading-7 lg:text-[20px]">
          BizOne is a multi-company ERP that brings sales, finance, inventory,
          HR and projects together — so your teams stop switching tools and
          start moving faster.
        </p>

        {/* ── CTA BUTTON ── */}
        <div className="mt-4 flex w-[47%] flex-col justify-center gap-4 sm:w-auto sm:flex-row md:mt-6 lg:mt-8">
          <a
            href="#pricing"
            className="
              group flex items-center justify-center gap-2
              rounded-[16px]
              bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF]
              px-4 py-1.5 text-[12px] font-semibold text-[#FCFCFC]
              transition duration-300 hover:shadow-xl
              md:px-7 md:py-2.5 md:text-[15px] lg:text-[16px]
            "
          >
            Start Free Trial
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </a>
        </div>

        {/* ── FINE PRINT ── */}
        <p className="mt-3 text-center text-[12px] text-[#596475] md:mt-4 md:text-[13px] lg:text-[14px]">
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>

      {/* ── Stacking Dashboard Section inside the same Hero section ── */}
      <DashboardStack images={dashboardImages} />
    </section>
  );
}



import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, cubicBezier } from "framer-motion";

/* ============================================================
   CONFIG
   ============================================================ */
const EASE            = cubicBezier(0.22, 1, 0.36, 1);
const SCROLL_PER_CARD = 500; // px of scroll per card transition

/*
 * Depth → visual values
 *   depth -1  entering from below (off-screen, completely solid)
 *   depth  0  front card (active)
 *   depth  1  1 card behind  (peeks -40px above front)
 *   depth  2  2 cards behind (peeks -80px above front)
 *   depth 3+  hidden/faded out
 */
function depthToValues(d) {
  if (d === -1) return { y: 1200, scale: 1,    opacity: 1 }; // No transparency on entry
  if (d ===  0) return { y: 0,    scale: 1,    opacity: 1 };
  if (d ===  1) return { y: -40,  scale: 0.95, opacity: 1 }; // Solid background behind
  if (d ===  2) return { y: -80,  scale: 0.90, opacity: 1 }; // Exactly 3 cards visible
  return               { y: -100, scale: 0.85, opacity: 0 }; // 4th card hides
}

/* ============================================================
   KEYFRAME BUILDER
   ============================================================ */
function buildKeyframes(index, T) {
  const kps = [];
  const add  = (t, d) => kps.push({ t, d });

  if (index === 0) {
    add(0, 0);
    for (let d = 1; d <= 3; d++) {
      const t = d / T;
      if (t <= 1) add(t, d);
    }
    const last = kps[kps.length - 1];
    if (last.t < 1) add(1, Math.min(3, last.d));
  } else {
    add(0, -1);
    const enterStart = (index - 1) / T;
    if (enterStart > 0) add(enterStart, -1); 
    add(index / T, 0);                        
    for (let d = 1; d <= 3; d++) {
      const t = (index + d) / T;
      if (t <= 1) add(t, d);
    }
    const last = kps[kps.length - 1];
    if (last.t < 1) add(1, Math.max(last.d, 3));
  }

  return {
    inputs:      kps.map(k => k.t),
    yVals:       kps.map(k => depthToValues(k.d).y),
    scaleVals:   kps.map(k => depthToValues(k.d).scale),
    opacityVals: kps.map(k => depthToValues(k.d).opacity),
  };
}

/* ============================================================
   SINGLE STACKED CARD
   ============================================================ */
function StackCard({ src, index, total, scrollProgress, onLoad }) {
  const T = total - 1;
  const { inputs, yVals, scaleVals, opacityVals } = buildKeyframes(index, T);

  const y       = useTransform(scrollProgress, inputs, yVals,       { ease: EASE });
  const scale   = useTransform(scrollProgress, inputs, scaleVals,   { ease: EASE });
  const opacity = useTransform(scrollProgress, inputs, opacityVals, { ease: EASE });

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1, // Newer cards naturally sit on top
        position: "absolute",
        inset: 0,
        transformOrigin: "50% 0%",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          borderRadius: "25px",
          border: "1px solid #E5E7EB", // Clean border instead of heavy shadow
          background: "white",
          padding: "10px",
          boxShadow: "none", // Removed shadows entirely as requested
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            overflow: "hidden",
            borderRadius: "18px",
            background: "white",
          }}
        >
          <img
            src={src}
            alt={`BizOne Dashboard ${index + 1}`}
            draggable={false}
            onLoad={onLoad}
            style={{
              display: "block",
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "14px",
              userSelect: "none",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

/* ============================================================
   DASHBOARD STACK SECTION
   ============================================================ */
export function DashboardStack({ images }) {
  const spacerRef      = useRef(null);
  const aspectLockRef  = useRef(false);

  const [aspectRatio, setAspectRatio] = useState(16 / 9);
  const [sectionTop,  setSectionTop]  = useState(null); 
  const [phase,       setPhase]       = useState("before");

  const total      = images.length;
  const scrollHeight = (total - 1) * SCROLL_PER_CARD;

  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const measure = () => {
      if (!spacerRef.current) return;
      const top = spacerRef.current.getBoundingClientRect().top + window.scrollY;
      setSectionTop(top);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (sectionTop === null) return;

    const onScroll = () => {
      const sy = window.scrollY;
      const p  = Math.max(0, Math.min(1, (sy - sectionTop) / scrollHeight));
      scrollProgress.set(p);

      if      (sy < sectionTop)               setPhase("before");
      else if (sy < sectionTop + scrollHeight) setPhase("during");
      else                                     setPhase("after");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); 
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionTop, scrollHeight, scrollProgress]);

  const handleImageLoad = (e) => {
    if (aspectLockRef.current) return;
    const { naturalWidth, naturalHeight } = e.target;
    if (naturalWidth && naturalHeight) {
      aspectLockRef.current = true;
      setAspectRatio(naturalWidth / naturalHeight);
    }
  };

  const panelStyle = {
    position:   phase === "during" ? "fixed" : "absolute",
    left: 0,
    right: 0,
    height: "100vh",
    background: "transparent", // Inherits the parent section's gradient
    zIndex: phase === "during" ? 10 : "auto",
    ...(phase === "after"
      ? { top: "auto", bottom: 0 }
      : { top: 0 }
    ),
  };

  return (
    <div
      ref={spacerRef}
      style={{ position: "relative", height: `calc(100vh + ${scrollHeight}px)` }}
    >
      <div style={panelStyle}>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            padding: "140px 24px 24px",
            boxSizing: "border-box",
            overflow: "visible",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1380px",
              margin: "0 auto",
              overflow: "visible",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingTop: `${(1 / aspectRatio) * 100}%`,
                overflow: "visible",
              }}
            >
              {images.map((src, i) => (
                <StackCard
                  key={i}
                  src={src}
                  index={i}
                  total={total}
                  scrollProgress={scrollProgress}
                  onLoad={handleImageLoad}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

