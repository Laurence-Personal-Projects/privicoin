import Button from "@/assets/js/components/Button";
import BoxCard from "@/assets/js/components/BoxCard";

const DashboardContent = () => {
    return (
      <div className="tw-w-full">
        <div className="tw-flex tw-justify-end tw-flex-wrap tw-w-full tw-mb-[40px]">
          <Button title="Connect Wallet" className="dashboard-btn tw-max-w-full tw-w-[170px]"/>
        </div>

        <div className="tw-w-full tw-flex tw-flex-wrap tw-justify-between">
          <div className="tw-w-[100%] tw-w-full lg:tw-max-w-[446px]">
            <BoxCard className="dashboard-box-card db-total-card tw-px-[20px] tw-py-[24px] tw-text-left">
              <div className="tw-flex tw-gap-[12px] md:tw-gap-[18px] tw-items-center tw-mb-[40px]">
                <div className="tw-rounded-full tw-w-[39px] tw-h-[39px] tw-bg-gray-200"></div>
                <h4 className="tw-text-[18px] md:tw-text-[24px]">Total Portfolio Value</h4>
              </div>
              <div className="tw-w-full">
                <h2 className="tw-font-bold tw-text-[42px] lg:tw-text-[64px] tw-mb-[20px]">$296K</h2>
                <span className="tw-text-[#8E8E8E] tw-text-[16px]">USD</span>
              </div>
            </BoxCard>
          </div>
        </div>
      </div>
      
    );
};

export default DashboardContent;