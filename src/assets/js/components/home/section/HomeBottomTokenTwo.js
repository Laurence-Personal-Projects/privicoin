import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import BoxCard from "@/assets/js/components/BoxCard";

// Images
import Token1 from "@/assets/images/home/token-1-frame-@2x.webp";
import Token2 from "@/assets/images/home/token-2-frame-@2x.webp";
import Token3 from "@/assets/images/home/token-3-frame-@2x.webp";
import Token4 from "@/assets/images/home/token-4-frame-@2x.webp";

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const tokenInfo = [
  { title: "Connect your wallet.", image: Token1 },
  { title: "Stake tokens to gain voting power.", image: Token2 },
  { title: "Participate in community voting and funding decisions.", image: Token3 },
  { title: "Earn and refund for continuous growth.", image: Token4 }
];

const HomeBottomTokenTwo = () => {
  //refs
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".started-token-card");
      if (!cards.length) return;

      let stickDistance = 50;
      let lastCardST = ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: "center center",
      });

      // Loop through each card and apply animations
      cards.forEach((card) => {
        let scaleDown = gsap.to(card, {
          scale: 1,
          transformOrigin: `50% ${lastCardST.start + stickDistance}`,
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 11% center",
          end: () => lastCardST.start + stickDistance,
          pin: true,
          pinSpacing: false,
          ease: "none",
          animation: scaleDown,
          toggleActions: "restart none none reverse",
        });
      });

    
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="token-main-card tw-w-full tw-relative tw-px-[24px]">
        <div className="tw-w-full tw-max-w-[725px] tw-m-auto tw-flex tw-flex-wrap tw-flex-col tw-items-center tw-justify-center tw-relative tw-min-h-[60vh] md:tw-min-h-[700px] lg:tw-min-h-[85vh] tw-mt-[80px] md:tw-mt-[0px] tw-gap-[40px]" >
        {tokenInfo.map((item, index) => (
            <BoxCard
            key={index}
            className="started-token-card token-card template-box-card tw-w-full tw-h-full tw-py-[40px] tw-px-[24px] md:tw-p-[80px] lg:tw-p-[85px] tw-flex tw-items-start tw-justify-between tw-flex-col tw-transition tw-duration-100 tw-ease-in-out"
            ref={(el) => {
                if (el) cardsRef.current[index] = el;
            }}
            >
            <img src={item.image} className="tw-w-[320px] lg:tw-w-[421px] tw-max-w-full tw-mx-auto" alt="Token" />
            <h4 className="tw-w-full tw-text-[24px] md:tw-text-[40px] tw-text-center">{item.title}</h4>
            </BoxCard>
        ))}
        </div>
    </div>
  );
};

//propTypes
HomeBottomTokenTwo.propTypes = {
  title: PropTypes.string,
  boxCardInfo: PropTypes.array,
};

export default HomeBottomTokenTwo;
