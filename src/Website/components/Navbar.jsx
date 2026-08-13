import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import BizOneLogo from "./BizOneLogo";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[75px] max-w-7xl items-center justify-between px-3 ">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <BizOneLogo className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-[16px] font-medium transition ${
                item.label === "Home"
                  ? "text-[#2563EB]"
                  : "text-[#4B5563] hover:text-[#2563EB]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-[15px] border border-gray-200 bg-white px-5 py-2 shadow-md text-base font-semibold text-gray-700 transition hover:border-blue-500 hover:text-blue-600 hover:shadow-lg"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="group flex items-center justify-center gap-2 rounded-[15px] bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] px-5 py-2 text-base font-semibold text-white transition duration-300 hover:bg-[#1D4ED8] hover:shadow-xl"
          >
            Start Free Trial
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={mobileMenu}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-md lg:hidden"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div
          id="mobile-menu"
          className="w-full overflow-hidden border-t bg-white lg:hidden"
        >
          <div className="flex flex-col px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="py-3 text-[15px] font-medium text-gray-700 hover:text-[#2563EB]"
              >
                {item.label}
              </a>
            ))}

            <Link
              href="/login"
              onClick={() => setMobileMenu(false)}
              className="mt-3 rounded-lg border border-gray-200 py-3 text-center font-medium text-[#111827] hover:border-blue-500 hover:text-blue-600"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setMobileMenu(false)}
              className="mt-3 rounded-lg bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] py-3 text-center font-semibold text-white hover:bg-[#1D4ED8]"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}