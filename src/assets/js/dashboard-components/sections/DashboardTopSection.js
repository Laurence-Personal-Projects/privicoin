import BoxCard from "@/assets/js/components/BoxCard";

const DashboardTopSection = () => {
  return (
    <div className="tw-w-full tw-flex tw-flex-wrap tw-items-end tw-justify-between tw-gap-[40px]">
      {/*Total Value*/}
      <div className="tw-w-full xl:tw-w-[32%] animate__animated is_animate" data-animation="animate__fadeInLeft">
        <BoxCard className="dashboard-box-card db-total-card tw-px-[20px] tw-py-[24px] tw-text-left">
          <div className="tw-flex tw-flex-wrap tw-gap-[12px] md:tw-gap-[18px] tw-items-center tw-mb-[40px]">
            <div className="tw-rounded-full tw-w-[40px] tw-h-[40px] tw-bg-gray-200"></div>
            <h4 className="tw-text-[18px] md:tw-text-[24px]">Total Portfolio Value</h4>
          </div>
          <div className="tw-w-full">
            <h2 className="tw-font-bold tw-text-[42px] lg:tw-text-[64px] tw-mb-[20px]">$296K</h2>
            <span className="tw-text-[#8E8E8E] tw-text-[16px]">USD</span>
          </div>
        </BoxCard>
      </div>
      {/*Reward Stats*/}
      <div className="tw-w-full xl:tw-w-[63%] animate__animated is_animate" data-animation="animate__fadeInRight">
          <div className="tw-flex tw-flex-wrap tw-gap-[12px] md:tw-gap-[18px] tw-items-center tw-mb-[40px]">
            <div className="tw-rounded-full tw-w-[40px] tw-h-[40px] tw-bg-gray-200"></div>
            <h4 className="tw-text-[18px] md:tw-text-[24px] tw-text-[#8737A9]">Reward Stats</h4>
          </div>

          <ul className="tw-w-full tw-flex tw-flex-col tw-gap-[8px]">
            <li className="tw-gap-[8px] tw-flex tw-flex-wrap tw-justify-between tw-border tw-border-[#4D4D4D] tw-rounded-[100px] tw-py-[12px] md:tw-py-[7px] tw-px-[20px] tw-border-solid">
              <span className="tw-text-[#8E8E8E]">Total Rewards</span>
              <span className="tw-font-bold tw-w-[130px] tw-max-w-full tw-text-left">184,274 PRIVI</span>
            </li>
            <li className="tw-gap-[8px] tw-flex tw-flex-wrap tw-justify-between tw-border tw-border-[#4D4D4D] tw-rounded-[100px] tw-py-[12px] md:tw-py-[7px] tw-px-[20px] tw-border-solid tw-bg-gradient-to-r tw-from-[#8737A9] tw-to-[#2A184A]">
              <span>Total V-PRIVI Holders</span>
              <span className="tw-font-bold tw-w-[130px] tw-max-w-full tw-text-left">7,992</span>
            </li>
            <li className="tw-gap-[8px] tw-flex tw-flex-wrap tw-justify-between tw-border tw-border-[#4D4D4D] tw-rounded-[100px] tw-py-[12px] md:tw-py-[7px] tw-px-[20px] tw-border-solid">
              <span className="tw-text-[#8E8E8E]">Est. Next Influx Rewards</span>
              <span className="tw-font-bold tw-w-[130px] tw-max-w-full tw-text-left">$6,849</span>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default DashboardTopSection;