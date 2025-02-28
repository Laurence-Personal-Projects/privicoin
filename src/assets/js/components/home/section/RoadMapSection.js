import { useEffect, useRef, useState } from "react";
import RoadMapList from "@/assets/js/components/home/RoadMapList";

// RoadMap Data
const roadMapData = [
  {
    title: "Q1 : Platform Development \n & Launch",
    mapList: [
      { text: "Smart contract deployment for staking and voting" },
      { text: "Community onboarding and early access program" },
      { text: "Initial investment round and project funding" },
    ],
  },
  {
    title: "Q2: Expansion & \n Optimization",
    mapList: [
      { text: "UI/UX improvements and dashboard enhancements" },
      { text: "Additional security audits and smart contract optimizations" },
      { text: "Community governance features implementation" },
    ],
  },
  {
    title: "Q3: Advanced Features & \n Partnerships",
    mapList: [
      { text: "Integration of new DeFi investment strategies" },
      { text: "Automated performance tracking for funded projects" },
      { text: "Strategic partnerships with leading DeFi platforms" },
    ],
  },
  {
    title: "Q4: Scaling & \n Growth",
    mapList: [
      { text: "Cross-chain compatibility for wider accessibility" },
      { text: "Launch of referral and reward programs" },
      { text: "Expansion of community engagement initiatives" },
    ],
  },
];

const RoadMapSection = () => {
  const roadMapRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!roadMapRef.current) return;

      const section = roadMapRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight;

      if (scrollY > sectionTop) {
        let newProgress = ((scrollY - sectionTop) / sectionHeight) * 100;
        setProgress(Math.min(newProgress, 100));
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={roadMapRef} className="road-map-main-section tw-text-left tw-py-[120px] tw-pb-[40px] tw-px-[24px] md:tw-pt-[250px] md:tw-pb-[300px]">
      <div className="wrapper">
        <div className="road-map-box tw-pl-[32px] md:tw-pl-[60px] lg:tw-pl-[105px] tw-relative">
          {/* Progress Bar */}
          <div className="progress-outline"></div>
          <div className="progress-bar" style={{ height: `${progress}%` }}></div>

          {/* Road Map Title */}
          <div className="road-map-title-box tw-mb-[60px] md:tw-mb-[150px]">
            <h4 className="tw-text-[32px] md:tw-text-text-[56px] tw-font-medium tw-mb-[16px] md:tw-mb-[24px]">Development Road Map</h4>
            <p className="tw-uppercase tw-text-[16px] md:tw-text-[24px]">Decentralized Funding | Amplified Returns</p>
          </div>

          {/* Road Map Content */}
          <RoadMapList itemList={roadMapData} />
        </div>
      </div>
    </div>
  );
};

export default RoadMapSection;
