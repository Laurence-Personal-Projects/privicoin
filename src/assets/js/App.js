import { useEffect } from "react";
import LogoFavIcon from "@/assets/images/privicoin-icon-@2x.webp";

//components
import Header from "@/assets/js/components/Header";

//sections
import HomeBanner from "@/assets/js/components/home/HomeBanner";
import HomeMiddleMainSection from "@/assets/js/components/home/HomeMiddleMainSection";
import HomeBottomMainSection from "@/assets/js/components/home/HomeBottomMainSection";
import CtaCard from "@/assets/js/components/CtaCard";

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

      {/* Banner Section */}
      <HomeBanner />

      {/* Middle Section */}
      <HomeMiddleMainSection />

      {/* Bottom Section */}
      <HomeBottomMainSection />

      {/* CTA Section */}
      <CtaCard></CtaCard>
    </div>
  );
};

export default App;
