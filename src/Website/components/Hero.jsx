import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "../assets/dashboard.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden responsive-container"
      style={{
        background: "linear-gradient(180deg, #D9EBFF 0%, #F9FAFB 100%)",
      }}
    >
      {/* Background Blur */}
      <div className="absolute left-1/2 top-[-180px] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center px-6 pt-[150px] pb-16 lg:px-8">

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DFE5ED] bg-[#FFFFFFB2] px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-blue-600"></span>

          <span className="text-[10px] md:text-[12px] lg:text-[15px] font-medium text-[#596475]">
            Multi-company business management
          </span>
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-center text-[25px] font-bold leading-tight text-[#071123] md:text-[48px] lg:text-[75px]">
          Run your entire business,
          <br />
          <span className="bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] bg-clip-text text-transparent">
            from a single workspace
          </span>
        </h1>

        {/* Description */}
        <p className="mt-7 max-w-3xl text-center text-[15px] md:text-[17px] lg:text-[22px] leading-5 md:leading-8 text-gray-600">
          BizOne is a multi-company ERP that brings sales, finance, inventory,
          HR and projects together — so your teams stop switching tools and
          start moving faster.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex w-full flex-col sm:w-auto sm:flex-row gap-4 justify-center">

          <Link
            href="/register"
            className="group flex items-center justify-center gap-2 rounded-[16px] bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-[#1D4ED8] hover:shadow-lg"
          >
            Start Free Trial

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>

          <a
            href="#features"
            className="flex items-center justify-center gap-2 rounded-[16px] border border-[#DFE5ED] bg-[#FFFFFF] px-8 py-4 text-base font-semibold text-gray-700 transition hover:border-blue-500 hover:text-blue-600 hover:shadow-lg"
          >
            See how it works
          </a>

        </div>

        {/* Small Text */}
        <p className="mt-5 text-sm text-gray-500">
          14-day free trial · No credit card required · Cancel anytime
        </p>

        {/* Dashboard */}
        <div className="relative mt-16 w-full">

          <img
            src={heroImage}
            alt="Dashboard"
            className="mx-auto w-full max-w-6xl border-6 md:border-13 border-[#D9EBFF]/50 rounded-2xl md:rounded-3xl"
          />

        </div>

      </div>
    </section>
  );
}