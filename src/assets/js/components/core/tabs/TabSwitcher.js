import { useState } from "react";
import PropTypes from "prop-types";
import "animate.css";

const TabSwitcher = ({ 
  tabs, 
  children, 
  hasIcon = false, 
  hideLabel = false,
  mainTitle = "", 
  addtionalTopClass = "", 
  addtionalContentClass = "",
  onTabChange = () => {},
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name || ""); // Default to the first tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    if (onTabChange) {
      onTabChange(tabName); // 🔹 Call the callback when tab changes
    }
  };

  return (
    <div>
      {/* Tab Buttons */}
      <div className={`tw-flex tw-gap-[6px] tw-items-center ${addtionalTopClass}`}>
        {mainTitle && <h4 className="tw-mr-[10px] tw-text-[18px] md:tw-text-[24px] tw-text-[#8737A9]">{mainTitle}</h4>}
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.name)} // 🔹 Use handleTabClick instead
            className={`tw-rounded-[4px] tw-p-[12px] tw-flex tw-items-center tw-gap-[8px] tw-transition tw-duration-300 hover:tw-bg-[#141414] ${
              activeTab === tab.name ? "tw-bg-[#141414] tw-text-white" : ""
            }`}
          >
            {!hideLabel && tab.label}
            {hasIcon && <i className={tab.icon}></i>}
          </button>
        ))}
      </div>

      {/* Dynamic Content Rendering */}
      <div className={`tw-w-full tw-mt-4 ${addtionalContentClass}`}>
        {children.map((child) =>
          child.props.id === activeTab ? (
            <div key={activeTab} className="animate__animated animate__fadeIn">
              {child}
            </div>
          ) : null
        )}
      </div>

    </div>
  );
};

// PropTypes
TabSwitcher.propTypes = {
  tabs: PropTypes.array,
  hasIcon: PropTypes.bool,
  hideLabel: PropTypes.bool,
  mainTitle: PropTypes.string,
  addtionalTopClass: PropTypes.string,
  addtionalContentClass: PropTypes.string,
  onTabChange: PropTypes.func,
};

export default TabSwitcher;
