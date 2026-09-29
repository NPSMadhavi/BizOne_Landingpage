import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  ShieldAlert,
  Shield,
  BookOpen,
  Calculator,
  FileText,
  Lock,
  Users,
  UserPlus,
  ClipboardList,
  EyeOff,
  FileCheck,
  Package,
  Receipt,
  Map,
  Timer,
} from "lucide-react";

import adminImage from "../assets/admin.png";
import accountantsImage from "../assets/accountants.png";
import hrImage from "../assets/hr.png";
import salesManagerImage from "../assets/salesmanager.png";
import storeManagerImage from "../assets/storemanager.png";
import cashierImage from "../assets/cashier.png";

const rolesData = [
  {
    id: "admin",
    label: "Admin",
    image: adminImage,
    cards: [
      {
        icon: ShieldCheck,
        title: "System Governance Matrix",
        description:
          "High-level oversight of global permissions, user provisioning, and role hierarchy management.",
      },
      {
        icon: Activity,
        title: "Real-time Health Logs",
        description:
          "Continuous monitoring of system uptime, API latency, and infrastructure performance metrics.",
      },
      {
        icon: ShieldAlert,
        title: "Security Audit Stream",
        description:
          "Comprehensive logs of authentication events, policy changes, and encrypted data access trails.",
      },
      {
        icon: Shield,
        title: "Admin Control Center",
        description:
          "Full administrative privileges active. All system configuration and security modules accessible.",
      },
    ],
  },
  {
    id: "accountant",
    label: "Accountant",
    image: accountantsImage,
    cards: [
      {
        icon: BookOpen,
        title: "Financial Ledger Access",
        description:
          "Full visibility into general ledgers, accounts payable, and receivable with real-time balancing.",
      },
      {
        icon: Calculator,
        title: "Tax Compliance Suite",
        description:
          "Automated tax calculation and regional compliance reporting modules for year-end closing.",
      },
      {
        icon: FileText,
        title: "Audit Logging",
        description:
          "Comprehensive tracking of corporate expenses with automated flag systems for policy deviations.",
      },
      {
        icon: Lock,
        title: "Secure Session",
        description:
          "Financial environment active. All non-accounting modules are currently hidden from the DOM.",
      },
    ],
  },
  {
    id: "hr",
    label: "HR",
    image: hrImage,
    cards: [
      {
        icon: UserPlus,
        title: "Recruitment Pipeline",
        description:
          "Streamlined end-to-end hiring workflows with AI-assisted candidate screening and interview scheduling.",
      },
      {
        icon: Users,
        title: "Employee Directory & Org",
        description:
          "Centralized access to personnel records, department hierarchies, and real-time team availability.",
      },
      {
        icon: ClipboardList,
        title: "Audit Logging",
        description:
          "Comprehensive tracking of employee KPIs, development milestones, and retention risk assessments.",
      },
      {
        icon: Lock,
        title: "HR Session",
        description:
          "Personnel environment active. All non-HR and non-recruitment modules are currently hidden from the DOM.",
      },
    ],
  },
  {
    id: "sales",
    label: "Sales Manager",
    image: salesManagerImage,
    cards: [
      {
        icon: Lock,
        title: "Module Permissions",
        description:
          "Granular control over which functional modules are visible and interactive for this specific clearance level.",
      },
      {
        icon: EyeOff,
        title: "Data Masking",
        description:
          "Automatically redact PII and sensitive financial fields based on role-specific security protocols.",
      },
      {
        icon: FileCheck,
        title: "Audit Logging",
        description:
          "Every action is timestamped and attributed, ensuring a complete chain of custody for all system interactions.",
      },
      {
        icon: Shield,
        title: "Secure Session",
        description:
          "Role-based environment active. All restricted modules are currently hidden from the DOM.",
      },
    ],
  },
  {
    id: "store",
    label: "Store Manager",
    image: storeManagerImage,
    cards: [
      {
        icon: Package,
        title: "Inventory Level Monitoring",
        description:
          "Real-time stock tracking across locations with automated reorder alerts.",
      },
      {
        icon: Map,
        title: "Store Sales Heatmaps",
        description:
          "Centralized access to personnel records, department hierarchies, and real-time team availability.",
      },
      {
        icon: Timer,
        title: "Shift Performance Tracking",
        description:
          "Monitoring employee attendance, daily sales targets, and team efficiency metrics.",
      },
      {
        icon: Lock,
        title: "Store Manager Session",
        description:
          "Retail environment active. All non-retail and non-operations modules are currently hidden from the DOM.",
      },
    ],
  },
  {
    id: "cashier",
    label: "Cashier",
    image: cashierImage,
    cards: [
      {
        icon: Package,
        title: "POS Terminal Intelligence",
        description:
          "Real-time transaction processing with integrated payment gateway status and item lookup.",
      },
      {
        icon: Lock,
        title: "Secure Shift Management",
        description:
          "Automated till reconciliation, shift start/end logging, and cash drop alerts.",
      },
      {
        icon: Receipt,
        title: "Transaction Audit Trail",
        description:
          "Visibility into recent sales history, voided items, and discount application logs.",
      },
      {
        icon: Shield,
        title: "Secure Session",
        description:
          "Role-based environment active. Only POS and transactional modules are currently accessible.",
      },
    ],
  },
];

/* ─── Config ─────────────────────────────────────────────── */
const SCROLL_PER_ROLE = 700; // px of scroll travel per role step

/* ─── Reusable card ──────────────────────────────────────── */
function RoleCard({ card, delay, className = "" }) {
  const Icon = card.icon;
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.85, y: 24 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.5, delay, ease: "easeOut" },
        },
        exit: { opacity: 0, transition: { duration: 0.1 } },
      }}
      className={`
        role-card-zoom relative z-0 flex flex-col
        rounded-[24px] border border-gray-200 bg-white
        p-5 shadow-sm transition-shadow duration-300 hover:shadow-2xl
        ${className}
      `}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF1FF] text-[#0A4CCF]">
        <Icon size={23} />
      </div>
      <h3 className="mb-2 text-[18px] font-semibold text-[#071123] md:text-[20px] lg:text-[22px]">
        {card.title}
      </h3>
      <p className="text-[16px] text-[#6A7282] md:text-[17px] lg:text-[18px]">
        {card.description}
      </p>
    </motion.div>
  );
}

/* ─── Main component ─────────────────────────────────────── */
export default function RoleBasedAccess() {
  const spacerRef = useRef(null);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const panelRef = useRef(null);
  const [panelHeight, setPanelHeight] = useState(0);
  const total = rolesData.length;
  const scrollHeight = (total - 1) * SCROLL_PER_ROLE;
  const activeRole = rolesData[activeRoleIndex];

  useEffect(() => {
    const syncRole = () => {
      if (!spacerRef.current) return;
      // Measure live: images/fonts above this section can change its offset.
      const travel = -spacerRef.current.getBoundingClientRect().top;
      setActiveRoleIndex(Math.max(0, Math.min(total - 1, Math.floor(travel / SCROLL_PER_ROLE))));
    };
    const observer = new ResizeObserver(() => {
      setPanelHeight(panelRef.current.getBoundingClientRect().height);
      syncRole();
    });
    observer.observe(panelRef.current);
    window.addEventListener("scroll", syncRole, { passive: true });
    window.addEventListener("resize", syncRole);
    syncRole();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", syncRole);
      window.removeEventListener("resize", syncRole);
    };
  }, [total]);

  return (
    <>
      {/* 150% zoom fix */}
      <style>{`
        @media (min-resolution: 1.4dppx) and (max-resolution: 1.6dppx) {
          .role-card-zoom {
            width: 410px !important;
            height: 240px !important;
          }
        }
      `}</style>

      {/* ── Sticky scroll zone ───────────────────────────── */}
      <div
        ref={spacerRef}
        data-role-scroll
        style={{
          position: "relative",
          height: panelHeight ? panelHeight + scrollHeight : `calc(100vh + ${scrollHeight}px)`,
        }}
      >
        <div ref={panelRef} className="role-sticky-panel" data-section-enter>
          {/* Inner layout */}
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "16px",
              boxSizing: "border-box",
              overflow: "visible",
            }}
          >
            {/* ── Static header (now inside sticky panel) ───────────── */}
            <div className="mx-auto max-w-7xl px-4 pb-8 md:pb-10 w-full">
              <div className="flex justify-center">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
                  ✦ Role-based access
                </span>
              </div>
              <h2 className="mx-auto mt-6 max-w-5xl text-center text-[28px] font-medium leading-[1.15] text-[#05216E] md:text-[32px] lg:text-[38px]">
                People only see what they're meant to
              </h2>
              <p className="mx-auto mt-4 max-w-4xl text-center text-[16px] leading-6 text-[#6A7282] md:text-[17px] lg:text-[18px]">
                Assign module permissions per role. When a user logs in, BizOne
                shows only the sidebar modules they're allowed — everything else
                stays hidden and inaccessible.
              </p>
            </div>

            <div className="mx-auto w-full max-w-7xl">

              {/* ── Role Tabs ─────────────────────────────── */}
              <div className="relative z-20 mb-8  flex w-full justify-start overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center">
                <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5">
                  {rolesData.map((role, roleIndex) => (
                    <button
                      key={role.id}
                      onClick={() => {
                        if (spacerRef.current) {
                          const targetScroll =
                            spacerRef.current.getBoundingClientRect().top + window.scrollY + roleIndex * SCROLL_PER_ROLE;
                          window.scrollTo({
                            top: targetScroll,
                            behavior: "smooth",
                          });
                        }
                        setActiveRoleIndex(roleIndex);
                      }}
                      className={`
                        relative whitespace-nowrap rounded-full
                        px-3 py-1.5 text-[14px] font-semibold
                        transition-all duration-300
                        md:px-4 md:py-2 md:text-[15px]
                        lg:px-6 lg:py-2.5 lg:text-[18px]
                        ${
                          activeRoleIndex === roleIndex
                            ? "bg-[#0065E6] text-white"
                            : "bg-transparent text-[#475467] hover:bg-gray-100 hover:text-gray-900"
                        }
                      `}
                    >
                      {role.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Cards: Mobile / MD ────────────────────── */}
              <div className="lg:hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRole.id}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative mx-auto max-w-full"
                  >
                    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                      {activeRole.cards.slice(0, 2).map((card, i) => (
                        <RoleCard
                          key={i}
                          card={card}
                          delay={0.5 + i * 0.15}
                          className="min-h-[180px] md:min-h-[200px]"
                        />
                      ))}

                      {/* Character image */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 40, scale: 0.85 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.65, delay: 0, ease: "easeOut" },
                          },
                          exit: { opacity: 0 },
                        }}
                        className="col-span-1 relative z-20 flex min-w-0 justify-center md:col-span-2"
                      >
                        <img
                          src={activeRole.image}
                          alt={activeRole.label}
                          className="h-[220px] w-auto max-w-full object-contain object-bottom drop-shadow-xl md:h-[280px]"
                        />
                      </motion.div>

                      {activeRole.cards.slice(2, 4).map((card, i) => (
                        <RoleCard
                          key={i + 2}
                          card={card}
                          delay={0.65 + i * 0.15}
                          className="min-h-[180px] md:min-h-[200px]"
                        />
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* ── Cards: Desktop LG ─────────────────────── */}
              <div className="hidden lg:block">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRole.id}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="relative mx-auto max-w-full"
                  >
                    {/* Top row */}
                    <div className="relative z-0 flex w-full flex-col items-center justify-center gap-6 md:flex-row md:gap-6 lg:gap-20">
                      {activeRole.cards.slice(0, 2).map((card, i) => (
                        <RoleCard
                          key={i}
                          card={card}
                          delay={0.5 + i * 0.15}
                          className="w-full h-auto md:w-[300px] lg:w-[490px] lg:h-[240px] lg:p-6"
                        />
                      ))}
                    </div>

                    {/* Bottom row */}
                    <div className="relative z-10 mt-8 flex w-full flex-col items-center justify-center gap-6 md:mt-12 md:flex-row md:items-end lg:gap-10">
                      {/* Card 3 */}
                      {activeRole.cards[2] && (
                        <RoleCard
                          card={activeRole.cards[2]}
                          delay={0.65}
                          className="w-full h-auto md:w-[300px] lg:w-[490px] lg:h-[240px] lg:p-6"
                        />
                      )}

                      {/* Centre character image */}
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 40, scale: 0.85 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.65, delay: 0, ease: "easeOut" },
                          },
                          exit: { opacity: 0, transition: { duration: 0.2 } },
                        }}
                        className="pointer-events-none z-20 flex min-w-0 shrink justify-center -mt-8 -mb-8 md:-mt-10 md:-mb-12 lg:-mt-10 lg:-mb-24"
                      >
                        <img
                          src={activeRole.image}
                          alt={activeRole.label}
                          className="h-[200px] w-auto object-contain object-bottom drop-shadow-xl lg:h-[420px]"
                        />
                      </motion.div>

                      {/* Card 4 */}
                      {activeRole.cards[3] && (
                        <RoleCard
                          card={activeRole.cards[3]}
                          delay={0.8}
                          className="w-full h-auto md:w-[300px] lg:w-[490px] lg:h-[240px] lg:p-6"
                        />
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}