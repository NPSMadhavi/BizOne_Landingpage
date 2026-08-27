import { motion } from "framer-motion";
import { Link } from "wouter";
import BizOneLogo from "./BizOneLogo";

export default function Footer() {
  return (
    <section
      id="footer"
      style={{
        width: "100%",
        background:
          "linear-gradient(180deg, #D8F0FF 1.92%, #F0F7FF 47.6%, #F0F7FF 100%)",
      }}
    >
      {/* Footer Part */}
      <div className="w-full mx-auto px-5 md:px-6 lg:px-23 pb-5 pt-12 lg:pt-13">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <BizOneLogo className="h-14 w-auto" />

            <p className="mt-6 max-w-sm text-[16px] md:text-[17px] lg:text-[18px] leading-7 text-[#6A7282]">
              A complete multi-company ERP and Business Management System helping organizations manage daily operations from a single application.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-[18px] md:text-[19px] lg:text-[20px] font-semibold text-[#071123]">
              Product
            </h3>

            <ul className="mt-6 space-y-4 text-[16px] md:text-[17px] lg:text-[18px] text-[#6A7282]">
              <li>
                <a
                  href="#home"
                  className="transition hover:text-[#0072F8]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="transition hover:text-[#0072F8]"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#pricing"
                  className="transition hover:text-[#0072F8]"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[18px] md:text-[19px] lg:text-[20px] font-semibold text-[#071123]">
              Company
            </h3>

            <ul className="mt-6 space-y-4 text-[16px] md:text-[17px] lg:text-[18px] text-[#6A7282]">
              <li>
                <a
                  href="#about"
                  className="transition hover:text-[#0072F8]"
                >
                  About us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-[#0072F8]"
                >
                  Customers
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-[#0072F8]"
                >
                  Content
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-11 flex flex-col items-center justify-between gap-5 border-t border-[#D9D9D9] pt-5 md:flex-row">

          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#6A7282]">
            {"\u00A9"} {new Date().getFullYear()} BizOne. All rights reserved. Powered by{" "}
            <span className="text-[#0072F8]">
              <a
                href="https://www.myrsv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline break-words"
              >
                RSV Infotech Pte Ltd.
              </a>
            </span>
          </p>

        </div>
      </div>
    </section>
  );
}