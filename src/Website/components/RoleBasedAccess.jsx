import { useState } from "react";
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
  Truck,
  Monitor,
  Receipt,
  Map,
  Timer,
} from "lucide-react";

const rolesData = [
  {
    id: "admin",
    label: "Admin",
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
    label: "Sales manager",
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
    label: "Store manager",
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

export default function RoleBasedAccess() {
  const [activeRole, setActiveRole] = useState(rolesData[0]);

  return (
    <section className="bg-[#F9FAFB] py-16 responsive-container">
      <div className="mx-auto max-w-7xl px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            ✦ Role-based access
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-6 max-w-5xl text-center text-fluid-lg font-semibold leading-tight text-[#101828]">
          People only see what they're meant to
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-3xl text-center text-fluid-base leading-8 text-[#667085]">
          Assign module permissions for every role. Users only see the modules
          they are allowed to access after login.
        </p>

        {/* New Layout */}
        <div className="mt-16 flex flex-col gap-8 lg:flex-row lg:gap-12">

          {/* Sidebar */}
          <div className="flex shrink-0 flex-row gap-2 overflow-x-auto rounded-3xl bg-[#FFFFFF] px-4 no-scrollbar lg:w-64 lg:flex-col">
            {rolesData.map((role) => (
              <button
                key={role.id}
                onClick={() => setActiveRole(role)}
                className={`mt-[11px] flex-shrink-0 rounded-2xl px-5 py-[18px] text-left text-[15px] font-semibold transition-all duration-300 md:text-[18px] lg:text-[21px]
                ${
                  activeRole.id === role.id
                    ? "rounded-[14px] border-[#0A4CCF] bg-[#EBF1FF] text-[#0A4CCF] shadow-sm lg:border-l-[6px]"
                    : "border-transparent bg-transparent text-[#475467] hover:bg-gray-100 hover:text-gray-900 lg:border-l-[6px]"
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
              >
                {activeRole.cards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={index}
                      className="relative rounded-[24px] border border-gray-200 bg-[#F8FAFC] p-8 text-gray-900 shadow-sm transition-transform duration-300 hover:scale-105"
                    >
                      {/* Icon */}
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EBF1FF] text-[#0A4CCF]">
                        <Icon size={24} />
                      </div>

                      {/* Heading */}
                      <h3 className="mb-3 text-xl font-bold text-[#101828]">
                        {card.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[15px] leading-relaxed text-[#475467]">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}