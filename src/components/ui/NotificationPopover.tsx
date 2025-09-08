import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

type NotificationItem = {
  title: string;
  message: string;
  icon: string;
};

const initialNotifications: NotificationItem[] = [
  {
    title: "Settings",
    message: "Update Dashboard",
    icon: "/images/not1.png",
  },
  {
    title: "Event Update",
    message: "An event date update again",
    icon: "/images/not2.png",
  },
  {
    title: "Profile",
    message: "Update your profile",
    icon: "/images/not3.png",
  },
  {
    title: "Application Error",
    message: "Check Your running application",
    icon: "/images/not4.png",
  },
];

const NotificationPopover: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);

  const loadMoreNotifications = () => {
    const more = [
      {
        title: "New Comment",
        message: "You have a new comment",
        icon: "/images/not1.png",
      },
      {
        title: "System Alert",
        message: "Something went wrong",
        icon: "/images/not2.png",
      },
    ];
    setNotifications([...notifications, ...more]);
  };

  return (
    <Popover className="relative">
      <Popover.Button className="relative focus:outline-none cursor-pointer">
        <span className="absolute -top-[9px] -right-[10px] bg-[#F93C65] bg-opacity-80 text-white text-xs w-[18px] h-[18px] flex items-center justify-center rounded-full z-10">
          {notifications.length}
        </span>
        <img src="/images/icon.png" alt="Notification Icon" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-[10%] sm:right-full mt-2 w-[254px] bg-white rounded-xl shadow-lg z-20 max-h-[300px] overflow-y-auto">
          <h3 className="text-[15px] font-semibold py-[14px] px-5 text-[#404040] border-b border-[rgba(151,151,151,0.25)]">
            Notifications
          </h3>
          <ul className="border-b border-[rgba(151,151,151,0.25)]">
            {notifications.map((item, index) => (
              <li key={index}>
               <a href="javascript:void(0)"  className="py-3 pl-5 pr-3 flex gap-3 items-center">
                <img src={item.icon} alt={item.title} />
                <div>
                  <h4 className="text-sm font-semibold mb-[1px] text-darkgray">
                    {item.title}
                  </h4>
                  <p className="text-[#B5B5B5] font-semibold text-xs">{item.message}</p>
                </div></a>
              </li>
            ))}
          </ul>
          <p
            className="text-[#A8A8A8] py-[14px] text-center text-13 leading-[14px] cursor-pointer hover:underline"
            onClick={loadMoreNotifications}
          >
            See all notifications
          </p>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NotificationPopover;
