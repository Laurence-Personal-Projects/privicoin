import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Dashboard Components
import DashboardSideBar from "@/assets/js/dashboard-components/DashboardSideBar";
import DashboardContent from "@/assets/js/dashboard-components/DashboardContent";
import DashboardLinks from "@/assets/js/dashboard-components/DashboardLinks";

// Dashboard Pages
import Projects from "@/assets/js/pages/dashboard/Projects";
import DashboardHeader from "@/assets/js/dashboard-components/DashboardHeader";

// Dialog
import PopupDialog from "@/assets/js/components/core/dialog/PopupDialog";

const Dashboard = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tw-flex tw-flex-wrap tw-min-h-screen tw-p-[24px]">
      
      {/*Dashboard Header*/}
      <DashboardHeader additionalClass="db-header" onClick={() => setIsOpen(true)} />

      {/* Mobile Menu - Popup Dialog */}
      {isOpen && (
        <PopupDialog isSidebar={true} sideBarDirection="right" onClose={() => setIsOpen(false)}>
          {/* Dashboard Links */}
          <DashboardLinks />
        </PopupDialog>
      )}

      <div className={`tw-flex tw-items-start is-desktop-only main-sidebar`}>
        {/* Dashboard Sidebar */}
        <DashboardSideBar />

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
