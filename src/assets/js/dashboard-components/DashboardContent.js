//components
import Button from "@/assets/js/components/Button";

//sections
import DashboardTopSection from "@/assets/js/dashboard-components/sections/DashboardTopSection";
import DashboardMidSection from "@/assets/js/dashboard-components/sections/DashboardMidSection";
import DashboardBottomSection from "@/assets/js/dashboard-components/sections/DashboardBottomSection";

const DashboardContent = () => {
    return (
      <div className="tw-w-full">
        <div className="tw-flex tw-justify-end tw-flex-wrap tw-w-full tw-mb-[40px] animate__animated is_animate" data-animation="animate__fadeInDown">
          <Button title="Connect Wallet" className="dashboard-btn tw-max-w-full tw-w-[170px]"/>
        </div>

        <div className="tw-flex tw-flex-wrap tw-flex-col tw-gap-[40px]">
          {/*Dashboard Top*/}
          <DashboardTopSection />

          {/*Dashboard Middle*/}
          <DashboardMidSection />

          {/*Dashboard Bottom*/}
          <div className="tw-w-full">
            <DashboardBottomSection />
          </div>
        </div>
      </div>
      
    );
};

export default DashboardContent;