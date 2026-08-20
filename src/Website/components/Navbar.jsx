import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import BizOneLogo from "./BizOneLogo";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect page scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-gray-100 bg-[#FFFFFF]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div
        className={`relative mx-auto flex max-w-full items-center transition-all duration-300 ${
          scrolled ? "h-[80px]" : "h-[125px]"
        } px-3 md:px-3 lg:px-20`}
      >
        {/* Logo - Left */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <BizOneLogo className="h-12 w-auto md:h-10 lg:h-12" />
        </Link>

        {/* Desktop Navigation - Center */}
        <nav
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-4
            md:flex
            lg:gap-10
          "
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`whitespace-nowrap font-medium transition-colors duration-300 text-[11px] md:text-[14px] lg:text-[16px] ${
                item.label === "Home"
                  ? "text-[#0072F8]"
                  : "text-[#071123] hover:text-[#0072F8]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons - Right */}
        <div className="ml-auto hidden items-center gap-2 md:flex lg:gap-3">
          {/* Login */}
          <Link
            href="/login"
            className="
              whitespace-nowrap
              rounded-[12px]
              border
              border-gray-200
              bg-[#F9FAFB]
              px-2
              py-[7px]
              text-[11px]
              font-semibold
              text-[#071123]
              transition-all
              duration-300
              hover:border-blue-500
              hover:text-blue-600
              hover:shadow-lg
              md:px-2.5
              md:text-[12px]
              lg:rounded-[15px]
              lg:px-5
              lg:py-[10px]
              lg:text-[16px]
            "
          >
            Login
          </Link>

          {/* Start Free Trial */}
          <a
            href="#pricing"
            className="
              group
              flex
              shrink-0
              items-center
              justify-center
              gap-1
              whitespace-nowrap
              rounded-[12px]
              bg-gradient-to-r
              from-[#002E99]
              via-[#0072F8]
              to-[#009FFF]
              px-2.5
              py-[7px]
              text-[11px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:shadow-xl
              md:px-3
              md:text-[12px]
              lg:rounded-[15px]
              lg:gap-2
              lg:px-5
              lg:py-[10px]
              lg:text-[16px]
            "
          >
            Start Free Trial

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 lg:h-[18px] lg:w-[18px]"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-expanded={mobileMenu}
          aria-controls="mobile-menu"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenu(!mobileMenu)}
          className="ml-auto flex min-h-11 min-w-11 items-center justify-center rounded-md md:hidden"
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div
          id="mobile-menu"
          className="w-full overflow-hidden border-t border-gray-100 bg-white md:hidden"
        >
          <div className="flex flex-col px-4 py-4 sm:px-6">

            {/* Mobile Navigation */}
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenu(false)}
                className="py-3 text-[15px] font-medium text-gray-700 transition-colors hover:text-[#2563EB]"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Login */}
            <Link
              href="/login"
              onClick={() => setMobileMenu(false)}
              className="mt-3 rounded-lg border border-gray-200 py-3 text-center font-medium text-[#111827] transition-all hover:border-blue-500 hover:text-blue-600"
            >
              Login
            </Link>

            {/* Mobile Start Free Trial */}
            <a
              href="#pricing"
              onClick={() => setMobileMenu(false)}
              className="mt-3 rounded-lg bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] py-3 text-center font-semibold text-white transition-all hover:shadow-lg"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}