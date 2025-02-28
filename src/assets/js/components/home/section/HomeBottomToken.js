import { useEffect, useRef } from "react";
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

const HomeBottomToken = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      const tokenCards = gsap.utils.toArray(".token-card");
      if (!tokenCards.length) return;

      // Ensure all cards are initially hidden except the first one
      gsap.set(tokenCards, { opacity: 0 });
      gsap.set(tokenCards[0], { opacity: 1 }); // Reveal the first card initially

      // Create ScrollTrigger for the whole section
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 12% center",
        end: "+=300%", // Ensures enough scroll space for all transitions
        pin: true,
        scrub: false, // Enables smooth back-and-forth scrolling
        markers: false,
        onUpdate: (self) => {
          let progress = self.progress;

          // Reset all cards
          gsap.to(tokenCards, { opacity: 0 });

          // Show only the appropriate card based on progress
          if (progress < 0.25) {
            gsap.to(tokenCards[0], { opacity: 1, immediateRender: false, overwrite: true });
          } else if (progress >= 0.25 && progress < 0.5) {
            gsap.to(tokenCards[1], { opacity: 1, immediateRender: false, overwrite: true });
          } else if (progress >= 0.5 && progress < 0.75) {
            gsap.to(tokenCards[2], { opacity: 1, immediateRender: false, overwrite: true });
          } else {
            gsap.to(tokenCards[3], { opacity: 1, immediateRender: false, overwrite: true });
          }
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="token-main-card tw-w-full tw-relative tw-px-[24px]">
      <div
        className="tw-w-full tw-max-w-[725px] tw-m-auto tw-flex tw-flex-wrap tw-flex-col tw-items-center tw-justify-center tw-relative tw-min-h-[60vh] md:tw-min-h-[700px] lg:tw-min-h-[85vh] tw-mt-[80px] md:tw-mt-[0px]"
      >
        {tokenInfo.map((item, index) => (
          <BoxCard
            key={index}
            className="token-card template-box-card tw-w-full tw-h-full tw-py-[40px] tw-px-[24px] md:tw-p-[80px] lg:tw-p-[85px] tw-flex tw-items-start tw-justify-between tw-flex-col tw-absolute tw-top-0 tw-left-0 tw-right-0 tw-transition tw-duration-100 tw-ease-in-out"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <img src={item.image} className="tw-w-[320px] lg:tw-w-[421px] tw-max-w-full tw-mx-auto" alt="Token" />
            <h4 className="tw-w-full tw-text-[24px] md:tw-text-[40px] tw-text-center">{item.title}</h4>
          </BoxCard>
        ))}
      </div>
    </div>
  );
};

export default HomeBottomToken;
