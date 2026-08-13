import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import BizOneLogo from "../components/BizOneLogo";

export default function LoginRegionSelect() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F0F7FF]">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-[-100px] h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-[-120px] h-[450px] w-[450px] rounded-full bg-[#009FFF]/10 blur-[140px]" />

      {/* Header */}
      <header className="relative z-20 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="responsive-container flex h-[72px] px-5 items-center justify-between">

          <Link
            href="/"
            className="group flex items-center gap-2 text-md font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>

        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex min-h-[calc(100vh-72px)] items-center justify-center px-6 py-8 sm:px-8 lg:px-8">

        <div className="grid w-full max-w-[1100px] overflow-hidden rounded-[32px] border border-[#DCE6F3] bg-white shadow-[0_25px_70px_rgba(37,99,235,0.10)] lg:grid-cols-[0.85fr_1.15fr]">

          {/* Left Panel */}
          <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-[#F5F9FF] to-[#EAF4FF] p-10 sm:p-14 lg:p-16">

            {/* Decorative Circle */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-2xl" />

            <div className="relative z-10">

              {/* BizOne Logo - Centered at Top */}
              <div className="mb-5 lg:mb-9 flex w-full items-center">
                <Link href="/" className="flex items-center ">
                  <BizOneLogo className="h-16 w-auto" />
                </Link>
              </div>

              <h1 className="max-w-sm text-2xl font-semibold leading-tight tracking-tight text-[#101828] sm:text-3xl md:text-4xl">
                Welcome to
                <span className="block bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] bg-clip-text text-transparent">
                  BizOne
                </span>
              </h1>

              <p className="mt-5 max-w-sm text-base leading-7 text-[#667085]">
                One workspace for managing your business across sales, finance,
                inventory, HR and projects.
              </p>

              <div className="mt-8 space-y-3">

                <div className="flex items-center gap-3 text-sm text-[#475467]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <Check size={14} className="text-[#2563EB]" />
                  </span>
                  Multi-company management
                </div>

                <div className="flex items-center gap-3 text-sm text-[#475467]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <Check size={14} className="text-[#2563EB]" />
                  </span>
                  Centralized business operations
                </div>

                <div className="flex items-center gap-3 text-sm text-[#475467]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                    <Check size={14} className="text-[#2563EB]" />
                  </span>
                  Secure regional access
                </div>

              </div>

            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">

            <div className="max-w-xl">

              <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
                ✦ Account Access
              </span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#101828]">
                Choose your region
              </h2>

              <p className="mt-3 max-w-lg text-base leading-7 text-[#667085]">
                Select your account region to access the corresponding BizOne
                platform.
              </p>

              {/* Region Options */}
              <div className="mt-8 space-y-4">

                {/* Singapore */}
                <a
                  href="https://sg.biz1.in/"
                  className="group flex items-center gap-5 rounded-2xl border border-[#E4E7EC] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#93C5FD] hover:shadow-[0_12px_30px_rgba(37,99,235,0.10)]"
                >

                  <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] shadow-sm">
                    <img
                      src="https://flagcdn.com/sg.svg"
                      alt="Singapore Flag"
                      className="h-9 w-auto rounded-sm"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#101828]">
                      Singapore
                    </h3>

                    <p className="mt-1 text-sm text-[#667085]">
                      Access BizOne for Singapore
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F9FF] text-[#2563EB] transition-all duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                </a>

                {/* India */}
                <a
                  href="https://ind.biz1.in/"
                  className="group flex items-center gap-5 rounded-2xl border border-[#E4E7EC] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#93C5FD] hover:shadow-[0_12px_30px_rgba(37,99,235,0.10)]"
                >

                  <div className="flex h-16 w-20 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] shadow-sm">
                    <img
                      src="https://flagcdn.com/in.svg"
                      alt="India Flag"
                      className="h-9 w-auto rounded-sm"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#101828]">
                      India
                    </h3>

                    <p className="mt-1 text-sm text-[#667085]">
                      Access BizOne for India
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F9FF] text-[#2563EB] transition-all duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>

                </a>

              </div>

              <p className="mt-7 text-center text-xs text-[#98A2B3]">
                Your selected region determines the BizOne platform you will access.
              </p>

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}