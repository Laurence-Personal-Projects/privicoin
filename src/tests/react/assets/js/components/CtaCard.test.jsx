import { render, screen } from "@testing-library/react";
import CtaCard from "@/assets/js/components/CtaCard";

describe("CtaCard component", () => {
  it("renders root element as a div", () => {
    const { container } = render(<CtaCard />);
    expect(container.firstChild.tagName).toBe("DIV"); // root div
    expect(container.firstChild).toHaveClass("main-cta-section"); // optional class check
  });

  it("renders the Button component inside", () => {
    render(<CtaCard />);
    const button = screen.getByText(/Start Now/i);
    expect(button).toBeInTheDocument();
  });

  it("renders the BoxCard component", () => {
    const { container } = render(<CtaCard />);
    // BoxCard doesn't have role, so check by class
    const boxCard = container.querySelector(".cta-box-card");
    expect(boxCard).toBeInTheDocument();
  });

  it("contains the CTA image", () => {
    render(<CtaCard />);
    const img = screen.getByAltText(/cta coin/i);
    expect(img).toBeInTheDocument();
  });
});
