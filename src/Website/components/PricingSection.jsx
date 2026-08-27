import { Check, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Starter",
    subtitle: "For a single growing company getting organized",
    price: "Contact Us",
    popular: false,
    features: [
      "Up to 1 Company",
      "Up to 10 Users",
      "Sales & Purchase",
      "Inventory Management",
      "GST Reports",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    subtitle: "For multi-company teams that need it all connected",
    price: "Contact Us",
    popular: true,
    features: [
      "Up to 10 Companies",
      "Up to 100 Users",
      "All ERP Modules",
      "Manufacturing",
      "HR & Payroll",
      "Analytics Dashboard",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "For large groups with advanced governance needs",
    price: "Contact Us",
    popular: false,
    features: [
      "Unlimited Companies",
      "Unlimited Users",
      "All Business Modules",
      "Custom Integrations",
      "Dedicated Support",
      "99.9% SLA",
    ],
  },
];

function ContactSalesModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const scrollY = window.scrollY;

    const originalBodyStyle = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };

    const originalHtmlOverflow = document.documentElement.style.overflow;

    // Lock the current page position
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Prevent wheel/touch scrolling.
    // This also helps when Lenis or another smooth-scroll system is active.
    const preventScroll = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    const preventKeyboardScroll = (event) => {
      const scrollKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
      ];

      if (scrollKeys.includes(event.key)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener("wheel", preventScroll, {
      passive: false,
      capture: true,
    });

    window.addEventListener("touchmove", preventScroll, {
      passive: false,
      capture: true,
    });

    window.addEventListener("keydown", preventKeyboardScroll, {
      capture: true,
    });

    return () => {
      window.removeEventListener("wheel", preventScroll, {
        capture: true,
      });

      window.removeEventListener("touchmove", preventScroll, {
        capture: true,
      });

      window.removeEventListener("keydown", preventKeyboardScroll, {
        capture: true,
      });

      document.body.style.position = originalBodyStyle.position;
      document.body.style.top = originalBodyStyle.top;
      document.body.style.width = originalBodyStyle.width;
      document.body.style.overflow = originalBodyStyle.overflow;
      document.documentElement.style.overflow = originalHtmlOverflow;

      // Restore the exact scroll position instantly.
      // Prevent global smooth-scroll CSS from animating the page.
      const currentScrollBehavior =
        document.documentElement.style.scrollBehavior;

      document.documentElement.style.scrollBehavior = "auto";

      window.scrollTo({
        left: 0,
        top: scrollY,
        behavior: "auto",
      });

      document.documentElement.style.scrollBehavior =
        currentScrollBehavior;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      <>
        {/* Full Screen Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[9998] h-[100dvh] w-[100vw] bg-black/40 backdrop-blur-md"
        />

        {/* Modal Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex h-[100dvh] w-[100vw] items-center justify-center p-4"
        >
          {/* Modal */}
          <div className="relative w-full max-w-[660px] rounded-[24px] border border-[#E2E8F0] bg-white p-5 shadow-2xl md:p-6">

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#596475] transition hover:bg-[#e0e1e2]"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <h2 className="text-[24px] font-semibold text-[#05216E] md:text-[28px]">
              Contact Sales
            </h2>

            <p className="mt-2 text-[15px] text-[#596475]">
              Fill in your details and our team will get back to you within 24 hours.
            </p>

            {/* Form */}
            <form
              className="mt-5 flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* Full Name + Work Email */}
              <div className="grid gap-4 sm:grid-cols-2">

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#071123]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Olivia Rye"
                    className="rounded-xl border border-[#D1D5DB] px-4 py-2.5 text-[15px] outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#071123]">
                    Work Email
                  </label>

                  <input
                    type="email"
                    placeholder="olivia@yourcompany.com"
                    className="rounded-xl border border-[#D1D5DB] px-4 py-2.5 text-[15px] outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8]"
                  />
                </div>

              </div>

              {/* Company Name + Phone Number */}
              <div className="grid gap-4 sm:grid-cols-2">

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#071123]">
                    Company Name
                  </label>

                  <input
                    type="text"
                    placeholder="Acme Corp"
                    className="rounded-xl border border-[#D1D5DB] px-4 py-2.5 text-[15px] outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8]"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-[#071123]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="rounded-xl border border-[#D1D5DB] px-4 py-2.5 text-[15px] outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8]"
                  />
                </div>

              </div>

              {/* Plan Interest */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#071123]">
                  Plan Interest
                </label>

                <div className="relative">
                  <select
                    className="w-full appearance-none rounded-xl border border-[#D1D5DB] bg-white px-4 py-2.5 pr-10 text-[15px] outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8]"
                  >
                    <option>Enterprise Plan (Multi-Company)</option>
                    <option>Growth Plan</option>
                    <option>Starter Plan</option>
                    <option>Custom Plan</option>
                  </select>

                  <ChevronDown
                    size={18}
                    strokeWidth={2}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#596475]"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#071123]">
                  Message
                </label>

                <textarea
                  rows={3}
                  placeholder="Tell us about your business entities, user volume, and specific ERP requirements..."
                  className="resize-none rounded-xl border border-[#D1D5DB] px-4 py-2.5 text-[15px] outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group mt-1 flex w-full items-center justify-center gap-2 rounded-[16px] bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] py-3.5 text-[14px] font-semibold text-white transition duration-300 hover:shadow-lg md:text-[16px]"
              >
                Submit Request

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              {/* Terms */}
              <p className="text-center text-[13px] text-[#596475]">
                By submitting, you agree to our Terms of Service and Privacy Policy.
              </p>

            </form>
          </div>
        </motion.div>
      </>
    </AnimatePresence>,
    document.body
  );
}

export default function PricingSection() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <section
      id="pricing"
      className="bg-[#F9FAFB] py-10 sm:py-12 lg:pt-[95px] responsive-container"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            ✦ Pricing & Plans
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-6 max-w-4xl text-center text-[28px] font-medium leading-[1.15] text-[#05216E] md:text-[32px] lg:text-[38px]">
          Plans that scale with your group
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-4xl text-center text-[16px] leading-6 text-[#6A7282] md:text-[17px] lg:text-[18px]">
          Start free, then choose the plan that fits. Talk to us for pricing
          tailored to your company count and modules.
        </p>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-[32px] border-[1px] bg-[#FFFFFF] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#0072F8] hover:shadow-2xl"
            >

              {/* Most Popular */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] px-5 py-2 text-[12px] font-medium text-white shadow-lg">
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-[18px] font-semibold text-[#071123] md:text-[20px] lg:text-[22px]">
                {plan.name}
              </h3>

              {/* Subtitle */}
              <p className="mt-3 text-[16px] text-[#6A7282] md:text-[17px] lg:text-[18px]">
                {plan.subtitle}
              </p>

              {/* Price */}
              <div className="mt-4">
                <h1 className="text-[23px] font-semibold text-[#071123] md:text-[25px] lg:text-[28px]">
                  {plan.price}
                </h1>
              </div>

              {/* Plan Button */}
              {plan.name === "Enterprise" ? (
                <button
                  onClick={() => setShowContactModal(true)}
                  className="
                    mt-6
                    block
                    w-full
                    rounded-[15px]
                    border
                    border-gray-300
                    bg-white
                    py-4
                    text-center
                    font-medium
                    text-[#071123]
                    transition-all
                    duration-300
                    hover:border-transparent
                    hover:bg-gradient-to-r
                    hover:from-[#002E99]
                    hover:via-[#0072F8]
                    hover:to-[#009FFF]
                    hover:text-white
                    hover:shadow-lg
                  "
                >
                  Contact sales
                </button>
              ) : (
                <Link
                  href="/register"
                  className="
                    mt-6
                    block
                    w-full
                    rounded-[15px]
                    border
                    border-gray-300
                    bg-white
                    py-4
                    text-center
                    font-medium
                    text-[#071123]
                    transition-all
                    duration-300
                    hover:border-transparent
                    hover:bg-gradient-to-r
                    hover:from-[#002E99]
                    hover:via-[#0072F8]
                    hover:to-[#009FFF]
                    hover:text-white
                  "
                >
                  Start free plan
                </Link>
              )}

              {/* Features */}
              <div className="mt-6 space-y-2">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-1"
                  >
                    <div className="flex h-6 w-6 items-center justify-center">
                      <Check
                        size={20}
                        className="text-[#0072F8]"
                      />
                    </div>

                    <span className="text-[14px] text-[#071123] md:text-[15px] lg:text-[16px]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Contact Sales Modal */}
      <ContactSalesModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </section>
  );
}