//components
import BoxCard from "@/assets/js/components/BoxCard";
import Button from "@/assets/js/components/Button";

const HomeMiddleTop = () => {
  return (
    <div className="home-middle-top-section tw-py-[60px] tw-px-[24px]">
      <div className="wrapper">
        <div className="tw-text-center tw-w-[477px] tw-max-w-full tw-m-auto tw-mb-[24px] md:tw-mb-[50px] animate__animated is_animate" data-animation="animate__fadeInUp">
          <h4 className="tw-text-[32px] tw-font-medium tw-mb-[8px] md:tw-text-[56px]">2 Ways to Earn</h4>
          <p className="tw-text-[16px] md:tw-text-[24px]">Earn residual income from multiple income streams according to your share.</p>
        </div>

        {/* Middle Boxes */}
        <div className="tw-flex tw-flex-wrap tw-justify-between tw-gap-[32px] md:tw-gap-0 animate__animated is_animate" data-animation="animate__fadeInUp">
          <BoxCard className="middle-top-box-1 template-box-card tw-text-left tw-flex tw-items-end tw-p-[24px] tw-max-w-full tw-w-full tw-h-auto tw-min-h-[300px] md:tw-w-[48%] md:tw-min-h-[555px] md:tw-p-[44px]">
            <h4 className="tw-w-full sm:tw-w-[60%] lg:tw-w-[50%] tw-text-[24px] md:tw-text-[32px]">Mint your PRIVI NFT* and earn 1% of PRIVI platform’s total earnings.</h4>
          </BoxCard>

          <BoxCard className="middle-top-box-2 template-box-card tw-text-left tw-flex tw-items-end tw-p-[24px] tw-max-w-full tw-w-full tw-h-auto tw-min-h-[300px] md:tw-w-[48%] md:tw-min-h-[555px] md:tw-p-[44px]">
            <h4 className="tw-w-full sm:tw-w-[60%] lg:tw-w-[50%] tw-text-[24px] md:tw-text-[32px]">Lock-in your PRIVICoins to earn voting rights and vote on DeFi projects available.</h4>
          </BoxCard>
        </div>

        {/* Middle Bottom */}
        <div className="tw-mt-[40px] tw-text-center tw-flex tw-flex-wrap tw-items-center tw-flex-col animate__animated is_animate" data-animation="animate__fadeIn">
            <p className="tw-text-[16px] md:tw-text-[24px] tw-mb-[40px]">* Exclusive NFTs for Privilege Club members.</p>
            <Button 
              title="Start Now" 
              className="cta-btn tw-max-w-full tw-w-[160px] tw-pr-[40px] md:tw-w-[220px] md:tw-pr-[34px]" 
              hasIcon={true} 
            />
        </div>
      </div>
    </div>
  );
};

export default HomeMiddleTop;