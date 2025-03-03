import BoxCard from "@/assets/js/components/BoxCard";
import Button from "@/assets/js/components/Button";
import CtaImage from "@/assets/images/home/cta-image-@2x.webp";

const CtaCard = () => {
  return (
  <div className="main-cta-section tw-px-[24px] tw-pb-[60px] md:tw-pb-[120px] lg:tw-pb-[240px] animate__animated is_animate" data-animation="animate__fadeInUp">
    {/* CTA Section */}
    <div className="wrapper">
      <BoxCard className="cta-box-card tw-text-left">
        <div className="tw-flex tw-flex-wrap tw-flex-between tw-relative">
          <div className="cta-card-left tw-z-[20] animate__animated is_animate" data-animation="animate__fadeInUp">
            <h4>
              Join the Future of Community-Driven Rewards
              <span className="tw-block">Community Meets Capital Growth</span>
            </h4>
            <p>Leverage collective wisdom for profitable decisions.</p>
            <Button
              title="Start Now"
              className="cta-btn tw-max-w-full tw-w-[160px] tw-pr-[40px] md:tw-w-[220px] md:tw-pr-[34px]"
              hasIcon={true}
            />
          </div>
          <div className="cta-coin-box tw-absolute tw-right-0 tw-bottom-[-10px] md:tw-bottom-[inherit] md:tw-right-[5%] md:tw-top-[50%] md:tw-translate-y-[-50%] tw-max-w-full lg:tw-w-[607px]" >
            <div className="animate__animated is_animate" data-animation="animate__fadeInUp">
              <img src={CtaImage} className="cta-coin tw-max-w-full tw-w-full" alt="cta coin"/>
            </div>
          </div>
        </div>
      </BoxCard>
    </div>
  </div>
  );
}

export default CtaCard;