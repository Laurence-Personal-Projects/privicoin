import { render, screen } from "@testing-library/react";
import BoxCard from "@/assets/js/components/BoxCard";

// Test scenario for BoxCard component
describe("BoxCard component", () => {
    it("renders boxcard with content", () => {
        render(<BoxCard>BoxCard Content</BoxCard>);
        expect(screen.getByText("BoxCard Content")).toBeInTheDocument();
    });

    it("renders boxcard with additional class", () => {
        render(<BoxCard className="additional-class">BoxCard Content</BoxCard>);
        expect(screen.getByText("BoxCard Content")).toHaveClass("additional-class");
    });
    
    it("renders boxcard is div element", () => {
        render(<BoxCard>BoxCard Content</BoxCard>);
        const boxCardElement = screen.getByText("BoxCard Content").parentElement;
        expect(boxCardElement.tagName).toBe("DIV");
    });
});