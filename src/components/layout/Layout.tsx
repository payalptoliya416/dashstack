import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { useEffect, useState } from "react";

export const Layout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
   const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
   <div className="flex relative">
      <Sidebar
        collapsed={isSidebarCollapsed}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />
      <div className="flex-1 min-h-screen bg-[#F5F6FA]">
        <Header
          onToggleSidebar={() => setIsSidebarCollapsed(prev => !prev)}
          onToggleMobileSidebar={() => setMobileSidebarOpen(true)}
        />
        <main className="p-4 sm:p-5 xl:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
