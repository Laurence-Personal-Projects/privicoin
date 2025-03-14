import { NavLink } from "react-router-dom";

// Image Components
import IconDashboard from "@/assets/images/dashboard/icon-dashboard.webp";
import IconProjects from "@/assets/images/dashboard/icon-projects.webp";
import IconNFTs from "@/assets/images/dashboard/icon-nfts.webp";
import IconRewards from "@/assets/images/dashboard/icon-rewards.webp";
import IconDocumentation from "@/assets/images/dashboard/icon-documentation.webp";

const DashboardLinks = () => {
  return (
    <div className="tw-flex tw-flex-col tw-mt-[20px] md:tw-mt-[40px] md:tw-mt-[120px] tw-w-full ">
      {/* Dashboard Links */}
      <ul className="dashboard-nav-links">
          <li>
            <NavLink 
              to="/dashboard"
              end
              className={({ isActive }) => isActive ? "active-link" : "tw-text-white"}
            >
              <img src={IconDashboard} className="tw-w-[16px] tw-h-[16px] md:tw-w-[22px] md:tw-h-[22px]" alt="Dashboard" /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/projects"
              className={({ isActive }) => isActive ? "active-link" : "tw-text-white"}
            >
              <img src={IconProjects} className="tw-w-[16px] tw-h-[16px] md:tw-w-[22px] md:tw-h-[22px]" alt="Projects" /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/nfts"
              className={({ isActive }) => isActive ? "active-link" : "tw-text-white"}
            >
              <img src={IconNFTs} className="tw-w-[16px] tw-h-[16px] md:tw-w-[22px] md:tw-h-[22px]" alt="NFTs" /> NFTs
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/rewards"
              className={({ isActive }) => isActive ? "active-link" : "tw-text-white"}
            >
              <img src={IconRewards} className="tw-w-[16px] tw-h-[16px] md:tw-w-[22px] md:tw-h-[22px]" alt="Rewards" /> Rewards
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/documentation"
              className={({ isActive }) => isActive ? "active-link" : "tw-text-white"}
            >
              <img src={IconDocumentation} className="tw-w-[16px] tw-h-[16px] md:tw-w-[22px] md:tw-h-[22px]" alt="Documentation" /> Documentation
            </NavLink>
          </li>
        </ul>
    </div>
  );
};

export default DashboardLinks;