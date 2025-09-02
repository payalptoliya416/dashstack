import { useState } from "react";
import {
  BriefcaseBusiness,
  Check,
  Globe,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { businessPlans, cardPlans, contactCards, iconPlans, imageOptions, paymentOptions, plans, radiosTable, shippingOptions } from "./RadiosData";
import UIOptionTable from "../../base-ui/UIOptionTable";

function Radios() {
  const [selected1, setSelected1] = useState<string>("basic");
  const [selected2, setSelected2] = useState<string>("standard");
  const [selected3, setSelected3] = useState<string>("paypal");
  const [selected4, setSelected4] = useState<string>("starter-4");
  const [selected5, setSelected5] = useState<string>("starter-5");
  const [selected6, setSelected6] = useState<string>("william");
  const [selected7, setSelected7] = useState<string>("starter-7");
  const [selected8, setSelected8] = useState<string>("image1");

  return (
    <>
      {/* Example_1 */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Example_1
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7">
            {plans.map((plan) => {
              const isActive = selected1 === plan.id;
              return (
                <div
                  key={plan.id}
                  onClick={() => setSelected1(plan.id)}
                  className={`cursor-pointer border-2 rounded p-4 md:p-6 flex gap-3 items-start transition 
                  ${isActive ? "border-[#3E97FF]" : "border-gray-100"}`}
                >
                  <div>
                    <span
                      className={`w-6 h-6 flex items-center justify-center rounded-full border transition 
                      ${isActive ? "bg-[#3E97FF] border-[#3E97FF]" : "border-gray-300"}`}
                    >
                      {isActive && <Check className="w-3 h-3 text-white" />}
                    </span>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between">
                      <h3 className="text-base text-[#252f4a] font-bold mb-3">
                        {plan.title}
                      </h3>
                      <h3 className="text-base text-[#252f4a] font-semibold">
                        {plan.price}
                      </h3>
                    </div>
                    <p className="text-[#6c757D] text-sm sm:text-base">
                      {plan.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Example_2 */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Example_2
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-7">
            {shippingOptions.map((option) => {
              const isActive = selected2 === option.id;
              return (
                <div
                  key={option.id}
                  onClick={() => setSelected2(option.id)}
                  className={`cursor-pointer border-2 rounded p-4 md:p-6 flex gap-3 items-start transition justify-between
                  ${isActive ? "border-[#3E97FF]" : "border-gray-100"}`}
                >
                  <div>
                    <h3 className="text-base text-[#252f4a] mb-2 font-bold">
                      {option.title}
                    </h3>
                    <p className="text-[#6C757D] text-sm mb-4">
                      {option.description}
                    </p>
                    <h4 className="text-sm text-[#252f4a] font-bold">{option.price}</h4>
                  </div>
                  <div>
                    <span
                      className={`w-6 h-6 flex items-center justify-center rounded-full border transition
                      ${isActive ? "bg-[#3E97FF] border-[#3E97FF]" : "border-gray-300"}`}
                    >
                      {isActive && <Check className="w-3 h-3 text-white" />}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Example_3 */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Example_3
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7">
            {paymentOptions.map((option) => {
              const isActive = selected3 === option.id;
              return (
                <div
                  key={option.id}
                  onClick={() => setSelected3(option.id)}
                  className={`cursor-pointer border-2 rounded p-4 sm:p-6 flex gap-6 items-center transition
                  ${isActive ? "border-[#3E97FF]" : "border-gray-100"}`}
                >
                  <img src={option.imgSrc} alt="" className="w-full max-w-10" />
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h3 className="text-base text-[#252f4a] font-bold mb-1">
                        {option.title}
                      </h3>
                      <span
                        className={`w-6 h-6 flex items-center justify-center rounded-full border transition
                        ${isActive ? "bg-[#3E97FF] border-[#3E97FF]" : "border-gray-300"}`}
                      >
                        {isActive && <Check className="w-3 h-3 text-white" />}
                      </span>
                    </div>
                    <p className="text-[#6c757D] text-sm sm:text-base">
                      Last time used: <strong>{option.lastUsed}</strong>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Example_4 */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Example_4
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7">
            {businessPlans.map((plan) => {
              const isActive = selected4 === plan.id;
              return (
                <div
                  key={plan.id}
                  onClick={() => setSelected4(plan.id)}
                  className={`cursor-pointer border-2 rounded p-4 sm:p-6 flex gap-6 items-start flex-col sm:flex-row transition
                  ${isActive ? "border-[#3E97FF]" : "border-gray-100"}`}
                >
                  <img src={plan.imgSrc} alt="" className="w-full max-w-14" />
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h3 className="text-base text-[#252f4a] font-bold mb-1">
                        {plan.title} {plan.price !== "Free" && <small className="font-normal">/{plan.price.split('/')[1]}</small>}
                      </h3>
                      <span
                        className={`w-6 h-6 flex items-center justify-center rounded-full border transition
                        ${isActive ? "bg-[#3E97FF] border-[#3E97FF]" : "border-gray-300"}`}
                      >
                        {isActive && <Check className="w-3 h-3 text-white" />}
                      </span>
                    </div>
                    <p className="text-[#6c757D] text-sm sm:text-base">
                      {plan.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Example_5 */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Example_5
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-7">
            {iconPlans.map((plan) => {
              const isActive = selected5 === plan.id;
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  onClick={() => setSelected5(plan.id)}
                  className={`cursor-pointer border-2 rounded p-4 sm:p-6 text-center transition
                  ${isActive ? "border-[#3E97FF]" : "border-gray-100"}`}
                >
                  <Icon className="inline-block" size={30} />
                  <div className="my-6">
                    <h3 className="text-base text-[#252f4a] font-bold mb-1">
                      {plan.title}{" "}
                      {plan.popular && (
                        <span className="bg-[#e9f8f0] text-[#25b865] py-1 px-[7px] rounded text-[11px] leading-[11px]">
                          Popular
                        </span>
                      )}
                    </h3>
                    <p className="text-[#6C757D] w-full mb-4 text-sm sm:text-base">
                      {plan.description}
                    </p>
                    <h4 className="font-semibold text-[#252F4a]">
                      {plan.price}
                    </h4>
                  </div>
                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-full border transition mx-auto
                    ${isActive ? "bg-[#3E97FF] border-[#3E97FF]" : "border-gray-300"}`}
                  >
                    {isActive && <Check className="w-3 h-3 text-white" />}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Example_6 */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Example_6
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7">
            {contactCards.map((card) => {
              const isActive = selected6 === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => setSelected6(card.id)}
                  className={`cursor-pointer border-2 rounded p-4 sm:p-6 flex gap-5 transition
                  ${isActive ? "border-[#3E97FF]" : "border-gray-100"}`}
                >
                  <span
                    className={`w-6 h-6 flex items-center justify-center rounded-full border transition
                    ${isActive ? "bg-[#3E97FF] border-[#3E97FF]" : "border-gray-300"}`}
                  >
                    {isActive && <Check className="w-3 h-3 text-white" />}
                  </span>
                  <div>
                    <h3 className="text-[#252f4a] text-base mb-2 font-bold">
                      {card.name}
                    </h3>
                    <h5 className="text-xs text-[#252f4a] font-semibold">
                      {card.company}
                    </h5>
                    <ul className="mt-8">
                      <li className="flex gap-4 text-sm mb-4 items-center text-[#6C757D]">
                        <PhoneCall size={16} />
                        <a href={`tel:${card.phone}`} className="hover:text-blue-600 transition">
                          {card.phone}
                        </a>
                      </li>
                      <li className="flex gap-4 text-sm mb-4 items-center text-[#6C757D]">
                        <Mail size={16} />
                        <a href={`mailto:${card.email}`} className="hover:text-blue-600 transition">
                          {card.email}
                        </a>
                      </li>
                      <li className="flex gap-4 text-sm mb-4 items-center text-[#6C757D]">
                        <BriefcaseBusiness size={16} />
                        <a href="#" className="hover:text-blue-600 transition">
                          {card.role}
                        </a>
                      </li>
                      <li className="flex gap-4 text-sm mb-4 items-center text-[#6C757D]">
                        <Globe size={16} />
                        <a href={card.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
                          {card.website}
                        </a>
                      </li>
                      <li className="flex gap-4 text-sm mb-4 items-center text-[#6C757D]">
                        <MapPin size={16} />
                        <a href="#" className="hover:text-blue-600 transition">
                          {card.address}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Example_7 */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Example_7
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7">
            {cardPlans.map((plan) => {
              const isActive = selected7 === plan.id;
              return (
                <div
                  key={plan.id}
                  onClick={() => setSelected7(plan.id)}
                  className={`cursor-pointer border-2 rounded text-center transition
                  ${isActive ? "border-[#3E97FF]" : "border-gray-100"}`}
                >
                  <img src={plan.imgSrc} alt="" />
                  <div className="p-4 sm:p-6">
                    <h3 className="text-[#252f4a] mb-2 font-bold">
                      {plan.title}{" "}
                      {plan.popular && (
                        <span className="bg-[#fbeff1] text-[#d13b4c] py-1 px-[7px] rounded text-[11px] leading-[11px]">
                          popular
                        </span>
                      )}
                    </h3>
                    <p className="text-[#6C757D] text-sm mb-4 font-semibold">{plan.description}</p>
                    <h4 className="font-semibold text-[#252F4a] mb-4">
                      {plan.price}
                    </h4>
                    <span
                      className={`w-6 h-6 flex items-center justify-center rounded-full border transition mx-auto
                      ${isActive ? "bg-[#3E97FF] border-[#3E97FF]" : "border-gray-300"}`}
                    >
                      {isActive && <Check className="w-3 h-3 text-white" />}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Example_8 */}
      <div className="rounded-lg shadow border border-gray-100 bg-white mb-7">
        <div className="p-4 border-b border-gray-100 font-bold text-[17px]">
          Example_8
        </div>
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 sm:gap-7">
            {imageOptions.map((image) => {
              const isActive = selected8 === image.id;
              return (
                <div
                  key={image.id}
                  onClick={() => setSelected8(image.id)}
                  className={`cursor-pointer border-2 rounded text-center relative transition
                  ${isActive ? "border-[#3E97FF]" : "border-gray-100"}`}
                >
                  <img src={image.imgSrc} alt="" />
                  <span
                    className={`w-5 h-5 rounded-full border-2 absolute block top-6 right-6 transition
                    ${isActive ? "bg-[#3E97FF] border-transparent" : "bg-white  border-white"}`}
                  >
                    {isActive && <Check className="w-3 h-3 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
         <UIOptionTable title="Options" options={radiosTable} />
    </>
  );
}

export default Radios;