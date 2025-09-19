import { SquareArrowOutUpRight, Trash2 } from "lucide-react";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../../components/ui/DataTable";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";
import type { PaymentMethod } from "../../types/AccountSetting";

export type BillingStatus = "Paid" | "Pending" | "Reject";
export interface Billing {
  reference: string;
  product: string;
  status: BillingStatus;
  date: string;
  amount: string;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: 1,
    image: "/images/py1.svg",
    title: "Mastercard ending in - 9632",
    subText: "Expire date: 03/2026",
    isDefault: true,
  },
  {
    id: 2,
    image: "/images/py2.svg",
    title: "Visa ending in - 2587",
    subText: "Expire date: 06/2025",
    isDefault: false,
  },
  {
    id: 3,
    image: "/images/py3.svg",
    title: "Paypal ending in - 2.5%",
    subText: "Last time used: 26 March, 2023",
    isDefault: false,
  },
  {
    id: 4,
    image: "/images/py4.svg",
    title: "BankTransfer ending in - 5%",
    subText: "Last time used: 26 March, 2023",
    isDefault: false,
  },
  {
    id: 5,
    image: "/images/py1.svg",
    title: "Mastercard ending in - 8796",
    subText: "Expire date: 02/2023",
    isDefault: false,
  },
];

const billingData: Billing[] = [
  {
    reference: "INV-#741258",
    product: "Bootstrap Admin Dashboard",
    status: "Paid",
    date: "01/06/2023",
    amount: "$59.00",
  },
  {
    reference: "INV-#258963",
    product: "Dashboard & Webapps Template",
    status: "Pending",
    date: "02/07/2023",
    amount: "$99.00",
  },
  {
    reference: "INV-#644789",
    product: "Window Admin Dashboard",
    status: "Paid",
    date: "03/07/2023",
    amount: "$29.00",
  },
  {
    reference: "INV-#854789",
    product: "React Admin Dashboard",
    status: "Reject",
    date: "04/08/2023",
    amount: "$49.00",
  },
  {
    reference: "INV-#357895",
    product: "React Typescript Dashboard",
    status: "Paid",
    date: "04/09/2023",
    amount: "$39.00",
  },
];

function PlanBilling() {
  const images = [
    "/images/f1.png",
    "/images/f2.png",
    "/images/f3.png",
    "/images/f4.png",
    "/images/f5.png",
    "/images/f6.png",
    "/images/f7.png",
  ];

  const total = 10;
  const current = images.length;

    const statusColors: Record<BillingStatus, string> = {
      Paid: "bg-[#e9f8f0] text-[#25b865]",
      Pending: "bg-[#fcf3e8] text-[#e49e3d]",
      Reject: "bg-[#fbeff1] text-[#d13b4c]",
    };

   const columns: ColumnDef<Billing>[] = [
  {
    accessorKey: "reference",
    header: "Reference",
    cell: (info) => (
      <a
        href="#"
        className="text-blue-text hover:underline"
      >
        {info.getValue() as string}
      </a>
    ),
  },
  {
    accessorKey: "product",
    header: "Product",
    cell: (info) => <span>{info.getValue() as string}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => {
      const value = info.getValue() as BillingStatus;
      return (
        <span
          className={`text-11 px-[7px] py-[5px] rounded leading-[13px] ${statusColors[value]}`}
        >
          {value}
        </span>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: (info) => <span>{info.getValue() as string}</span>,
  },
  {
    accessorKey: "amount",
    header: () => <span className="font-semibold">Amount</span>,
    cell: (info) => (
      <span className="font-medium text-gray-900">{info.getValue() as string}</span>
    ),
  },
   ];

  return (
    <>
      <motion.div {...usePageAnimation()}  className="p-6 shadow-sm rounded-lg bg-white mb-7 overflow-hidden">
        <div className="grid grid-cols-12 gap-2 mb-8">
          <div className="col-span-12 md:col-span-4 mb-7 sm:mb-0">
            <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold leading-[17px]">
              Subscription
            </h3>
            <p className="text-sm text-lightgray">
              Manage your subscription plan.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 xl:col-span-6">
            <div className="p-6 shadow-sm rounded-sm mb-8">
              <div className="flex sm:items-center justify-between mb-7 sm:flex-row flex-col gap-5">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[17px] text-[#252F4A] font-semibold">
                      Basic plan
                    </h3>
                    <button className="text-xs border border-[#25b865] text-[#25b865] bg-[#e9f8f0] rounded-full px-2 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#25b865] inline-block"></span>
                      Active
                    </button>
                  </div>
                  <p className="text-sm text-lightgray">
                    Our most popular plan for small teams.
                  </p>
                  <p className="text-sm text-lightgray">
                    Active until <strong>Dec 09, 2024</strong>
                  </p>
                </div>
                <div>
                  <h3 className="text-[#252F4A]">
                    <span className="text-2xl font-bold">$</span>
                    <span className="text-[40px] font-bold leading-[40px]">
                      20
                    </span>
                    <sub className="text-sm">/ per month</sub>
                  </h3>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-12 gap-5 sm:gap-1 lg:gap-10 items-center">
                  {/* Avatars */}
                  <div className="col-span-12 sm:col-span-6 flex items-center relative">
                    {images.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt=""
                        className={`w-9 lg:w-[43px] h-9 lg:h-[43px] rounded-full outline outline-1 outline-white 
            ${i !== 0 ? "-ms-3" : ""} 
            transition-all duration-300 ease-in-out
            hover:scale-110
            cursor-pointer`}
                      />
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="col-span-12 sm:col-span-6 ">
                    <h3>
                      {" "}
                      {current} out of {total}
                    </h3>
                    <div className="w-full h-1 bg-[#EEF0F3] rounded">
                      <div
                        className="h-1 rounded"
                        style={{
                          width: `${(current / total) * 100}%`,
                          backgroundColor: "#252F4A",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4 px-6 border border-gray-100 rounded flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4">
              <h3 className="text-lightgray text-sm">Payment method</h3>
             <div className="flex sm:items-center gap-4  flex-col sm:flex-row">
               <p className="text-xs text-lightgray">
                Mastercard - 03/26 <br /> **** **** **** 9632
              </p>
              <button className="py-2 px-5 rounded border border-gray-200 text-sm bg-[#f1f2f3] text-darkgray">
                Update <SquareArrowOutUpRight className="inline-block ms-2" size={14} />
              </button>
             </div>
            </div>
            <div className="py-4 px-6 border border-t-0 border-gray-100 rounded flex items-start sm:items-center justify-between  flex-col sm:flex-row gap-4">
              <h3 className="text-lightgray text-sm">Billing period</h3>
             <div className="flex sm:items-center gap-4  flex-col sm:flex-row">
               <p className="text-sm text-lightgray">
                Plan billed monthly
              </p>
              <button className="py-2 px-5 rounded border border-gray-200 text-sm bg-[#f1f2f3] text-darkgray">
                Update <SquareArrowOutUpRight className="inline-block ms-2" size={14} />
              </button>
             </div>
            </div>
            <div className="py-4 px-6 border border-t-0 border-gray-100 rounded flex items-start sm:items-center justify-between  flex-col sm:flex-row gap-4">
              <h3 className="text-lightgray text-sm">License keys</h3>
             <div className="flex sm:items-center gap-4  flex-col sm:flex-row">
               <p className="text-sm text-lightgray">
               Redeem a license key
              </p>
              <button className="py-2 px-5 rounded border border-gray-200 text-sm bg-[#f1f2f3] text-darkgray">
                Redeem <SquareArrowOutUpRight className="inline-block ms-2" size={14} />
              </button>
             </div>
            </div>
          </div>
        </div>

        <div className="my-9 border-t border-gray-100" />
        <div className="grid grid-cols-12 gap-2 mb-8">
            <div className="col-span-12 md:col-span-4 mb-7 sm:mb-0">
            <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold leading-[17px]">
              Subscription
            </h3>
            <p className="text-sm text-lightgray">
              Manage your subscription plan.
            </p>
          </div>
             <div className="col-span-12 md:col-span-8 xl:col-span-6">
            {paymentMethods.map((method, index) => (
              <div
                key={method.id}
                className={`px-6 py-4 border border-gray-100 rounded flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between items-start sm:items-center ${
                  index !== 0 ? "border-t-0" : ""
                }`}
              >
                {/* Left Side */}
                <div className="flex gap-5 items-start sm:items-center flex-col sm:flex-row">
                  <img src={method.image} alt="" className="w-8 h-8" />
                  <div>
                    <h3 className="text-sm text-[#252D4A] font-semibold">{method.title}</h3>
                    <p className="text-sm text-graytext">{method.subText}</p>
                  </div>
                </div>

                {/* Right Side */}
                <div className="flex gap-5 items-center">
                  {method.isDefault ? (
                    <button className="text-11 leading-[13px] text-white rounded py-[5px] px-[7px] bg-[#25b865]">
                      Default
                    </button>
                  ) : (
                    <p className="text-sm text-blue-text">Set as default</p>
                  )}
                  <Trash2 className="text-[#d13b4c]" size={15} />
                </div>
              </div>
            ))}
          </div>
        </div>

         <div className="my-9 border-t border-gray-100" />
        <div className="grid grid-cols-12 gap-2 my-10">
             <div className="col-span-3 text-sm sm:hidden"></div>
            <div className="col-span-12 sm::col-span-9">
              <div className="flex items-center gap-2 justify-center">
                 <button className="px-5 py-2 rounded bg-blue text-sm text-white cursor-pointer">Save Changes</button>
                 <button className="px-5 py-2 rounded text-[#d13b4c] bg-[#d13b4c1a] hover:text-white hover:bg-[#d13b4c] transition-all duration-500 text-sm cursor-pointer">Reset</button>
              </div>
            </div>
        </div>

         <div className="my-9 border-t border-gray-100" />
        <div className="grid grid-cols-12 gap-2 mb-8">
           <div className="col-span-12 sm:col-span-4 mb-7 sm:mb-0">
            <h3 className="text-[#252F4A] text-[17px] mb-2 font-bold leading-[17px]">
            Billing History
            </h3>
            <p className="text-sm text-lightgray">
            View your previos billing history
            </p>
          </div>
            <div className="col-span-12 sm:col-span-8">
            <DataTable data={billingData} columns={columns} isPaginated={true} pageSize={5} />
            </div>
        </div>
      </motion.div>
    </>
  );
}

export default PlanBilling;
