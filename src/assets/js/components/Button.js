import React from "react";
import PropTypes from "prop-types";
// FontAwesome Icons
import "@fortawesome/fontawesome-free/css/all.min.css";

const Button = ({ title = "", className = "", href = "#", hasIcon = false, targetBlank = false }) => (
  <a
    href={href ? href : '#'} // default is `#`
    {...(targetBlank ? { target: "_blank" } : {})} //if true add targetBlank
    className={className ? className : "tw-px-4 tw-py-2 tw-bg-blue-500 tw-text-white tw-rounded hover:tw-bg-blue-600 tw-transition tw-text-[16px] tw-inline-flex tw-items-center"}
  >
    {title}
    {hasIcon && <span className="arrow-icon tw-ml-2"><i className="fa-solid fa-arrow-right"></i></span>} {/* add an arrow icon if hasIcon = true */}
  </a>
);

// PropTypes
Button.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  hasIcon: PropTypes.bool,
};

export default Button;
