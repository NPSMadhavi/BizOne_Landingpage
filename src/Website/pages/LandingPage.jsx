import Contact from "../components/Contact";
import FAQSection from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PricingSection from "../components/PricingSection";
import RoleBasedAccess from "../components/RoleBasedAccess";
import WhoCanUse from "../components/WhoCanUse";
import SectionAnimations from "../components/SectionAnimations";

/* ── WhatsApp floating button ── */
const WHATSAPP_NUMBER = "+917032599480"; // Replace with actual number (country code + number, no +)
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%27m%20interested%20in%20BizOne%20ERP.%20Can%20you%20help%20me%3F`;

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-4 right-4 z-[999]
        flex h-11 w-11
        items-center justify-center
        rounded-full
        bg-[#25D366]
        shadow-[0_4px_20px_rgba(37,211,102,0.5)]
        transition-all duration-300
        hover:scale-110 hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)]
        active:scale-95
        sm:bottom-6 sm:right-6
        sm:h-13 sm:w-13
        lg:bottom-8 lg:right-8
        lg:h-14 lg:w-14
      "
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        aria-hidden="true"
        className="h-6 w-6 sm:h-[30px] sm:w-[30px]"
      >
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.7.7 5.3 2 7.6L.4 31.6l8.3-2c2.2 1.2 4.7 1.9 7.3 1.9 8.6 0 15.6-7 15.6-15.6C31.6 7.4 24.6.4 16 .4zm8.2 21.4c-.4 1-2.1 1.9-2.9 2-.8.1-1.5.5-5.1-1-4.3-1.9-7.1-6.3-7.3-6.6-.2-.3-1.7-2.3-1.7-4.4s1.1-3.1 1.5-3.5c.4-.4.8-.5 1.1-.5h.8c.3 0 .6.1.9.7.3.6 1.1 2.6 1.2 2.8.1.2.2.4 0 .7-.2.3-.3.5-.5.7-.2.2-.5.5-.3.9.2.4.9 1.4 1.9 2.2 1.3 1.1 2.4 1.4 2.7 1.6.3.2.5.1.7-.1.2-.3.9-1 1.1-1.4.2-.4.5-.3.8-.2.3.1 2 .9 2.3 1.1.3.2.6.3.7.5.1.2.1 1.1-.3 2z" />
      </svg>
    </a>
  );
}

export default function LandingPage() {
  return (
    <>
      <SectionAnimations />
      <Hero />
      <Features />
      <RoleBasedAccess />
      <WhoCanUse />
      <PricingSection />
      <FAQSection />
      <Contact />
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </>
  );
}
