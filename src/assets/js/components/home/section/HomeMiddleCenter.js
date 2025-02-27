import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import BoxCard from "@/assets/js/components/BoxCard";

gsap.registerPlugin(ScrollTrigger);

const HomeMiddleCenter = ({ invert = false, title = "", boxCardInfo = [], imageObject = {} }) => {
  //refs
  const sectionRef = useRef(null);
  const holderRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const coinRef = useRef(null);
  const coinImageRef = useRef(null);
  const orderDiv = useRef('tw-order-1');

  useEffect(() => {
    if (!holderRef.current || !titleRef.current || !coinRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".how-it-works-card");
      if (!cards.length) return;

      let stickDistance = 0;
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
          start: "top 25% center",
          end: () => lastCardST.start + stickDistance,
          pin: true,
          pinSpacing: false,
          ease: "none",
          animation: scaleDown,
          toggleActions: "restart none none reverse",
        });
      });

      // Pin the coin image while scrolling
      ScrollTrigger.create({
        trigger: coinRef.current,
        start: "center center",
        end: () => Math.min(lastCardST.end, sectionRef.current.offsetTop + sectionRef.current.offsetHeight - window.innerHeight),
        pin: true,
        pinSpacing: false,
        scrub: true,
        onUpdate: (self) => {
          gsap.to(coinImageRef.current, {
            // if invert = true 0 to -100 degrees
            // otherwise 0 to 100 degrees
            rotation: invert ? -(self.progress * 100) : self.progress * 100,
            transformOrigin: "50% 50%", // Ensures smooth rotation around the center
            ease: "none",
          });
        },
      });

      // pin also the title
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 120px",
        end: () => Math.min(lastCardST.end, sectionRef.current.offsetTop + sectionRef.current.offsetHeight - window.innerHeight),
        pin: true,
        pinSpacing: false,
        scrub: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [holderRef, titleRef, coinRef, invert]);

  return (
    <div ref={sectionRef} className="tw-py-[40px] md:tw-py-[60px] tw-px-[24px]">
      <div className="wrapper">
        <div className="tw-flex tw-flex-wrap tw-justify-between tw-items-start">

          {/*Content Section*/}
          <div ref={holderRef} className={`home-middle-center-holder tw-text-left tw-w-full md:tw-w-[45%] ${invert ? orderDiv.current : ''}`}>
            <h2 ref={titleRef} className="tw-text-[32px] tw-mb-[24px] md:tw-mb-[50px] md:tw-text-[56px]">
              {title}
            </h2>
            <div className="tw-flex tw-flex-wrap tw-flex-col tw-gap-[40px] relative">
              {boxCardInfo.map((item, index) => (
                <BoxCard
                  key={index}
                  className="how-it-works-card template-box-card tw-text-left tw-flex tw-justify-between tw-flex-col tw-p-[24px] tw-max-w-full tw-w-full tw-h-auto tw-min-h-[300px] lg:tw-min-h-[418px] lg:tw-p-[64px] tw-will-change-transform"
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <h4 className="tw-w-full tw-text-[24px] md:tw-text-[32px]">{item.title}</h4>
                  <ul className="tw-pl-[20px] tw-list-disc tw-max-w-[450px] tw-w-full tw-text-[16px] md:tw-text-[24px]">
                    <li>{item.text}</li>
                  </ul>
                </BoxCard>
              ))}
            </div>
          </div>

          {/*Coin Section*/}
          <div ref={coinRef} className={`middle-works-coin tw-text-left tw-w-full tw-flex tw-justify-center tw-items-start md:tw-w-[50%] ${invert ? 'mid-works-coin-invert' : ''}`}>
            <div className="animate__animated is_animate tw-pt-[60px] md:tw-pt-[0px]" data-animation="animate__fadeInUp">
              <img ref={coinImageRef} src={imageObject} className="bnr-main-coin tw-max-w-full tw-w-[220px] md:tw-w-[320px] lg:tw-w-[600px]" alt="Coin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//propTypes
HomeMiddleCenter.propTypes = {
  title: PropTypes.string,
  invert: PropTypes.bool,
  boxCardInfo: PropTypes.array,
  imageObject: PropTypes.object,
};

export default HomeMiddleCenter;
