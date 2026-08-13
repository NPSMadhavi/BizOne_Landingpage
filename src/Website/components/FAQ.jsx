import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes BizOne a multi-company ERP?",
    answer:
      "BizOne allows you to manage multiple companies from a single dashboard while keeping data isolated and secure.",
  },
  {
    question: "How long does it take to get set up?",
    answer:
      "You can get started within a few minutes. Simply create your account and configure your company details.",
  },
  {
    question: "Which modules are included?",
    answer:
      "Sales, Purchase, Inventory, GST, HR, Payroll, Accounting, Reports and many more.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use secure cloud infrastructure, encrypted communication and regular backups.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "Absolutely. You can start with a free trial before choosing a plan.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#F9FAFB] py-16 responsive-container">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Side */}
          <div className="min-w-0">

            <h2 className="text-fluid-lg font-medium leading-[1.05] text-[#101828]">
              Frequently Asked Questions
            </h2>

            <p className="mt-8 w-full text-fluid-sm leading-8 text-[#667085]">
              Everything you need to know about running your companies on BizOne.
            </p>

          </div>

          {/* Right Side */}
          <div className="min-w-0">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#EAECF0]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <h3 className="text-[18px] font-medium text-[#101828]">
                    {faq.question}
                  </h3>

                  {openIndex === index ? (
                    <Minus
                      size={20}
                      className="text-[#667085]"
                    />
                  ) : (
                    <Plus
                      size={20}
                      className="text-[#667085]"
                    />
                  )}
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-16 text-[14px] leading-8 text-[#667085]">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}