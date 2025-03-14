import PropTypes from "prop-types";

const PopupDialog = ({ isSidebar = false, sideBarDirection = "left", onClose, children, popupSize = "lg" }) => {

  // define popup sizeClasses when isSidebar is false
  const sizeClasses = {
    sm: "tw-max-w-sm",
    md: "tw-max-w-md",
    lg: "tw-max-w-4xl",
    xl: "tw-max-w-6xl",
    full: "tw-max-w-full",
  };

  return (
    <div 
      className="tw-fixed tw-inset-0 tw-bg-black-100 tw-w-full tw-h-full tw-z-[100] tw-bg-[rgba(0,0,0,0.7)]"
      onClick={onClose} // Close when clicking outside
    >
      {/* when isSidebar prop is true */}
      {isSidebar && (
        <div 
          className={`${sideBarDirection === "right" ? "tw-justify-end" : "tw-justify-start"} tw-h-full tw-flex tw-flex-wrap tw-w-full tw-max-w-full`}
        >
          <div 
            className="tw-w-[90%] tw-max-w-full popup-card tw-h-full tw-bg-white tw-shadow-lg tw-rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <div className="tw-w-full tw-flex tw-justify-end tw-p-4">
              <button type="button" className="tw-p-1 tw-relative tw-z-[20]" onClick={onClose}>
                <i className="tw-text-[18px] fa-solid fa-xmark tw-text-white"></i>
              </button>
            </div>

            {/* Content */}
            {children}
          </div>
        </div>
      )}
      
      {/* when isSidebar prop is false render this structure */}
      {!isSidebar && (
        <div className="tw-flex tw-items-center tw-justify-center tw-h-screen tw-w-full tw-px-[24px]">
          <div 
            className={`popup-card tw-p-[24px] ${sizeClasses[popupSize] || sizeClasses.md} tw-w-full tw-bg-white tw-shadow-lg tw-rounded-lg`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <div className="tw-w-full tw-flex tw-justify-end tw-pb-8">
              <button type="button" className="tw-relative tw-z-[20]" onClick={onClose}>
                <i className="tw-text-[18px] fa-solid fa-xmark tw-text-white"></i>
              </button>
            </div>

            {/* Content */}
            {children}
          </div>
        </div>
      )}

    </div>
  );
};

// PropTypes
PopupDialog.propTypes = {
  isSidebar: PropTypes.bool,
  sideBarDirection: PropTypes.oneOf(["left", "right"]),
  onClose: PropTypes.func.isRequired, // Close function required
  children: PropTypes.node,
  popupSize: PropTypes.string,
};

export default PopupDialog;
