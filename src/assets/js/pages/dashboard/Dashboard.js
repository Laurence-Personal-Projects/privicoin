import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Dashboard Components
import DashboardSideBar from "@/assets/js/dashboard-components/DashboardSideBar";
import DashboardContent from "@/assets/js/dashboard-components/DashboardContent";

// Dashboard Pages
import Projects from "@/assets/js/pages/dashboard/Projects";

const Dashboard = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  // Function for toggling the active state of the sidebar
  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  // Effect to reset sidebar when viewport width is 1025px or greater
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1025) {
        setIsSidebarActive(false); // Remove .active-main-sidebar
      }
    };

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="tw-flex tw-min-h-screen tw-p-[24px]">
      <div className={`tw-flex tw-items-start main-sidebar ${isSidebarActive ? "active-main-sidebar" : ""}`}>
        {/* Dashboard Sidebar */}
        <DashboardSideBar />

        {/* Dashboard Sidebar */}
        <div className="tw-flex tw-justify-end tw-px-[16px] tw-pt-4 dashboard-mobile-menu">
          <div className="tw-cursor-pointer" onClick={toggleSidebar}>
            <i className={`tw-text-[18px] ${isSidebarActive ? "fa-solid fa-xmark" : "fa-solid fa-bars"}`}></i>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="tw-flex-1 tw-px-[16px] tw-py-[24px] xl:tw-px-[24px] xl:tw-py-[24px] tw-overflow-x-hidden">
        <Routes>
          {/* Dashboard Content - Main Contents */}
          <Route index element={<DashboardContent />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
