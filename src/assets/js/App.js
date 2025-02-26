import { useEffect } from "react";
import LogoFavIcon from "@/assets/images/privicoin-icon-@2x.webp";

//components
import Header from "@/assets/js/components/Header";
import Button from "@/assets/js/components/Button";
import BoxCard from "@/assets/js/components/BoxCard";

//sections
import HomeMiddleMainSection from "@/assets/js/components/home/HomeMiddleMainSection";


const App = () => {
  useEffect(() => {
    document.title = "Privicoin";

    // Change favicon dynamically
    const favIcon = (iconURL) => {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = iconURL;
    };

    favIcon(LogoFavIcon);
  }, []);

  return (
    <div className="App">
      <Header />

      {/* Middle Section */}
      <HomeMiddleMainSection />

      {/* CTA Section */}
      <div className="main-cta-section tw-px-[24px] tw-pb-[60px] md:tw-pb-[120px] lg:tw-pb-[240px]">
        <div className="wrapper">
          <BoxCard className="cta-box-card tw-text-left">
            <div className="tw-flex tw-flex-wrap tw-flex-between">
              <div className="cta-card-left">
                <h4>
                  Join the Future of Community-Driven Rewards
                  <span className="tw-block">Community Meets Capital Growth</span>
                </h4>
                <p>Leverage collective wisdom for profitable decisions.</p>
                <Button
                  title="Start Now"
                  className="cta-btn tw-max-w-full tw-w-[160px] tw-pr-[40px] md:tw-w-[230px] md:tw-pr-[34px]"
                  hasIcon={true}
                />
              </div>
            </div>
          </BoxCard>
        </div>
      </div>
    </div>
  );
};

export default App;
