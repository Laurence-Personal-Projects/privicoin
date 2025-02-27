import React, { useEffect, useState } from "react";
import MainLogo from "@/assets/images/privicoin-logo-@2x.webp";
import Button from "@/assets/js/components/Button";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = document.documentElement.scrollHeight * 0.05; // 5% of page height
            setIsScrolled(window.scrollY > scrollThreshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`main-header tw-w-full tw-fixed tw-top-0 tw-z-[100] ${isScrolled ? "is-scrolled" : ""}`}>
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
