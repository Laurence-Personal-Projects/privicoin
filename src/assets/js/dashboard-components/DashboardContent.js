import Button from "@/assets/js/components/Button";
import DashboardTopSection from "@/assets/js/dashboard-components/sections/DashboardTopSection";
import DashboardMidSection from "@/assets/js/dashboard-components/sections/DashboardMidSection";

const DashboardContent = () => {
    return (
      <div className="tw-w-full">
        <div className="tw-flex tw-justify-end tw-flex-wrap tw-w-full tw-mb-[40px]">
          <Button title="Connect Wallet" className="dashboard-btn tw-max-w-full tw-w-[170px]"/>
        </div>

        <div className="tw-flex tw-flex-wrap tw-flex-col tw-gap-[30px]">
          {/*Dashboard Top*/}
          <DashboardTopSection />

          {/*Dashboard Middle*/}
          <DashboardMidSection />
        </div>
      </div>
      
    );
};

export default DashboardContent;