import { ArrowRight, Sparkles } from "lucide-react";
import { TextLoop } from "@/components/ui/text-loop";
import { DashboardStack } from "./DashboardStack";

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

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-6 pb-3 pt-[160px] lg:px-8">
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
