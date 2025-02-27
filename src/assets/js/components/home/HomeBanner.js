import BannerBlurWindow from "@/assets/js/components/home/BannerBlurWindow";
import BannerInfo from "@/assets/js/components/home/section/BannerInfo";
import BannerCoins from "@/assets/js/components/home/animations/BannerCoins";

const HomeBanner = () => {
    return (
      <div className="banner-main">
        <div className="bnr-top-bg"></div>
        <div className="tw-flex tw-flex-1 tw-absolute tw-left-0 tw-h-full tw-z-[2]">
            <BannerBlurWindow addClass="tw-w-[35px] sm:tw-w-[60px] md:tw-w-[90px] lg:tw-w-[112px]" desktopCounter={9} xLaptopCounter={7} laptopCounter={6} mobileCounter={6} animationClass="animate__fadeInLeft" animationDelay={0.2} />
        </div>
        <div className="wrapper">
            <BannerInfo />
        </div>

        <BannerCoins></BannerCoins>
        
        <div className="bnr-bottom-bg"></div>
      </div>
    );
};

export default HomeBanner;