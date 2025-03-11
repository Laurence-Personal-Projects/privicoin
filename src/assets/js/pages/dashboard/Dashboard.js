import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Dashboard Components
import DashboardSideBar from "@/assets/js/dashboard-components/DashboardSideBar";
import DashboardContent from "@/assets/js/dashboard-components/DashboardContent";

// Dashboard Pages
import Projects from "@/assets/js/pages/dashboard/Projects";

const Dashboard = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <div className="tw-flex tw-min-h-screen tw-p-[24px]">
      <div className={`tw-flex tw-items-start main-sidebar ${isSidebarActive ? "active-main-sidebar" : "" }`}>
        {/* Dashboard Sidebar */}
        <DashboardSideBar />

        {/* Dashboard Sidebar */}
        <div className="tw-flex tw-justify-end tw-px-[24px] tw-pt-4 dashboard-mobile-menu">
          <div className="tw-cursor-pointer" onClick={toggleSidebar}>
            <i className={`tw-text-[18px] ${isSidebarActive ? "fa-solid fa-xmark" : "fa-solid fa-bars" }`}></i>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="tw-flex-1 tw-p-[24px]">
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
