import FeatureCard from "./FeatureCard";


import documents from "../assets/document.png";
import inventory from "../assets/inventory.png";
import directory from "../assets/directory.png";
import accounting from "../assets/accounts.png";
import system from "../assets/system.png";
import operations from "../assets/operations.png";


const features = [

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
  
];

export default function Features() {
  return (
    <section id="features" className="w-full bg-[#F9FAFB] py-10 sm:py-12 lg:pt-[95px] responsive-container">
      
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
          <h2 className="mt-8 text-[28px] md:text-[32px] lg:text-[38px] font-medium leading-[1.15] text-[#05216E]">
            One Platform. Every Business Function
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-4xl text-[16px] md:text-[17px] lg:text-[18px] leading-6 text-[#6A7282]">
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