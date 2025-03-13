import { Link } from "react-router-dom";

// Image Components
import MainLogo from "@/assets/images/privicoin-logo-@2x.webp";
// Dashboard Component
import DashboardLinks from "@/assets/js/dashboard-components/DashboardLinks";

const DashboardSideBar = () => {
  return (
    <div className="tw-w-[240px] tw-sticky tw-top-[32px] tw-max-w-full tw-text-white tw-flex tw-content-between tw-items-start tw-flex-wrap">
      <div className="tw-w-full dashboard-sidebar-nav tw-py-[40px] tw-flex tw-flex-col tw-items-center tw-justify-start">
        <Link to="/dashboard" className="tw-w-[120px] md:tw-w-[142px]">
          <img src={MainLogo} className="header-logo-image" alt="Privicoin" />
        </Link>

        {/* Dashboard Links */}
        <DashboardLinks />
      </div>
    </div>
  );
};

export default DashboardSideBar;
