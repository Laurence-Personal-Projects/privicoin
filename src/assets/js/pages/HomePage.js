//components
import Header from "@/assets/js/components/Header";

//sections
import HomeBanner from "@/assets/js/components/home/HomeBanner";
import HomeMiddleMainSection from "@/assets/js/components/home/HomeMiddleMainSection";
import HomeBottomMainSection from "@/assets/js/components/home/HomeBottomMainSection";
import CtaCard from "@/assets/js/components/CtaCard";

const Home = () => {
  return (
    <div className="home-pag">
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

export default Home;