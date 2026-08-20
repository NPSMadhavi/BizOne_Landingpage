import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import heroImage from "../assets/dashboard.png";

const animatedTexts = [
  "from a single workspace",
  "with powerful automation",
  "across every business function",
  "without switching between tools",
];

export default function Hero() {
  const dashboardRef = useRef(null);

  /* --------------------------------
     Typewriter Animation
  -------------------------------- */
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = animatedTexts[textIndex];

    const handleTyping = () => {
      if (isDeleting) {
        // Delete text
        setDisplayText((prev) =>
          prev.substring(0, prev.length - 1)
        );
      } else {
        // Type text
        setDisplayText((prev) =>
          fullText.substring(0, prev.length + 1)
        );
      }
    };

    const typingSpeed = isDeleting ? 75 : 150;

    const typeInterval = setInterval(
      handleTyping,
      typingSpeed
    );

    // Pause after completing the text
    if (!isDeleting && displayText === fullText) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);

      return () => {
        clearInterval(typeInterval);
        clearTimeout(pauseTimeout);
      };
    }

    // Move to next text after deleting
    if (isDeleting && displayText === "") {
      setIsDeleting(false);

      setTextIndex(
        (prev) => (prev + 1) % animatedTexts.length
      );
    }

    return () => clearInterval(typeInterval);
  }, [displayText, isDeleting, textIndex]);

  /* --------------------------------
     Dashboard Scroll Animation
  -------------------------------- */
  const {
    scrollYProgress,
  } = useScroll({
    target: dashboardRef,
    offset: ["start end", "center center"],
  });

  const rotateX = useTransform(
    scrollYProgress,
    [0, 1],
    [14, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.88, 1]
  );

  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [20, 0]
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden responsive-container"
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
      {/* Background Blur */}
      <div className="absolute left-1/2 top-[-180px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-6 pb-16 pt-[150px] lg:px-8">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FFFFFF] px-5 py-1 md:py-2 shadow-md md:mb-9 md:mt-4">
          <Sparkles
            size={18}
            strokeWidth={2}
            className="shrink-0 text-[#0072F8]"
          />

          <span className="text-[11px] font-medium text-[#596475] md:text-[13px] lg:text-[14px]">
            Multi-company business management
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-center text-[23px] font-bold leading-[1.4] text-[#071123] md:text-[43px] lg:text-[54px]">
          Run your entire business,
          <br />

          {/* Animated Text */}
          <span
            className="inline-block min-h-[1.4em] bg-clip-text"
            style={{
              background:
                "linear-gradient(135deg, #002E99 0%, #0072F8 50%, #009FFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {displayText}
            <span
              className="ml-[2px] inline-block animate-pulse"
              style={{
                WebkitTextFillColor: "#0072F8",
              }}
            >
              |
            </span>
          </span>
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-4xl text-center text-[15px] leading-5 text-[#596475] md:mt-6 md:text-[18px] md:leading-7 lg:text-[19px]">
          BizOne is a multi-company ERP that brings sales, finance, inventory,
          HR and projects together — so your teams stop switching tools and
          start moving faster.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">

          {/* Start Free Trial */}
          <Link
            href="/register"
            className="group flex items-center justify-center gap-2 rounded-[16px] bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] px-5 py-2 text-base font-semibold text-[#FCFCFC] transition duration-300 hover:bg-[#1D4ED8] hover:shadow-lg md:px-8 md:py-3"
          >
            Start Free Trial

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>

         
        </div>

        {/* Small Text */}
        <p className="mt-4 text-[12px] text-[#596475] md:mt-5 md:text-[13px] lg:text-[14px]">
          14-day free trial · No credit card required · Cancel anytime
        </p>

        {/* Dashboard Scroll Animation */}
        <div
          ref={dashboardRef}
          className="relative mt-5 w-full px-3 md:mt-7 md:px-8"
          style={{
            perspective: "1200px",
          }}
        >
          <motion.div
            style={{
              rotateX,
              scale,
              y: translateY,
              transformOrigin: "center bottom",
              boxShadow:
                "0 8px 20px rgba(0,0,0,0.10), 0 25px 45px rgba(0,0,0,0.12), 0 55px 70px rgba(0,0,0,0.10)",
            }}
            className="mx-auto w-full max-w-7xl rounded-[25px] border border-white bg-white/10 p-[10px] md:p-[12px]"
          >
            <div className="overflow-hidden rounded-[18px] md:rounded-[20px]">
              <img
                src={heroImage}
                alt="Dashboard"
                className="mx-auto block w-full rounded-[14px] border border-white md:rounded-[16px]"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}