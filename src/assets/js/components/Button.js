import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, className, onClick }) => {
  return (
    <button 
      className={`tw-px-4 tw-py-2 tw-bg-blue-500 tw-text-white tw-rounded hover:tw-bg-blue-600 tw-transition ${className}`} 
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
};

export default Button;