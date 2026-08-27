import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="responsive-container py-16 lg:py-24 bg-[#FFFFFF]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start ">
          
          {/* Left Column */}
          <div className="flex flex-col max-w-xl items-center md:items-center lg:items-start">
            <div>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            ✦ Get in touch
          </span>
            </div>
            
            <h2 className="mt-6 text-[28px] md:text-[32px] lg:text-[38px] font-medium leading-[1.15] text-[#05216E]">
              Let's start a conversation
            </h2>
            
            <p className="mt-4 text-[16px] md:text-[17px] lg:text-[18px] leading-6 text-[#6A7282] text-center md:text-center lg:text-start">
              Have questions about our multi-company ERP capabilities? Reach out to our specialized teams. We're here to help guide your business transformation.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {/* Email Card */}
              <div className="flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F9FAFB] p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E6F0FF] text-[#0072F8]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#596475]">General & Sales Inquiries</h4>
                  <p className="mt-1 text-lg font-semibold text-[#071123]">hello@bizone.com</p>
                  <p className="mt-1 text-[14px] md:text-[15px] lg:text-[16px] text-[#596475]">Our response time is typically within 2 business hours.</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F9FAFB] p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E6F0FF] text-[#0072F8]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#596475]">Talk to an ERP Specialist</h4>
                  <p className="mt-1 text-lg font-semibold text-[#071123]">+1 (800) 555-0190</p>
                  <p className="mt-1 text-[14px] md:text-[15px] lg:text-[16px] text-[#596475]">Available Mon-Fri, 9:00 AM - 6:00 PM EST.</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F9FAFB] p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E6F0FF] text-[#0072F8]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#596475]">Corporate Headquarters</h4>
                  <p className="mt-1 text-lg font-semibold text-[#071123]">One World Trade Center, Suite 85A</p>
                  <p className="mt-1 text-[14px] md:text-[15px] lg:text-[16px] text-[#596475]">New York, NY 10007, United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-[24px] border border-[#E2E8F0] bg-[#FFFFFF] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] lg:p-10">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#071123]">First & Last Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Sarah Jenkins" 
                    className="rounded-xl  border border-[#D1D5DB] px-4 py-3 outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#071123]">Work Email Address</label>
                  <input 
                    type="email" 
                    placeholder="e.g. sarah@company.com" 
                    className="rounded-xl border border-[#D1D5DB] px-4 py-3 outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8]"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#071123]">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Jenkins Enterprises" 
                    className="rounded-xl border border-[#D1D5DB] px-4 py-3 outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#071123]">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="e.g. +1 (555) 019-2834" 
                    className="rounded-xl border border-[#D1D5DB] px-4 py-3 outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8]"
                  />
                </div>
              </div>

<div className="flex flex-col gap-2">
  <label className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#071123]">
    How can we help?
  </label>

  <div className="relative">
    <select
      className="w-full appearance-none rounded-xl border border-[#D1D5DB] bg-white px-4 py-3 pr-10 outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8]"
    >
      <option>Demo Request</option>
      <option>Sales Inquiry</option>
      <option>Partnership</option>
      <option>Other</option>
    </select>

    <ChevronDown
      size={18}
      strokeWidth={2}
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#596475]"
    />
  </div>
</div>
              <div className="flex flex-col gap-2">
                <label className="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#071123]">Your Message or Business Requirements</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us a little bit about your multi-company structure and your timeline..." 
                  className="rounded-xl border border-[#D1D5DB] px-4 py-3 outline-none transition focus:border-[#0072F8] focus:ring-1 focus:ring-[#0072F8] resize-none"
                ></textarea>
              </div>

              <button
  type="submit"
  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-[16px] bg-gradient-to-r from-[#002E99] via-[#0072F8] to-[#009FFF] py-3 text-[12px] md:text-[15px] lg:text-[16px] font-semibold text-[#FCFCFC] transition duration-300 hover:shadow-xl"
>
  Send Inquiry
  <ArrowRight
    size={18}
    className="transition group-hover:translate-x-1"
  />
</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
