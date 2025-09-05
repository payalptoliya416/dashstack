import { ArrowRight, Play, Quote, X } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { usePageAnimation } from "../../hooks/usePageAnimation";

interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
}
interface LogoData {
  img: string
}

interface StatData {
  value: string;
  title: string;
  description: string;
}

const logoMapData: LogoData[] = [
  { img: "/images/a1.svg" },
  { img: "/images/a2.svg" },
  { img: "/images/a3.svg" },
  { img: "/images/a4.svg" },
  { img: "/images/a5.svg" },
  { img: "/images/a6.svg" },
  { img: "/images/a4.svg" },
  { img: "/images/a1.svg" },
  { img: "/images/a4.svg" },
  { img: "/images/a2.svg" },
  { img: "/images/a6.svg" },
  { img: "/images/a2.svg" },
];

const statsData: StatData[] = [
  {
    value: "99%",
    title: "Data accuracy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ea tempore necessitatibus quia architecto voluptatum.",
  },
  {
    value: "35.6k",
    title: "Happy clients",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ea tempore necessitatibus quia architecto voluptatum.",
  },
  {
    value: "365+",
    title: "Projects done",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ea tempore necessitatibus quia architecto voluptatum.",
  },
  {
    value: "24+",
    title: "Trusted products",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ea tempore necessitatibus quia architecto voluptatum.",
  },
]
const members: Member[] = [
  { id: 1, name: "Alexandra Della", role: "Frontend Developer", image: "/images/f1.png" },
  { id: 2, name: "Timothy Boyd", role: "UI/UX Designer", image: "/images/f2.png" },
  { id: 3, name: "Laura Foreman", role: "Bootstrap Developer", image: "/images/f4.png" },
  { id: 4, name: "Althea Cabardo", role: "Digital Marketer", image: "/images/f3.png" },
  { id: 5, name: "Socrates Itumay", role: "Support Agent", image: "/images/f5.png" },
  { id: 6, name: "Alexandra Della", role: "Frontend Developer", image: "/images/f6.png" },
  { id: 7, name: "Timothy Boyd", role: "UI/UX Designer", image: "/images/f7.png" },
  { id: 8, name: "Laura Foreman", role: "Bootstrap Developer", image: "/images/f8.png" },
  { id: 9, name: "Althea Cabardo", role: "Digital Marketer", image: "/images/f9.png" },
  { id: 10, name: "Socrates Itumay", role: "Support Agent", image: "/images/f10.png" },
];

function AboutUs() {
 const [isOpen, setIsOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ";
  return (
    <>
       <motion.div {...usePageAnimation()}  className="overflow-hidden">
    <div className="px-8 py-13 sm:py-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-5 items-center">
        <div>
          <span className="text-[#3E97FF] uppercase text-xs mb-6 block">WHO WE ARE</span>
          <h3 className="text-xl sm:text-4xl md:text-5xl text-[#252f4a] font-bold mb-8 leading-[40px] sm:leading-[60px]">About our company <br/> <div className="relative inline-block border-2 border-[#3E97FF] px-2">
          <span className="text-[#3E97FF] font-bold mb-8">wrapdocers</span>
          <span className="absolute w-2 h-2 bg-[#3E97FF] -left-1 -top-1"></span>
          <span className="absolute w-2 h-2 bg-[#3E97FF] -left-1 -bottom-1"></span>
          <span className="absolute w-2 h-2 bg-[#3E97FF] -right-1 -top-1"></span>
          <span className="absolute w-2 h-2 bg-[#3E97FF] -right-1 -bottom-1"></span>
        </div> sky high.</h3>
          
          <p className="text-base md:text-xl text-[#4B5675] mb-6">We're here to bring financial stability, improve the economy. Leave money issue with us and focus on your business & make something awesome.</p>
          <div className="flex gap-1 items-center flex-wrap">
            <button className="px-5 py-2 rounded bg-[#3E97FF] text-white text-sm">Pricing Plan</button>
            <button className="px-5 py-2 rounded bg-[#f1f2f3] text-[#252f4a] text-sm">Contact Us</button>
          </div>
        </div>
        <div className="rounded border-[5px] border-[#eef0f3] relative "  onClick={() => setIsOpen(true)}>
          <img src="/images/videoimg.jpg" alt="" className="rounded" />
          <div className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-[#EEF3FF] flex justify-center items-center 
                          border-5 border-[#B9BCC1]">
            <Play className="w-4 sm:w-6" />
          </div>
        </div>
     </div>
    </div> 
    <div className="px-8 py-13 sm:py-16">
      <p className="text-center w-full max-w-[600px] mx-auto text-[#252f4a] mb-8 text-xl sm:text-[28px] font-bold">We help hundreds of teams plan better events while saving money.</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              {logoMapData.map((logo, index) => (
        <div key={index} className="p-4 sm:p-6 shadow-sm rounded-lg flex justify-center items-center"><img src={logo.img} alt={`logo-${index}`}/></div>
      ))}
      </div>
    </div>
    <div className="px-8">
        <div className="rounded border-[5px] border-[#eef0f3] relative"  onClick={() => setIsOpen(true)}>
          <img src="/images/videoimg2.jpg" alt="" className="rounded" />
          <div className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                           w-12 sm:w-20 h-12 sm:h-20 rounded-full bg-[#EEF3FF] flex justify-center items-center 
                          border-5 border-[#B9BCC1]">
            <Play className="w-4 sm:w-6"/>
          </div>
        </div>
    </div>
    <div className="px-8 py-13 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
         {statsData.map((stat, index) => (
        <div key={index} className="px-4">
          <h2 className="text-[#252f4a] text-[32px] mb-2 font-bold">{stat.value}</h2>
          <h3 className="text-[#3E97FF] text-[21px] mb-4 leading-[22px] font-semibold">
            {stat.title}
          </h3>
          <p className="text-sm text-[#4B5675]">{stat.description}</p>
        </div>
         ))}
      </div>
    </div>
    <div className="px-8">
       <div className="bg-[#F1F2F3] py-12 sm:py-24 flex justify-center items-center text-center">
        <div>
          <span className="block mb-6 text-center"><Quote className="text-[#3E97FF] fill-[#3E97FF] inline-block"/></span>
          <h4 className="text-xs text-[#3E97FF] uppercase mb-6">From Our Team</h4>
          <p className="text-[#252f4a] text-base sm:text-2xl mb-6 w-full max-w-[600px] mx-auto font-semibold px-3">Untitled truely values work-life balance. We work hard and deliver, but at the end of the day you can switch off and plan better events while saving money.</p>
          <div>
            <div className="w-[47px] h-[47px] rounded-full mx-auto mb-2">
              <img src="/images/f1.png" alt="" className="rounded-full"/>
            </div>
              <h3 className="text-sm text-[#25224a]">Alexandra Della</h3>
              <p className="text-sm text-[#6b7177]">CEO, Founder</p>
          </div>
        </div>
       </div>
    </div>
     <div className="px-8 py-13 sm:py-16 ">
       <h4 className="text-xs text-[#3E97FF] uppercase mb-6 text-center">Our Team</h4>
       <h2 className="text-[#252f4a] text-2xl md:text-3xl 2xl:text-5xl mb-6 font-bold text-center">Amazing team of us.</h2>
       <p className="text-[#4B5675] text-xl text-center">We're here to bring financial stability, improve the economy.</p>
      <div className="w-full py-10 grid grid-cols-12 px-4">
      <div className="col-span-12 parent-swiper">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={5}
           breakpoints={{
        1536: { slidesPerView: 5 }, // xl
        1440: { slidesPerView: 4 }, // lg
        1024: { slidesPerView: 3 }, // md
        768: { slidesPerView: 2 },  // sm
        0: { slidesPerView: 1 },    // xs
      }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop
          className="mySwiper w-full"
        >
          {members.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="shadow-lg rounded-lg overflow-hidden bg-white">
                <div className="p-6 border-b border-gray-100 flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                    style={{
                      clipPath:
                        "polygon(46.1732% 0.761205%, 47.4118% 0.340742%, 48.6947% 0.0855514%, 50% 0px, 51.3053% 0.0855514%, 52.5882% 0.340742%, 53.8268% 0.761205%, 82.1111% 12.4769%, 83.2843% 13.0555%, 84.3719% 13.7822%, 85.3553% 14.6447%, 86.2178% 15.6281%, 86.9445% 16.7157%, 87.5231% 17.8889%, 99.2388% 46.1732%, 99.6593% 47.4118%, 99.9144% 48.6947%, 100% 50%, 99.9144% 51.3053%, 99.6593% 52.5882%, 99.2388% 53.8268%, 87.5231% 82.1111%, 86.9445% 83.2843%, 86.2178% 84.3719%, 85.3553% 85.3553%, 84.3719% 86.2178%, 83.2843% 86.9445%, 82.1111% 87.5231%, 53.8268% 99.2388%, 52.5882% 99.6593%, 51.3053% 99.9144%, 50% 100%, 48.6947% 99.9144%, 47.4118% 99.6593%, 46.1732% 99.2388%, 17.8889% 87.5231%, 16.7157% 86.9445%, 15.6281% 86.2178%, 14.6447% 85.3553%, 13.7822% 84.3719%, 13.0555% 83.2843%, 12.4769% 82.1111%, 0.761205% 53.8268%, 0.340742% 52.5882%, 0.0855514% 51.3053%, 0px 50%, 0.0855514% 48.6947%, 0.340742% 47.4118%, 0.761205% 46.1732%, 12.4769% 17.8889%, 13.0555% 16.7157%, 13.7822% 15.6281%, 14.6447% 14.6447%, 15.6281% 13.7822%, 16.7157% 13.0555%, 17.8889% 12.4769%)",
                    }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-[#252f4a] text-base font-bold">{member.name}</h3>
                  <p className="text-[#6B7177] text-[13px]">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
     </div>
     <div className="px-8 border-b border-gray-100 pb-16">
      <div className="bg-[#F1F2F3] pt-16 px-8 rounded-md grid grid-cols-1 xl:grid-cols-2">
          <div>
            <h4 className="text-[#4B5675] text-xs uppercase mb-4">Our Locations</h4>
            <h2 className="text-xl sm:text-2xl md:text-4xl text-[#252f4a] mb-4 uppercase font-bold">Visit our office</h2>
            <p className="text-[17px] mb-4 text-[#4B5675]">Find us at the locations.</p>
             <h3 className="group text-[#3E97FF] text-sm cursor-pointer mb-5 sm:mb-0">  All Available  <ArrowRight className="inline-block text-[#3E97FF] ms-1 transition-transform duration-200 group-hover:translate-x-1" size={12}/></h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 ">
            <div>
              <div className="mb-6">
                <h3 className="text-[#252f4a] text-[17px] leading-[17px] mb-2 font-semibold">Melbourne</h3>
                <p className="text-sm text-[#4B5675]">100 Flinders street <br/> Melbourne VIC 300, AU </p>
              </div>
              <div className="mb-6">
                <h3 className="text-[#252f4a] text-[17px] leading-[17px] mb-2 font-semibold">Sydney</h3>
                <p className="text-sm text-[#4B5675]">944 Locust View Drive <br/>Novato, CA 94947 </p>
              </div>
              <div className="mb-6">
                <h3 className="text-[#252f4a] text-[17px] leading-[17px] mb-2 font-semibold">London</h3>
                <p className="text-sm text-[#4B5675]">2812 Southern Avenue <br/>Osceola, IA 50213 </p>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h3 className="text-[#252f4a] text-[17px] leading-[17px] mb-2 font-semibold">New York</h3>
                <p className="text-sm text-[#4B5675]">4299 Reppert Coal Road<br/> Detroit, MI 48219 </p>
              </div>
              <div className="mb-6">
                <h3 className="text-[#252f4a] text-[17px] leading-[17px] mb-2 font-semibold">Dhaka</h3>
                <p className="text-sm text-[#4B5675]">1678 Coal Road <br/> Brookside (Lycoming), PA 17963 </p>
              </div>
              <div className="mb-6">
                <h3 className="text-[#252f4a] text-[17px] leading-[17px] mb-2 font-semibold">Stockholm</h3>
                <p className="text-sm text-[#4B5675]">2630 Franklee Lane <br/> Philadelphia, PA 19108 </p>
              </div>
            </div>
          </div>
      </div>
     </div>

     {/* --- */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[999999]" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
             <div className="fixed inset-0 backdrop-blur-sm bg-black/20" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <Dialog.Panel className="relative w-full max-w-3xl rounded-2xl bg-white p-2">
                <button
                  className="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-1"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    title="Video Player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
       </motion.div>
    </>
  )
}

export default AboutUs
