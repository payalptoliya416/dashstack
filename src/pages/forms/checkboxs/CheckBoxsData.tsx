import { Globe, Layers, LifeBuoy, Sun } from "lucide-react";

type Plan = {
  id: string;
  title: string;
  price: string;
  description: string;
};

interface Option {
  reference: string;
  details: React.ReactNode;
}

export const plans: Plan[] = [
  {
    id: "basic",
    title: "Basic",
    price: "Free",
    description: "Get 1 project with 1 team member.",
  },
  {
    id: "premium",
    title: "Premium",
    price: "$12 / Mon",
    description: "Get 5 projects with 5 team members.",
  },
  {
    id: "business",
    title: "Business",
    price: "$30 / Mon",
    description: "Get 100 projects with 100 team members.",
  },
];

// Data for Example 2
export const shippingOptions = [
  { id: "standard", title: "Standard", description: "4-10 business days", price: "$10 USD" },
  { id: "express", title: "Express", description: "3-6 business days", price: "$15 USD" },
  { id: "quickly", title: "Quickly", description: "2-4 business days", price: "$20 USD" },
  { id: "superfast", title: "Superfast", description: "1-2 business days", price: "$25 USD" },
];

// Data for Example 3
export const paymentOptions = [
  { id: "paypal", title: "Paypal - 2.5%", lastUsed: "26 March, 2023", imgSrc: "/images/r1.svg" },
  { id: "mastercard", title: "Mastercard - 2.0%", lastUsed: "26 March, 2023", imgSrc: "/images/r2.svg" },
  { id: "banktransfer", title: "BankTransfer - 5%", lastUsed: "26 March, 2023", imgSrc: "/images/r3.svg" },
];

// Data for Example 4
export const businessPlans = [
  { id: "starter-4", title: "Starter - Free", price: "Free", description: "For smaller businesses, with simple salaries and pay schedules subscriptions.", imgSrc: "/images/r4.svg" },
  { id: "personal-4", title: "Personal", price: "$10 /Mon", description: "For smaller businesses, with simple salaries and pay schedules subscriptions.", imgSrc: "/images/r5.svg" },
  { id: "enterprise-4", title: "Enterprise", price: "$20 /Mon", description: "For smaller businesses, with simple salaries and pay schedules subscriptions.", imgSrc: "/images/r6.svg" },
];

// Data for Example 5
export const iconPlans = [
  { id: "starter-5", title: "Starter", price: "Free", description: "For smaller businesses, with simple salaries and pay schedules subscriptions.", icon: Layers },
  { id: "premium-5", title: "Premium", price: "$5 /Mon", description: "For smaller businesses, with simple salaries and pay schedules subscriptions.", icon: LifeBuoy },
  { id: "business-5", title: "Business", price: "$15 /Mon", description: "For smaller businesses, with simple salaries and pay schedules subscriptions.", icon: Globe, popular: true },
  { id: "enterprise-5", title: "Enterprise", price: "$30 /Mon", description: "For smaller businesses, with simple salaries and pay schedules subscriptions.", icon: Sun },
];

// Data for Example 6
export const contactCards = [
  {
    id: "william",
    name: "William T. Angeles",
    company: "Software Company",
    phone: "+1 662-618-5001",
    email: "contact@jourrapide.com",
    role: "Frontend Development",
    website: "https://yourwebsite.com",
    address: "New York, United States",
  },
  {
    id: "kenneth",
    name: "Kenneth P. Navarre",
    company: "AI Technology",
    phone: "+1 662-618-5001",
    email: "contact@jourrapide.com",
    role: "Frontend Development",
    website: "https://yourwebsite.com",
    address: "Vargenia, United State",
  },
  {
    id: "judith",
    name: "Judith R. Truman",
    company: "Entertainment",
    phone: "+1 662-618-5001",
    email: "contact@jourrapide.com",
    role: "Frontend Development",
    website: "https://yourwebsite.com",
    address: "California, United State",
  },
];

// Data for Example 7
export const cardPlans = [
  { id: "starter-7", title: "Starter", price: "Free", description: "For smaller business, with simple salaries and pay shedules subscriptions.", imgSrc: "/images/g13.jpg" },
  { id: "premium-7", title: "Premium", price: "$5 /Mon", description: "For smaller business, with simple salaries and pay shedules subscriptions.", imgSrc: "/images/g14.jpg", popular: true },
  { id: "business-7", title: "Business", price: "$15 /Mon", description: "For smaller business, with simple salaries and pay shedules subscriptions.", imgSrc: "/images/g15.jpg" },
];

// Data for Example 8
export const imageOptions = [
  { id: "image1", imgSrc: "/images/g15.jpg" },
  { id: "image2", imgSrc: "/images/g16.jpg" },
  { id: "image3", imgSrc: "/images/g17.jpg" },
  { id: "image4", imgSrc: "/images/g18.jpg" },
];

export const radiosTable: Option[] = [
  {
    reference: "Checkbox",
    details: <>Use
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .check-card
        </button>  class with
     <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       label
        </button> 
        </>,
  },
  {
    reference: "Type",
    details: (
      <>
      Use input
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      [type="checkbox"]
        </button>
      </>
    ),
  },
  {
    reference: ".check-icon",
    details: (
      <>
    Use
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
        .check-icon
        </button> class for custom check.
      </>
    ),
  },
  {
    reference: ".check-card-wrapper",
    details: (
      <>
   Use 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
       .check-card-wrapper
        </button> class for wrapping check card.
      </>
    ),
  },
  {
    reference: ".check-card-content",
    details: (
      <>
   Use 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
     .check-card-content
        </button>  class for wrapping check title, desc, price, etc.
      </>
    ),
  },
  {
    reference: "Additional",
    details: (
      <>
   Use 
        <button className="text-[#e83e8c] py-[2px] mx-1 px-1 rounded bg-[#f1f2f3] text-sm">
      addinional
        </button> class or components as per your requirements.
      </>
    ),
  },
]