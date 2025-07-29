
import MainTitle from "../../hooks/useMainTitle";
import type { PricingPlan } from "../../types/Dashboard";
import { motion } from "framer-motion";

const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$14.99",
    features: [
      { label: "Free Setup", enabled: true },
      { label: "Bandwidth Limit 10 GB", enabled: true },
      { label: "20 User Connection", enabled: true },
      { label: "Analytics Report", enabled: false },
      { label: "Public API Access", enabled: false },
      { label: "Plugins Integration", enabled: false },
      { label: "Custom Content Management", enabled: false },
    ],
  },
  {
    name: "Standard",
    price: "$29.99",
    features: [
      { label: "Free Setup", enabled: true },
      { label: "Bandwidth Limit 50 GB", enabled: true },
      { label: "50 User Connection", enabled: true },
      { label: "Analytics Report", enabled: true },
      { label: "Public API Access", enabled: true },
      { label: "Plugins Integration", enabled: false },
      { label: "Custom Content Management", enabled: false },
    ],
  },
  {
    name: "Premium",
    price: "$49.99",
    isPopular: true,
    features: [
      { label: "Free Setup", enabled: true },
      { label: "Bandwidth Limit 100 GB", enabled: true },
      { label: "Unlimited User Connection", enabled: true },
      { label: "Analytics Report", enabled: true },
      { label: "Public API Access", enabled: true },
      { label: "Plugins Integration", enabled: true },
      { label: "Custom Content Management", enabled: true },
    ],
  },
];

function Pricing() {
  return (
    <>
      <MainTitle title="Pricing" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 lg:gap-10">
        {pricingPlans.map((plan, index) => (
          <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
            key={index}
            className="rounded-3xl bg-[url('/images/pricingbg.png')] bg-cover w-full h-full px-5"
          >
            <div className="border-b-2 border-[#212121]/10 py-4 sm:py-6 lg:py-10 text-center">
              <h3 className="text-[#202224] text-[22px] font-bold mb-[10px]">
                {plan.name}
              </h3>
              <h6 className="text-[#212121]/80 text-base font-normal mb-2.5">
                Monthly Charge
              </h6>
              <h2 className="text-[#4880FF] text-3xl sm:text-4xl lg:text-[46px] font-extrabold">
                {plan.price}
              </h2>
            </div>

            <ul className="flex flex-col gap-5 lg:gap-[29px] text-center py-8 lg:py-10 xpx-5 l:px-6 border-b-2 border-[#212121]/10">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`text-base md:text-lg ${
                    feature.enabled ? "text-[#212121]" : "text-[#212121]/40 line-through"
                  }`}
                >
                  {feature.label}
                </li>
              ))}
            </ul>

            <div className="flex flex-col justify-center items-center py-6 lg:py-10">
              <button
             className={`rounded-full py-3 md:py-4 lg:py-[19px] px-[48px] mb-6 border border-[#4880FF] 
            transition-all duration-200
            ${
              plan.isPopular
                ? "bg-[#4880FF] text-white"
                : "text-[#4880FF] hover:bg-[#4880FF] hover:text-white active:bg-[#3a6edc] active:text-white"
            }`}
              >
                Get Started
              </button>

              <a
                href="javascript:void(0)"
                className="text-[#212121] text-base underline font-bold"
              >
                Start Your 30 Day Free Trial
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Pricing;
