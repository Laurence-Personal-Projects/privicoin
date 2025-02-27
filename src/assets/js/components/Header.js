import React from "react";
import MainLogo from '@/assets/images/privicoin-logo-@2x.webp';
import Button from "@/assets/js/components/Button";

const Header = () => {
    return (
        <header className="main-header tw-w-full tw-fixed tw-top-0 tw-z-[100]">
            <div className="tw-flex tw-items-center tw-justify-between tw-flex-wrap">
                <a href={window.location.origin} className="header-logo tw-w-[120px] md:tw-w-[194px]">
                    <img src={MainLogo} className="header-logo-image" alt="Privicoin Logo" />
                </a>
                <Button title="Start Now" className="cta-btn tw-max-w-full tw-w-[160px] tw-pr-[40px] md:tw-w-[220px] md:tw-pr-[34px]" hasIcon={true} />
            </div>
        </header>
    );
};

export default Header;
