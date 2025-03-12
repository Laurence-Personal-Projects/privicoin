import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ tabs, children, hasIcon = false, mainTitle = "", addtionalTopClass = "", addtionalContentClass = "" }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name || ""); // Default to the first tab

  return (
    <div>
      {/* Tab Buttons */}
      <div className={`tw-flex tw-gap-[6px] tw-items-center ${addtionalTopClass}`}>
        {mainTitle && <h4 className="tw-mr-[10px] tw-text-[18px] md:tw-text-[24px] tw-text-[#8737A9]">{mainTitle}</h4>}
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`tw-rounded-[4px] tw-p-[12px] tw-transition tw-duration-300 hover:tw-bg-[#141414] ${
              activeTab === tab.name ? "tw-bg-[#141414] tw-text-white" : ""
            }`}
          >
            {!hasIcon && tab.label}
            {hasIcon && <i className={tab.icon}></i>}
          </button>
        ))}
      </div>

      {/* Dynamic Content Rendering */}
      <div className={`tw-w-full tw-mt-4 ${addtionalContentClass}`}>
        {children.map((child) =>
          child.props.id === activeTab ? child : null
        )}
      </div>
    </div>
  );
};

// PropTypes
Tabs.propTypes = {
  tabs: PropTypes.array,
  hasIcon: PropTypes.bool,
  mainTitle: PropTypes.string,
  addtionalTopClass: PropTypes.string,
  addtionalContentClass: PropTypes.string,
};

export default Tabs;
