import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/assets/js/components/Header";

// Mock the logo image import
jest.mock("@/assets/images/privicoin-logo-@2x.webp", () => "logo.png");

// Test scenario for Header component
describe("Header component", () => {
  beforeEach(() => {
    // Reset scrollY before each test
    window.scrollY = 0;
  });

  it("renders the logo and button correctly", () => {
    render(<Header />);
    
    const logo = screen.getByAltText(/privicoin logo/i);
    const button = screen.getByRole("button", { name: /start now/i });

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "logo.png");
    expect(button).toBeInTheDocument();
  });

  it("has class 'is-scrolled' when scrollY exceeds threshold", () => {
    render(<Header />);
    const header = screen.getByRole("banner"); // use header role

    // Simulate scroll
    const scrollThreshold = document.documentElement.scrollHeight * 0.05;
    Object.defineProperty(window, "scrollY", { value: scrollThreshold + 1, writable: true });
    fireEvent.scroll(window);

    expect(header).toHaveClass("is-scrolled");
  });

  it("does NOT have 'is-scrolled' class when scrollY is below threshold", () => {
    render(<Header />);
    const header = screen.getByRole("banner"); // use header role

    Object.defineProperty(window, "scrollY", { value: 0, writable: true });
    fireEvent.scroll(window);

    expect(header).not.toHaveClass("is-scrolled");
  });
});
