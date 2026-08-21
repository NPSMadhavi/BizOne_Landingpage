import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "wouter";
import BizOneLogo from "./BizOneLogo";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="responsive-container"
      style={{
        background:
          "linear-gradient(180deg, #D8F0FF 1.92%, #F0F7FF 47.6%, #F0F7FF 100%)",
      }}
    >
      {/* CTA Part */}
      <div className="mx-auto max-w-7xl px-8 py-14">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden text-center"
        >
          {/* Decorative Blur */}
          <div className="absolute"></div>

          {/* Heading */}
          <h2 className="mx-auto max-w-2xl text-[28px] md:text-[32px] lg:text-[38px] font-medium leading-[1.15] text-[#05216E]">
            Ready to Simplify Your Business Operations?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-center text-[16px] md:text-[17px] lg:text-[18px] leading-6 text-[#6A7282]">
            Take control of your finances, inventory, sales, and business
            processes with one powerful ERP platform.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="#pricing"
              className="mb-2 flex items-center gap-2 rounded-[16px] bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] px-6 py-2.5 font-medium text-white  transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight size={18} />
            </a>

          

          </div>

        </motion.div>

      </div>

      {/* Footer Part */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-5 pt-12 lg:pt-13">
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
            <h3 className="text-[18px] md:text-[19px] lg:text-[20px] font-semibold text-[#071123]">Product</h3>
            <ul className="mt-6 space-y-4 text-[16px] md:text-[17px] lg:text-[18px] text-[#6A7282]">
              <li>
                <a href="#home" className="transition hover:text-[#0072F8]">Home</a>
              </li>
              <li>
                <a href="#features" className="transition hover:text-[#0072F8]">Features</a>
              </li>
              <li>
                <a href="#pricing" className="transition hover:text-[#0072F8]">Pricing</a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-[#0072F8]">Use Case</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[18px] md:text-[19px] lg:text-[20px] font-semibold text-[#071123]">Company</h3>
            <ul className="mt-6 space-y-4 text-[16px] md:text-[17px] lg:text-[18px] text-[#6A7282]">
              <li>
                <a href="#about" className="transition hover:text-[#0072F8]">About us</a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-[#0072F8]">Careers</a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-[#0072F8]">Customers</a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-[#0072F8]">Content</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-11 flex flex-col items-center justify-between gap-5 border-t border-[#D9D9D9] pt-5 md:flex-row">
          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#6A7282]">
            {"\u00A9"} {new Date().getFullYear()} BizOne. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}