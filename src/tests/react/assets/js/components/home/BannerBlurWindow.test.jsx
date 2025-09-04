import { render } from "@testing-library/react";
import BannerBlurWindow from "@/assets/js/components/home/BannerBlurWindow";

// Test scenario for BannerBlurWindow component
describe("BannerBlurWindow component", () => {
  const renderComponent = (props = {}) => render(<BannerBlurWindow {...props} />);

  it("renders the correct number of banners for desktop width", () => {
    global.innerWidth = 1600; // desktop
    const desktopCount = 3;

    const { container } = renderComponent({
      desktopCounter: desktopCount,
      addClass: "test-class",
      animationClass: "fadeIn",
      animationDelay: 0.5,
    });

    const banners = container.querySelectorAll(".banner-window");
    expect(banners.length).toBe(desktopCount);

    banners.forEach((banner, index) => {
      expect(banner).toHaveClass("banner-window", "test-class", "animate__animated", "fadeIn");
      expect(banner.style.animationDelay).toBe(`${index * 0.5}s`);
    });
  });

  it("renders correct number of banners for xLaptop width", () => {
    global.innerWidth = 1300; // xLaptop
    const xLaptopCount = 2;

    const { container } = renderComponent({ xLaptopCounter: xLaptopCount });
    const banners = container.querySelectorAll(".banner-window");
    expect(banners.length).toBe(xLaptopCount);
  });

  it("renders correct number of banners for laptop width", () => {
    global.innerWidth = 1024; // laptop
    const laptopCount = 4;

    const { container } = renderComponent({ laptopCounter: laptopCount });
    const banners = container.querySelectorAll(".banner-window");
    expect(banners.length).toBe(laptopCount);
  });

  it("renders correct number of banners for mobile width", () => {
    global.innerWidth = 500; // mobile
    const mobileCount = 5;

    const { container } = renderComponent({ mobileCounter: mobileCount });
    const banners = container.querySelectorAll(".banner-window");
    expect(banners.length).toBe(mobileCount);
  });

  it("renders zero animation delay when no animationClass is provided", () => {
    global.innerWidth = 1600; // desktop
    const desktopCount = 2;

    const { container } = renderComponent({ desktopCounter: desktopCount });
    const banners = container.querySelectorAll(".banner-window");

    banners.forEach((banner) => {
      expect(banner.style.animationDelay).toBe("0s");
    });
  });
});
