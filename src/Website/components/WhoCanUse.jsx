import {
  Store,
  ChartNoAxesCombined,
  FileText,
  Building2,
  Wrench,
  CalendarDays,
} from "lucide-react";

const businesses = [
  {
    icon: Store,
    title: "Small Businesses",
    description: "Shop owners getting organized fast",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Traders",
    description:
      "Optimized performance ensures your analytics load in milliseconds ",
  },
  {
    icon: FileText,
    title: "Accountants & Professionals",
    description:
      "Invoices, quotations and reports",
  },
  {
    icon: Building2,
    title: "Large Companies",
    description:
      "Multiple companies, one platform",
  },
  {
    icon: Wrench,
    title: "Manufacturers",
    description:
      "Assets, projects and service jobs",
  },
  {
    icon: CalendarDays,
    title: "Service Providers",
    description:
      "Engineer reports and scheduling",
  },
];

export default function WhoCanUse() {
  return (
    <section
      id="about"
      className="bg-[#F9FAFB] py-10 sm:py-12 lg:pt-[95px] responsive-container"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            ✦ Who can use BizOne
          </span>
        </div>

        {/* Heading */}
        <h2 className="mx-auto mt-6 max-w-4xl text-center text-[28px] font-medium leading-[1.15] text-[#05216E] md:text-[32px] lg:text-[38px]">
          Built for every size of business
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-4xl text-center text-[16px] leading-6 text-[#6A7282] md:text-[17px] lg:text-[18px]">
          Whether you're a small shop owner or a growing enterprise, BizOne
          helps you manage your business with ease
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businesses.map((business) => {
            const Icon = business.icon;

            return (
              <div
                key={business.title}
                className="
                  group
                  flex
                  h-full
                  min-h-[250px]
                  flex-col
                  rounded-3xl
                  border
                  border-gray-200
                  bg-[#FFFFFF]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#0072F8]
                  hover:shadow-xl
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    text-[#0050CB]
                    transition
                    duration-300
                    group-hover:bg-[#0072F8]
                    group-hover:text-[#FFFFFF]
                  "
                >
                  <Icon size={28} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-[18px]
                    md:text-[20px]
                    lg:text-[22px]
                    font-medium
                    leading-[1.25]
                    text-[#071123]
                  "
                >
                  {business.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    line-clamp-2
                    overflow-hidden
                    text-[16px]
                    md:text-[17px]
                    lg:text-[18px]
                    leading-6
                    text-[#6A7282]
                  "
                >
                  {business.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}