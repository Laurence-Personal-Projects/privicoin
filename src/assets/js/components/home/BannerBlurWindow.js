import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "animate.css";

const BannerBlurWindow = ({ addClass, desktopCounter = 1, xLaptopCounter = 1, laptopCounter = 1, mobileCounter = 1, animationClass = "", animationDelay = 0  }) => {
  const [counter, setCounter] = useState(desktopCounter);

  useEffect(() => {
    const updateCounter = () => {
      if (window.innerWidth <= 767) {
        setCounter(mobileCounter);
      } else if (window.innerWidth <= 1024) {
        setCounter(laptopCounter);
      } else if (window.innerWidth <= 1440) {
        setCounter(xLaptopCounter);
      } else {
        setCounter(desktopCounter);
      }
    };

    updateCounter();
    window.addEventListener("resize", updateCounter);

    return () => window.removeEventListener("resize", updateCounter);
  }, [desktopCounter, xLaptopCounter, laptopCounter, mobileCounter]);

  return (
    <>
      {Array.from({ length: counter }, (_, index) => (
        <div
          key={index}
          className={`banner-window ${addClass} animate__animated ${animationClass}`}
          style={{ animationDelay: animationClass ? `${index * animationDelay}s` : "0s" }}
        ></div>
      ))}
    </>
  );
};

// PropTypes
BannerBlurWindow.propTypes = {
  addClass: PropTypes.string,
  desktopCounter: PropTypes.number,
  xLaptopCounter: PropTypes.number,
  laptopCounter: PropTypes.number,
  mobileCounter: PropTypes.number,
  animationClass: PropTypes.string,
};

export default BannerBlurWindow;
