//sections
import HomeMiddleTop from "@/assets/js/components/home/section/HomeMiddleTop";
import HomeMiddleCenter from "@/assets/js/components/home/section/HomeMiddleCenter";
import MainCoin from "@/assets/images/home/bnr-main-coin-@2x.webp";
import otherCoin from '@/assets/images/home/bnr-other-coin-@2x.webp';

// array of card infos
const boxCardInfo1 = [
  { title: "Lock Your PRIVICoins", text: "Become an exclusive member by contributing to the community investment pool. Your stake determines your voting power." },
  { title: "Recommend & Vote", text: "Members can recommend promising DeFi projects. Voting is conducted regularly, with voting power proportional to each member’s stake." },
  { title: "Fund the Winning Projects", text: "The community pool funds the projects based on the percentage of votes received." },
  { title: "Earn & Reinvest", text: "Returns from successful projects are collected in the platform’s treasury and redistributed to members based on their stake. The next voting cycle then begins." }
];

const boxCardInfo2 = [
    { title: "Decentralized Decision-Making", text: "Your vote matters. Influence where funds are allocated." },
    { title: "Proportional Voting Power", text: "Stake more, gain greater influence over investments." },
    { title: "Diversified Portfolio", text: "Reduce risk by funding multiple vetted projects." },
    { title: "Automated Profit Redistribution", text: "Earn passive income as profits are shared among members." },
    { title: "Sustainable Growth", text: "Continuous voting and funding cycles provide ongoing opportunities." },
];

const HomeMiddleMainSection = () => {
    return (
        <div className="home-middle-main-section">
            {/* Middle Sections */}
            <HomeMiddleTop></HomeMiddleTop>

            <div className="home-middle-center-section">
                <HomeMiddleCenter title="How It Works" boxCardInfo={boxCardInfo1} imageObject={MainCoin}></HomeMiddleCenter>
                <HomeMiddleCenter title="Why Join?" boxCardInfo={boxCardInfo2} invert={true} imageObject={otherCoin}></HomeMiddleCenter>
            </div>
        </div>
    );
};

export default HomeMiddleMainSection;