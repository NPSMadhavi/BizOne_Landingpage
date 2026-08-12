import FeatureCard from "./FeatureCard";

import dashboard from "../assets/sales.jpg";
import projects from "../assets/purchase.jpg";
import documents from "../assets/GST.jpg";
import inventory from "../assets/expense.jpg";
import directory from "../assets/purchase.jpg";
import accounting from "../assets/GST.jpg";
import system from "../assets/sales.jpg";
import operations from "../assets/purchase.jpg";
import services from "../assets/GST.jpg";

const features = [
  {
    title: "Dashboard",
    description:
      "A single, real-time view of every company — revenue, orders, stock and people at a glance.",
    image: dashboard,
  },
  {
    title: "Projects",
    description:
      "Plan, assign and track work across teams and companies, with timelines that stay up to date.",
    image: projects,
  },
  {
    title: "Documents",
    description:
      "Store, share and approve contracts, invoices and records in one secure, searchable library.",
    image: documents,
  },
  {
    title: "Inventory",
    description:
      "Real-time stock across locations, barcode picking, transfers and automated reorder points.",
    image: inventory,
  },
  {
    title: "Directory",
    description:
      "One address book for employees, customers and suppliers, shared consistently across companies.",
    image: directory,
  },
  {
    title: "Accounting",
    description:
      "Multi-company ledgers, GST-ready invoicing and instant consolidated financial statements.",
    image: accounting,
  },
  {
    title: "System",
    description:
      "Roles, permissions and configuration that keep every company's setup secure and consistent.",
    image: system,
  },
  {
    title: "Operations",
    description:
      "Purchasing, approvals and day-to-day processes that keep every entity running smoothly.",
    image: operations,
  },
  {
    title: "Services",
    description:
      "Manage service jobs, bookings and delivery so client work stays on schedule and on budget.",
    image: services,
  },
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-[#F9FAFB] py-10 sm:py-12 lg:py-16 responsive-container">
      
      {/* Main Container */}
      <div>
        {/* Heading */}
        <div className="mx-auto max-w-[900px] text-center">
          <div className="flex justify-center">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
              ✦ Key Features
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="mt-8 text-fluid-lg font-medium leading-[1.15] text-[#101828]">
            One Platform. Every Business Function
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-[620px] text-fluid-sm leading-6 text-[#667085]">
            Manage your entire business with integrated modules designed to
            work together seamlessly.
          </p>
        </div>

        {/* Features */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-4
            sm:mt-12
            sm:grid-cols-2
            sm:gap-5
            lg:mt-14
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}