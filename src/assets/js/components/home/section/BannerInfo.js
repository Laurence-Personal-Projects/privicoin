import Button from "@/assets/js/components/Button";

const BannerInfo = () => {
  return (
    <div className="banner-info">
      <div className="animate__animated animate__fadeInLeft animate__delay-2s">
        <h4 className="tw-text-[40px] md:tw-text-[56px] lg:tw-text-[72px]">
          The Coolest Decentralized and Diversified 
          <div className="tw-flex">
            <span className="highlighted-text">Rewards <span>&nbsp;Platform</span></span>
            </div>
        </h4>
        <p className="tw-text-[16px] md:tw-text-[24px]">Join an exclusive DeFI community where we succeed together. PRIVI empowers members to make collective decisions to diversify risk and maximize returns.</p>
        <Button title="Learn Now" className="cta-btn tw-max-w-full tw-w-[160px] tw-pr-[40px] md:tw-w-[220px] md:tw-pr-[34px]" hasIcon={true} />
      </div>
    </div>
  );
};

export default BannerInfo;