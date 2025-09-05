import { useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChartColumnIncreasing,
  CircleDollarSign,
  Contact,
  File,
  LifeBuoy,
  Mail,
  MessageSquareMore,
  RadioTower,
  Rocket,
  ShoppingCart,
  SquareKanban,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const images = [
  "/images/g13.jpg",
  "/images/g14.jpg",
  "/images/g15.jpg",
  "/images/g16.jpg",
  "/images/g17.jpg",
  "/images/g18.jpg",
];

function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null); // 'home' | 'apps' | 'pages' | 'auths' | null

  return (
    // nav wrapper is relative and listens for mouseLeave to hide the menu
    <nav className="relative" onMouseLeave={() => setActiveMenu(null)}>
      <ul className="flex items-center gap-4 md:gap-7">
        <li
          onMouseEnter={() => setActiveMenu("home")}
          className="text-sm text-[#252f4a] font-bold relative cursor-pointer"
        >
          Home
        </li>

        <li
          onMouseEnter={() => setActiveMenu("apps")}
          className="text-sm text-[#252f4a] font-bold relative after:absolute after:top-2 after:-left-4 after:content-none md:after:content-[''] after:w-1 after:h-1 after:bg-[#252f4a] after:rounded-full group cursor-pointer"
        >
          Apps
        </li>

        <li
          onMouseEnter={() => setActiveMenu("pages")}
          className="text-sm text-[#252f4a] font-bold relative after:absolute after:top-2 after:-left-4 after:content-none md:after:content-[''] after:w-1 after:h-1 after:bg-[#252f4a] after:rounded-full group cursor-pointer"
        >
          Pages
        </li>

        <li
          onMouseEnter={() => setActiveMenu("auths")}
          className="text-sm text-[#252f4a] font-bold relative after:absolute after:top-2 after:-left-4 after:content-none md:after:content-[''] after:w-1 after:h-1 after:bg-[#252f4a] after:rounded-full group cursor-pointer"
        >
          Auths
        </li>
      </ul>

        <AnimatePresence>
            {activeMenu && (
                <motion.div
                key={activeMenu}
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}    
                    exit={{ opacity: 0, y: 20 }}     
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute -left-9 md:left-0 top-8 mt-3 shadow-lg rounded p-4 md:p-8 bg-white w-full md:w-[700px] xl:w-[999px] 2xl:w-[1240px]
    max-h-[80vh] z-50 overflow-y-auto 2xl:max-h-auto"
                onMouseEnter={() => setActiveMenu(activeMenu)} 
                onMouseLeave={() => setActiveMenu(null)}
                >
                {/* ---------- HOME MENU---------- */}
                {activeMenu === "home" && (
                    <div className="grid grid-cols-12 gap-4 md:gap-7">
                    <div className="grid grid-cols-1 lg:grid-cols-2 col-span-12 xl:col-span-8 gap-4 lg:gap-0">
                        <Link to='/eCommerce' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                        <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#ECF5FF]">
                            <ShoppingCart className=" text-[#3e97ff] " />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">eCommerce</h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">
                            Effortlessly manage your online store and boost sales with powerful eCommerce tools.
                            </p>
                        </div>
                        </Link>

                        <Link to='/analytics' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                        <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#E9F8F0]">
                            <ChartColumnIncreasing className=" text-[#25b865] " />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">Analytics</h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">
                            Track business performance, analyze data, and make informed decisions with advanced analytics.
                            </p>
                        </div>
                        </Link>

                        <Link to='/crm' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                        <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#FBEFF1]">
                            <RadioTower className="text-[#d13b4c] " />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">CRM</h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">
                            Strengthen customer relationships, streamline communication, and drive sales with a robust CRM system.
                            </p>
                        </div>
                        </Link>

                        <Link to='#' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                        <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#FCF3E8]">
                            <BriefcaseBusiness className="text-[#e49e3d] " />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">
                            Project <small className="font-light">(Coming Soon)</small>
                            </h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">
                            Efficiently plan, organize, and collaborate on projects to meet deadlines and achieve goals.
                            </p>
                        </div>
                        </Link>

                        <Link to='#' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                        <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#EEF0F3]">
                            <CircleDollarSign className="text-[#252f4a]" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">
                            NFT <small className="font-light">(Coming Soon)</small>
                            </h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">
                            Discover, create, buy, and sell unique digital assets securely in the world of NFTs.
                            </p>
                        </div>
                        </Link>

                        <Link to='#' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                        <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#E6F6FC]">
                            <LifeBuoy className="text-[#02a0e4]" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">
                            POS <small className="font-light">(Coming Soon)</small>
                            </h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">
                            Streamline retail operations, manage inventory, and enhance customer service with our intuitive POS system.
                            </p>
                        </div>
                        </Link>
                    </div>

                    <div className="col-span-12 xl:col-span-4">
                        <div>
                        <div className="bg-[#f1f2f3] p-4 md:p-6">
                            <img src="/images/mega1.png" alt="" />
                        </div>
                        <p className="border border-gray-100 p-4 md:p-6 font-light text-sm">
                            Freequently asks questios? <Link to='#' className="font-bold text-[#3E97FF]">Contact</Link>
                        </p>
                        </div>
                    </div>
                    </div>
                )}

                {/* ---------- APPS MENU---------- */}
                {activeMenu === "apps" && (
                    <div>
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-5">
                        <div>
                        <h3 className="text-[#253f4a] text-base mb-2 font-bold">Applications</h3>
                        <p className="text-[#6B7177] text-sm font-light">Available web appplications.</p>
                        </div>
                        <h3 className="text-[#3E97FF] text-sm cursor-pointer flex items-center">
                        Explore Apps
                        <ArrowRight className="inline-block ms-1 transition-transform duration-200" size={12} />
                        </h3>
                    </div>

                    <div className="grid grid-cols-12 gap-4 md:gap-7">
                        <div className="grid grid-cols-1 lg:grid-cols-2 col-span-12 xl:col-span-8 gap-4 lg:gap-0">
                        <Link to='/inbox' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                            <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#F1F2F3]">
                                <MessageSquareMore className=" text-[#3e97ff] " />
                            </div>
                            </div>
                            <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">Chat</h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">Real-time messaging for seamless communication.</p>
                            </div>
                        </Link>

                        <Link to='/inbox' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                            <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#F1F2F3]">
                                <Mail className="text-[#3e97ff] " />
                            </div>
                            </div>
                            <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">Email</h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">Manage your emails efficiently with our intuitive interface.</p>
                            </div>
                        </Link>

                        <Link to='/contact' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                            <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#F1F2F3]">
                                <Contact className="text-[#3e97ff]" />
                            </div>
                            </div>
                            <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">Contact</h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">Keep all your contacts organized and accessible.</p>
                            </div>
                        </Link>

                        <Link to='/invoice' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                            <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#F1F2F3]">
                                <File className=" text-[#3e97ff] " />
                            </div>
                            </div>
                            <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">Invoice</h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">Create and manage invoices effortlessly for your business.</p>
                            </div>
                        </Link>

                        <Link to='/kanban-board' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                            <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#F1F2F3]">
                                <SquareKanban className="text-[#3e97ff] " />
                            </div>
                            </div>
                            <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">Kanban</h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">Visualize and manage tasks with our Kanban board.</p>
                            </div>
                        </Link>

                        <Link to='/calendar' className="flex md:items-center gap-4 flex-col md:flex-row items-start">
                            <div>
                            <div className="w-14 h-14 rounded flex justify-center items-center bg-[#F1F2F3]">
                                <CalendarDays className="text-[#3e97ff]" />
                            </div>
                            </div>
                            <div>
                            <h3 className="text-[#252f4a] text-sm font-bold mb-2">
                                Calendar 
                            </h3>
                            <p className="text-[#6B7177] font-semibold text-[13px]">Stay organized and never miss an event with our calendar app.</p>
                            </div>
                        </Link>
                        </div>

                        <div className="col-span-12 xl:col-span-4">
                        <div
                            className="bg-[#f1f2f3] flex justify-center items-center p-6 xl:mx-10 rounded-lg"
                            style={{
                            backgroundImage: "url('/images/megabg.svg')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            }}
                        >
                            <img src="/images/mega2.png" alt="" className="max-h-[260px]" />
                        </div>
                        </div>
                    </div>
                    </div>
                )}

                {/* ---------- PAGES MENU ---------- */}
                {activeMenu === "pages" && (
                    <div className="grid grid-cols-12 gap-4 md:gap-7">
                    <div className="col-span-12 xl:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-0">
                        <div>
                        <h3 className="text-[#252f4a] font-bold text-lg mb-4">Profile</h3>
                        <ul className="list-disc pl-4 space-y-4">
                            <li>
                                <Link to='/user-profile/overview' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Overview</Link>
                            </li>
                            <li>
                                <Link to='/user-profile/activity' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Activity</Link>
                            </li>
                            <li>
                                <Link to='/user-profile/followers' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Fllowers</Link>
                            </li>
                            <li>
                                <Link to='/user-profile/contacts' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Contacts</Link>
                            </li>
                            <li>
                                <Link to='/user-profile/projects' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Projects</Link>
                            </li>
                            <li>
                                <Link to='/user-profile/gallery' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Gallery</Link>
                            </li>
                        </ul>
                        </div>

                        <div>
                        <h3 className="text-[#252f4a] font-bold text-lg mb-4">Settings</h3>
                        <ul className="list-disc pl-4 space-y-4">
                            <li>
                                <Link to='/account-setting/account' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Account</Link>
                            </li>
                            <li>
                                <Link to='/account-setting/Security' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Security</Link>
                            </li>
                            <li>
                                <Link to='/account-setting/notification' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Notifications</Link>
                            </li>
                            <li>
                                <Link to='/account-setting/plan-billing' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Plan & Billing</Link>
                            </li>
                            <li>
                                <Link to='/account-setting/integration' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Integrations</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Statements</Link>
                            </li>
                        </ul>
                        </div>

                        <div>
                        <h3 className="text-[#252f4a] font-bold text-lg mb-4">Others</h3>
                        <ul className="list-disc pl-4 space-y-4">
                            <li>
                                <Link to='/info/faqs' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">FAQs</Link>
                            </li>
                            <li>
                                <Link to='/info/pricing' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Pricing</Link>
                            </li>
                            <li>
                                <Link to='/info/about-us' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">About Us</Link>
                            </li>
                            <li>
                                <Link to='/info/contact-us' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Contact Us</Link>
                            </li>
                            <li>
                                <Link to='/info/privacy-policy' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Privacy & Policy</Link>
                            </li>
                            <li>
                                <Link to='/info/terms-of-services' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Terms of Services</Link>
                            </li>
                        </ul>
                        </div>
                    </div>

                    <div className="col-span-12 xl:col-span-4 carousel-parent h-full">
                        <Swiper navigation modules={[Navigation, Pagination]} className="rounded-lg h-full w-full">
                        {images.map((src, idx) => (
                            <SwiperSlide key={idx} className="h-full">
                            <img src={src} alt={`slide-${idx}`} className="w-full h-full object-cover rounded-lg" />
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                    </div>
                )}

                {/* ---------- AUTHS MENU---------- */}
                {activeMenu === "auths" && (
                    <div className="grid grid-cols-12 gap-4 md:gap-7">
                    <div className="col-span-12 xl:col-span-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
                        <div>
                        <h3 className="text-[#252f4a] font-bold text-lg mb-4">Classic</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Login</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Register</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Register Success</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Reset Password</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Forget Password</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">OTP Varify</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Lock Screen</Link>
                            </li>
                        </ul>
                        </div>

                        <div>
                        <h3 className="text-[#252f4a] font-bold text-lg mb-4">Creative</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Login</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Register</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Register Success</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Reset Password</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Forget Password</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">OTP Varify</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Lock Screen</Link>
                            </li>
                        </ul>
                        </div>

                        <div>
                        <h3 className="text-[#252f4a] font-bold text-lg mb-4">Corporate</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Login</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Register</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Register Success</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Reset Password</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Forget Password</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">OTP Varify</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2 font-semibold">Lock Screen</Link>
                            </li>
                        </ul>
                        </div>

                        <div>
                        <h3 className="text-[#252f4a] font-bold text-lg mb-4">Modern</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2">Login</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2">Register</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2">Register Success</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2">Reset Password</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2">Forget Password</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2">OTP Varify</Link>
                            </li>
                            <li>
                                <Link to='#' className="text-[#252f4a] text-sm py-[10px] mb-2">Lock Screen</Link>
                            </li>
                        </ul>
                        </div>
                    </div>

                    <div className="col-span-12 xl:col-span-3 rounded-lg shadow-sm bg-[#F1F2F3] bg-[url('/images/bg-analytic.svg')] xl:bg-left-top bg-no-repeat w-full h-full py-6 md:py-12 px-4 md:px-6">
                        <div className="flex justify-center items-center flex-col text-center">
                        <Rocket size={50} className="text-[#3e97ff] -rotate-45 mb-7" />
                        <h3 className="text-5 font-bold mb-6">Grow faster with pro's help</h3>
                        <p className="text-sm text-[#6B7177] mb-10 max-w-[280px] font-light">
                            Experience top-notch features with our services and insights. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                        <Link to='#' className="py-2 px-5 text-white rounded bg-[#3E97FF] text-sm">Get Started</Link>
                        </div>
                    </div>
                    </div>
                )}
                </motion.div>
            )}
        </AnimatePresence>
    </nav>
  );
}

export default MegaMenu;
