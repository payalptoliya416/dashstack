import { BadgeCheck, Info } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

const plans = [
  {
    name: "Basic",
    monthlyPrice: "$12.99",
    annualPrice: "$131.88", 
    description:
      "Basic feature for up to 5 employees with everything you need.",
    basicFeatures: true,
    users: "10",
    data: "10GB",
    support: true,
    workflow: false,
    integrations: false,
    analytics: "Basic",
    exportReports: true,
    scheduleReports: true,
    apiAccess: false,
    advancedReports: false,
    savedReports: false,
    customReport: false,
    customFields: false,
    ssoSaml: true,
    advancedPermission: false,
    auditLogs: false,
    dataHistory: false,
  },
  {
    name: "Business",
    monthlyPrice: "$24.99",
    annualPrice: "$251.88 ",
    description: "Advanced feature and reporting, better workflow and.",
    basicFeatures: true,
    users: "20",
    data: "20GB",
    support: true,
    workflow: true,
    integrations: true,
    analytics: "Advanced",
    exportReports: true,
    scheduleReports: true,
    apiAccess: true,
    advancedReports: true,
    savedReports: true,
    customReport: false,
    customFields: false,
    ssoSaml: true,
    advancedPermission: true,
    auditLogs: false,
    dataHistory: false,
  },
  {
    name: "Enterprise",
    monthlyPrice: "$39.99",
    annualPrice: "$419.88",
    description: "Personalized service and enterprise security for large team.",
    basicFeatures: true,
    users: "Unlimited",
    data: "Unlimited",
    support: true,
    workflow: true,
    integrations: true,
    analytics: "Extraordinary",
    exportReports: true,
    scheduleReports: true,
    apiAccess: true,
    advancedReports: true,
    savedReports: true,
    customReport: true,
    customFields: true,
    ssoSaml: true,
    advancedPermission: true,
    auditLogs: true,
    dataHistory: true,
  },
];

const features = [
  { key: "basicFeatures", label: "Basic Features" },
  { key: "users", label: "Users" },
  { key: "data", label: "Individual data" },
  { key: "support", label: "Support" },
  { key: "workflow", label: "Automation workflow" },
  { key: "integrations", label: "200+ integrations" },
  { key: "analytics", label: "Analytics" },
  { key: "exportReports", label: "Export reports" },
  { key: "scheduleReports", label: "Schedule reports" },
  { key: "apiAccess", label: "API Access" },
  { key: "advancedReports", label: "Advanced reports" },
  { key: "savedReports", label: "Saved reports" },
  { key: "customReport", label: "Customer reports" },
  { key: "customFields", label: "Custom fields" },
  { key: "ssoSaml", label: "SSO/SAML Authentication" },
  { key: "advancedPermission", label: "Advanced permission" },
  { key: "auditLogs", label: "Audit logs" },
  { key: "dataHistory", label: "Data history" },
];

function InfoPages() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <motion.div {...usePageAnimation()}   className="w-full overflow-hidden">
      <div className="flex py-10 sm:py-16 px-4 sm:px-8 justify-center">
        <div className="border rounded-full border-gray-200">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold ${
              billing === "monthly"
                ? "bg-blue text-white"
                : "text-lightgray"
            }`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setBilling("annual")}
            className={`px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold ${
              billing === "annual"
                ? "bg-blue text-white"
                : "text-lightgray"
            }`}
          >
            Annual billing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 px-6">
      <div className="col-span-12">
      <div className="w-full overflow-x-auto">
        <table className="min-w-full border border-gray-100">
          <thead>
            <tr>
              <th></th>
              {plans.map((plan) => (
                <th
                  key={plan.name}
                  className="text-start py-3 px-6 border-l border-gray-200 align-top min-w-[350px]"
                >
                  <h3 className="text-lg font-bold">{plan.name}</h3>
                  <p className="text-2xl font-extrabold text-darkgray mt-2">
                    {billing === "monthly"
                      ? plan.monthlyPrice
                      : plan.annualPrice}
                    <span className="text-sm font-normal">
                      {" "}
                      / {billing === "monthly" ? "month" : "year"}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1 mb-5">
                    {plan.description}
                  </p>
                  <button className="mt-4 w-full px-5 py-2 rounded bg-blue text-white text-sm">
                    Get Started
                  </button>
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature) => (
              <tr key={feature.key} className="border-t border-gray-200">
                <td className="px-6 py-3 text-sm font-medium text-gray-700 text-left flex items-center gap-2 whitespace-nowrap">
                  {feature.label} <Info className="inline-block" size={12} />
                </td>
                {plans.map((plan) => {
                  const value = (plan as any)[feature.key];
                  return (
                    <td
                      key={plan.name + feature.key}
                      className="text-center py-3 px-4 text-sm text-gray-700 border-l border-gray-200"
                    >
                      {typeof value === "boolean" ? (
                        value ? (
                          <BadgeCheck
                            className="text-green-500 inline-block"
                            size={18}
                          />
                        ) : (
                          "—"
                        )
                      ) : (
                        value
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-gray-200">
              <td></td>
              {plans.map((plan) => (
                <td
                  key={plan.name + "-actions"}
                  className="border-l border-gray-200"
                >
                  <div className="flex flex-col gap-3 px-6 py-3">
                    <button className="px-5 py-2 rounded bg-blue text-white text-sm w-full">
                      Get Started
                    </button>
                    <button className="px-5 py-2 rounded bg-[#f1f2f3] text-darkgray text-sm w-full border border-gray-200">
                      Chat to Sales
                    </button>
                  </div>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
      </div>
      </div> 
    </motion.div>
  );
}

export default InfoPages;
