import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="py-16 responsive-container"
      style={{
        background:
          "linear-gradient(180deg, #D8F0FF 1.92%, #F0F7FF 47.6%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-8">

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
          <h2 className="mx-auto text-fluid-lg font-medium leading-[1.15] text-[#101828]">
            Ready to Simplify Your Business Operations?
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-3xl text-[17px] md:text-[19px] lg:text-[21px] leading-6 md:leading-8 text-[#667085]">
            Take control of your finances, inventory, sales, and business
            processes with one powerful ERP platform.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/register"
              className="flex items-center gap-2 rounded-[16px] bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] px-8 py-4 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/login"
              className="flex items-center gap-2 rounded-[16px] border border-[#D0D5DD] bg-white px-8 py-4 font-medium text-[#101828] transition-all duration-300 hover:border-[#0072F8] hover:text-[#0072F8]"
            >
              <PlayCircle size={20} />
              Login
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}