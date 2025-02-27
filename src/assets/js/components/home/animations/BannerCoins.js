//images
import TopLeftCoin from '@/assets/images/home/bnr-coin-1-@2x.webp';
import TopRightCoin from '@/assets/images/home/bnr-coin-2-@2x.webp';
import MainCoin from '@/assets/images/home/bnr-main-coin-@2x.webp';
import BottomCoin from '@/assets/images/home/bnr-coin-3-@2x.webp';

const BannerCoins = () => {
  return (
    <div className="bnr-main-anim-box">
      {/* Top Left Coin */}
      <div className="bnr-topleft-coin">
        <div className="animate__animated animate__fadeInLeft animate__delay-2s">
          <img src={TopLeftCoin} className="bnr-top-1-coin" alt="Coin" />
        </div>
      </div>

      {/* Center Coin */}
      <div className="bnr-center-coin">
        <div className="animate__animated animate__rotateIn animate__delay-2s">
          <img src={MainCoin} className="bnr-main-coin" alt="Coin" />
        </div>
      </div>

      {/* Top Right Coin */}
      <div className="bnr-topright-coin">
        <div className="animate__animated animate__fadeInRight animate__delay-2s">
          <img src={TopRightCoin} className="bnr-top-2-coin" alt="Coin" />
        </div>
      </div>

      {/* Bottom Coin */}
      <div className="bnr-bottom-coin">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <img src={BottomCoin} className="bnr-btm-coin" alt="Coin" />
        </div>
      </div>
    </div>
  );
}

export default BannerCoins;