import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import PageHeader from "./PageHeader";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

const tabs = [
    { label: "About", path: "/info/about-us"},
    { label: "Contact", path: "/info/contact-us"},
  { label: "Pricing", path: "/info/pricing"  },
  { label: "Privacy", path: "/info/privacy-policy"},
  { label: "Terms", path: "/info/terms-of-services"},
];

function PagesLayout() {
     const { pathname } = useLocation();

  const pageHeaders: Record<string, { tag?: string; title: string; description: string }> = {
    "/info/faqs": {
      tag: "FAQ'S",
      title: "FAQ's",
      description:
        "Frequently asked questions. Here are the most frequently asked questions you may check before getting started",
    },
    "/info/pricing": {
      tag: "Pricing Plan",
      title: "Pricing Plans",
      description: "Compare our plans and find yours. Simple, trasnparent pricing that grow with you. Try any plan free for 30 days.",
    },
    "/info/about-us": {
      tag: "ABOUT us",
      title: "About Us",
      description: "We're here to bring financial stability, improve the economy. Leave money issue with us and focus on your business & make something awesome.",
    },
    "/info/contact-us": {
      tag: "Get in touch",
      title: "Contact US",
      description: "If you'd like to know more about my work or process feel free to get in touch. Either fill out the form with your inquiry or find the department email you'd like to contact below.",
    },
    "/info/privacy-policy": {
      tag: "ABOUT THIS POLICY",
      title: "Privacy & Policy",
      description: "A privacy policy is a statement or legal document that discloses some or all of the ways a party gathers, uses, discloses, and manages a customer or client's data.",
    },
    "/info/terms-of-services": {
      tag: "Terms of Services",
      title: "Terms of Services",
      description: "Terms of service (ToS) is a type of document stating details about what a service provider is responsible for as well as user obligations that must be adhered to for continuation of the service.",
    },
  };

  const currentHeader = pageHeaders[pathname];

  return (
      <motion.div {...usePageAnimation()} className="shadow-sm rounded-lg p-[1px] bg-white overflow-hidden">
        {currentHeader && (
          <PageHeader
            tag={currentHeader.tag}
            title={currentHeader.title}
            description={currentHeader.description}
          />
        )}
        <Outlet />
        <div className="py-[13px] sm:py-16 px-3 sm:px-8">
          <div className="h-[2px] bg-blue-text w-12 mb-5" />
          <h3 className="font-bold mb-2 text-[#252f4A] text-sm">
            WRAPCODERS INC.
          </h3>
          <p className="text-sm mb-6 text-[#252f4A] w-full sm:max-w-[420px]">
            We're here to bring financial stability, improve the economy. Leave
            money issue with us and focus on your business & make something
            awesome.
          </p>
          <div className="flex justify-between smitems-center flex-col md:flex-row gap-5">
            
            <ul className="flex gap-2 sm:gap-5 items-center">
               {tabs.map((tab) => (
                    <li key={tab.path}>
                    <NavLink
                        to={tab.path}
                        className={({ isActive }) =>
                        `text-sm font-semibold ${
                            isActive ? "text-blue-text" : "text-darkgray"
                        }`
                        }
                    >
                        {tab.label}
                    </NavLink>
                    </li>
                ))}
            </ul>
            <ul className="flex gap-5 items-center">
              <li className="text-sm font-semibold text-darkgray">
                <Facebook size={16} />
              </li>
              <li className="text-sm font-semibold text-darkgray">
                <Twitter size={16} />
              </li>
              <li className="text-sm font-semibold text-darkgray">
                <Instagram size={16} />
              </li>
              <li className="text-sm font-semibold text-darkgray">
                <Linkedin size={16} />
              </li>
            </ul>
          </div>
        </div>
    
    </motion.div>
  );
}

export default PagesLayout;
