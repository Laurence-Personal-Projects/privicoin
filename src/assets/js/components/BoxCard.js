import React from "react";
import PropTypes from "prop-types";

/*
  className = additional classes
  children = the slot for the BoxCard
*/
const BoxCard = ({ className, children }) => {
  return (
    <div className={`tw-rounded-[26px] ${className}`}>
      {children}
    </div>
  );
};

//propTypes
BoxCard.propTypes = {
  className: PropTypes.string,
};

//defaultProps
BoxCard.defaultProps = {
  className: "",
};

export default BoxCard;