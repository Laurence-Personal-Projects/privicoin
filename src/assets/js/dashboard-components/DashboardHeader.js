import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Image Components
import MainLogo from "@/assets/images/privicoin-logo-@2x.webp";

const DashboardHeader = ({ onClick, additionalClass = '' }) => {

  // Function for opening the dialog
  const handleOpen = () => {
    if (onClick) {
      onClick(); // Call the function passed as a prop
    }
  };

  return (
    <div className={`tw-flex tw-items-start tw-mb-4 tw-flex-wrap tw-w-full ${additionalClass}`}>
      <div className="tw-flex tw-items-center tw-w-full tw-max-w-full tw-flex-wrap tw-justify-between">
        <Link to="/dashboard" className="tw-w-[120px] tw-block md:tw-w-[142px]">
          <img src={MainLogo} className="tw-w-full" alt="Privicoin" />
        </Link>

        <div className="tw-flex tw-justify-end dashboard-mobile-menu">
          <div className="tw-cursor-pointer" onClick={handleOpen}>
            <i className={`tw-text-[18px] fa-solid fa-bars`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

// PropTypes
DashboardHeader.propTypes = {
  onClick: PropTypes.func,
  additionalClass: PropTypes.string,
};

export default DashboardHeader;