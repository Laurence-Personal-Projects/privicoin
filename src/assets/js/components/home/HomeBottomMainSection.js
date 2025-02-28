import { useEffect, useRef } from "react";

// Sections
import HomeBottomToken from "@/assets/js/components/home/section/HomeBottomToken";
import RoadMapSection from "@/assets/js/components/home/section/RoadMapSection";

const HomeBottomMainSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollY = window.scrollY;
      const offsetTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Calculate progress from 0 (out of view) to 1 (fully scrolled past)
      const progress = (scrollY - offsetTop + window.innerHeight) / sectionHeight;

      // Background should start at 0 and move **NEGATIVE** when in view
      let positionY = Math.min(0, -(progress * 100)); // Moves upwards (negative)

      // Apply the background position
      sectionRef.current.style.backgroundPositionY = `${positionY}px`;
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="home-bottom-main-section">
      {/* Token Info Section */}
      <div className="tw-pb-[0] tw-py-[60px] md:tw-py-[60px] tw-px-[24px] lg:tw-py-[120px] tw-flex tw-flex-wrap tw-justify-center tw-items-center animate__animated is_animate" data-animation="animate__fadeInUp">
        <div className="wrapper">
          <div className="tw-max-w-[506px] tw-w-full tw-text-center tw-m-auto">
            <h4 className="tw-text-[32px] md:tw-text-[56px] tw-mb-[16px]">Get Started Today!</h4>
            <p className="tw-text-uppercase tw-text-[16px] md:tw-text-[24px]">Your Vote | Your Stake | Your Future</p>
          </div>
        </div>
      </div>

      {/* Home Bottom Token Section */}
      <HomeBottomToken />

      {/* Home Bottom Road Map Section */}
      <RoadMapSection />
    </div>
  );
};

export default HomeBottomMainSection;
