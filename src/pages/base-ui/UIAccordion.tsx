
import { ChevronDown, ChevronUp, Minus, Plus } from "lucide-react";
import { useState } from "react";
import UIOptionTable from "./UIOptionTable";
import { usePageAnimation } from "../../hooks/usePageAnimation";
import {motion} from 'framer-motion';
interface Option {
  reference: string;
  details: React.ReactNode;
}

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

type AccordionVariant =
  | "default"
  | "flush"
  | "opened"
  | "reversed"
  | "icon"
  | "revIcon";

interface AccordionProps {
  title: string;
  items: AccordionItem[];
  variant: AccordionVariant;
}
const accordionOptions: Option[] = [
  {
    reference: "Accordion",
    details: <>Initializing bootstrap 5.3 accordion</>,
  },
  {
    reference: "Icon",
    details: (
      <>
        Add class for custom icon{" "}
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .accordion + .accordion-icon
        </button>
      </>
    ),
  },
  {
    reference: "Reversed",
    details: (
      <>
        Add class for reversed icon{" "}
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .accordion + .accordion-reversed
        </button>
      </>
    ),
  },
  {
    reference: "RevIcon",
    details: (
      <>
        Add class for rev-icon icon{" "}
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
          .accordion + .accordion-rev-icon
        </button>
      </>
    ),
  },
  {
    reference: "Documentations",
    details: (
      <>
        Please visit:{" "}
        <a
          href="https://react-bootstrap.netlify.app/docs/components/accordion"
          className="text-darkgray font-bold"
          target="_blank"
          rel="noreferrer"
        >
          https://react-bootstrap.netlify.app/docs/components/accordion
        </a>
      </>
    ),
  },
];
function Accordion({ title, items, variant }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    variant === "opened" ? null : null
  );
  const [openMultiple, setOpenMultiple] = useState<number[]>(
    variant === "opened" ? [0] : []
  );

  const toggleItem = (index: number) => {
    if (variant === "opened") {
      if (openMultiple.includes(index)) {
        setOpenMultiple(openMultiple.filter((i) => i !== index)); // close
      } else {
        setOpenMultiple([...openMultiple, index]); // open more without closing
      }
    } else {
      setOpenIndex(openIndex === index ? null : index); // single open only
    }
  };

  return (
    <div className="rounded-lg shadow-md border border-gray-200 bg-white">
      <div className="p-4 md:p-6 border-b border-gray-200 font-bold text-[17px]">
        {title}
      </div>
      <div className="p-6">
        <div className="shadow-sm rounded-md">
          {items.map((item, index) => {
            const isOpen =
              variant === "opened"
                ? openMultiple.includes(index)
                : openIndex === index;

            let icon = isOpen ? (
              <ChevronUp size={13} />
            ) : (
              <ChevronDown size={13} />
            );
            if (variant === "icon") {
              icon = isOpen ? <Plus size={13} /> : <Minus size={13} />;
            }
            if (variant === "revIcon") {
              icon = (
                <div className="w-5 h-5 flex justify-center items-center bg-black rounded-full text-white">
                  {isOpen ? <Minus size={11} /> : <Plus size={11} />}
                </div>
              );
            }

            return (
              <div key={item.id}>
                <button
                  onClick={() => toggleItem(index)}
                  className={`px-6 py-4 cursor-pointer text-lightgray ${
                    isOpen ? "bg-[#eef0f3]" : "bg-[#faf9fa]"
                  } text-sm font-bold w-full flex ${
                    variant === "reversed" || variant === "revIcon"
                      ? "justify-start gap-3"
                      : "justify-between"
                  } items-center`}
                >
                  {variant === "reversed" || variant === "revIcon" ? (
                    <>
                      {icon}
                      {item.title}
                    </>
                  ) : (
                    <>
                      {item.title}
                      {icon}
                    </>
                  )}
                </button>

                {isOpen && (
                  <p className="px-6 py-4 text-[#4b5675] text-sm border-b border-gray-100">
                    {item.content}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function UIAccordion() {
  const items: AccordionItem[] = [
    {
      id: 1,
      title: "Accordion Item #1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Accordion Item #2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "Accordion Item #3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <>
    <motion.div
                  {...usePageAnimation()}
                  className="overflow-hidden">
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <Accordion title="Default" items={items} variant="default" />
      <Accordion title="Flush" items={items} variant="flush" />
      <Accordion title="Opened" items={items} variant="opened" />
      <Accordion title="Reversed" items={items} variant="reversed" />
      <Accordion title="Icon" items={items} variant="icon" />
      <Accordion title="RevIcon" items={items} variant="revIcon" />
    </div>
    <UIOptionTable title="Options" options={accordionOptions} />
                  </motion.div>
    </>
  );
}

export default UIAccordion;
