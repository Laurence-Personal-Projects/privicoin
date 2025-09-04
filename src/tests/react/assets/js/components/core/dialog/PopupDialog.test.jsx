import { render, screen, fireEvent } from "@testing-library/react";
import PopupDialog from "@/assets/js/components/core/dialog/PopupDialog";

// Test scenario for PopupDialog component
describe("PopupDialog component", () => {
  const mockOnClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders children correctly", () => {
    render(
      <PopupDialog onClose={mockOnClose}>
        <div>Popup Content</div>
      </PopupDialog>
    );
    expect(screen.getByText("Popup Content")).toBeInTheDocument();
  });

    it("calls onClose when clicking outside the popup", () => {
    const { container } = render(
        <PopupDialog onClose={mockOnClose}>
        <div>Popup Content</div>
        </PopupDialog>
    );

    // Click on the overlay (outermost div)
    fireEvent.click(container.firstChild);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

  it("does NOT call onClose when clicking inside the popup", () => {
    render(
      <PopupDialog onClose={mockOnClose}>
        <div data-testid="inside">Popup Content</div>
      </PopupDialog>
    );

    fireEvent.click(screen.getByTestId("inside"));
    expect(mockOnClose).not.toHaveBeenCalled();
  });

    it("renders sidebar layout when isSidebar is true", () => {
    const { container } = render(
        <PopupDialog onClose={mockOnClose} isSidebar={true} sideBarDirection="right">
        <div>Sidebar Content</div>
        </PopupDialog>
    );

    const sidebarCard = container.querySelector(".popup-card");
    expect(sidebarCard).toBeInTheDocument();

    // Check flex direction
    const flexContainer = sidebarCard.parentElement;
    expect(flexContainer).toHaveClass("tw-justify-end");
    });

  it("renders correct popup size when popupSize is provided", () => {
    render(
      <PopupDialog onClose={mockOnClose} popupSize="sm">
        <div>Small Popup</div>
      </PopupDialog>
    );

    const popupCard = screen.getByText("Small Popup").closest(".popup-card");
    expect(popupCard).toHaveClass("tw-max-w-sm");
  });

  it("close button calls onClose", () => {
    render(
      <PopupDialog onClose={mockOnClose}>
        <div>Popup Content</div>
      </PopupDialog>
    );

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
