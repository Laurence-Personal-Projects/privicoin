import BoxCard from "@/assets/js/components/BoxCard";
import Button from "@/assets/js/components/Button";

const DashboardMidSection = () => {
  return (
    <div className="tw-w-full">
      <BoxCard className="dashboard-box-card tw-px-[20px] tw-py-[24px] tw-text-left">
        <div className="tw-flex tw-flex-wrap tw-gap-[12px] md:tw-gap-[18px] tw-items-center tw-mb-[40px]">
          <div className="tw-rounded-full tw-w-[39px] tw-h-[39px] tw-bg-gray-200"></div>
          <h4 className="tw-text-[18px] md:tw-text-[24px] tw-text-[#8737A9]">Voting Energy</h4>
        </div>

        <div className="tw-w-full tw-flex tw-flex-wrap">
          {/*Left Column*/}
          <div className="tw-w-[50%] tw-grid tw-grid-cols-1 xl:tw-grid-cols-3 tw-gap-[16px]">
            <div className="tw-w-full tw-flex tw-flex-col tw-gap-[15px]">
              <h5 className="tw-text-[#8E8E8E]">Total V-PRIVI</h5>
              <span className="tw-font-bold">49.633M</span>
            </div>
            <div className="tw-w-full tw-flex tw-flex-col tw-gap-[15px]">
              <h5 className="tw-text-[#8E8E8E]">My V-PRIVI</h5>
              <span className="tw-font-bold">84,128</span>
            </div>
            <div className="tw-w-full tw-flex tw-flex-col tw-gap-[15px]">
              <h5 className="tw-text-[#8E8E8E]">Rewards</h5>
              <span className="tw-font-bold">3,089 PRIVI</span>
            </div>
          </div>

          {/*Right Column*/}
          <div className="tw-w-[50%] tw-grid tw-items-center tw-grid-cols-1 xl:tw-grid-cols-3 tw-gap-[16px]">
            <div className="tw-w-full tw-flex tw-justify-end xl:tw-justify-center">
              <Button title="Buy Privi" className="dashboard-btn tw-max-w-full tw-w-[180px]"/>
            </div>
            <div className="tw-w-full tw-flex tw-justify-end xl:tw-justify-center">
              <Button title="Get Privi" className="dashboard-btn tw-max-w-full tw-w-[180px]"/>
            </div>
            <div className="tw-w-full tw-flex tw-justify-end xl:tw-justify-center">
              <Button title="Claim" className="dashboard-btn tw-max-w-full tw-w-[180px]"/>
            </div>
          </div>
        </div>
      </BoxCard>
    </div>
  );
};

export default DashboardMidSection;