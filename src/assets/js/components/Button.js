import React from "react";
import PropTypes from "prop-types";
// FontAwesome Icons
import "@fortawesome/fontawesome-free/css/all.min.css";

const Button = ({ title = "", children, className = "", href = "#", hasIcon = false, targetBlank = false, isAnchor = true, onClick = () => {} }) => {
  return isAnchor ? (
    // Render as <a> if isAnchor = true
    <a 
      href={href || "#"} 
      {...(targetBlank ? { target: "_blank", rel: "noopener noreferrer" } : {})} 
      className={className ? className : "tw-px-4 tw-py-2 tw-bg-blue-500 tw-text-white tw-rounded hover:tw-bg-blue-600 tw-transition tw-text-[16px] tw-inline-flex tw-items-center"}
    >
      {title || children}
      {hasIcon && <span className="arrow-icon tw-ml-2"><i className="fa-solid fa-arrow-right"></i></span>}
    </a>
  ) : (
    // Render as <button> if isAnchor = false
    <button 
      type="button" 
      onClick={onClick}
      className={className ? className : "tw-px-4 tw-py-2 tw-bg-blue-500 tw-text-white tw-rounded hover:tw-bg-blue-600 tw-transition tw-text-[16px] tw-inline-flex tw-items-center"}
    >
      {title || children}
      {hasIcon && <span className="arrow-icon tw-ml-2"><i className="fa-solid fa-arrow-right"></i></span>}
    </button>
  );
};

// PropTypes
Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  hasIcon: PropTypes.bool,
  targetBlank: PropTypes.bool,
  isAnchor: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
