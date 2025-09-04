import { render, screen, fireEvent, within } from "@testing-library/react";
import SelectDropdown from "@/assets/js/components/core/form/SelectDropdown";

// Test scenario for SelectDropdown component
describe("SelectDropdown component", () => {
  const options = [
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
  ];
  const mockOnSelect = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders placeholder when no option is selected", () => {
    render(<SelectDropdown options={options} placeholder="Select an option" onSelect={mockOnSelect} />);
    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("renders selected option when provided", () => {
    render(<SelectDropdown options={options} selectedOption="2" onSelect={mockOnSelect} />);
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("toggles dropdown menu when button is clicked", () => {
    render(<SelectDropdown options={options} onSelect={mockOnSelect} />);
    const button = screen.getByRole("button");
    
    // Initially closed
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();

    // Open dropdown
    fireEvent.click(button);
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();

    // Close dropdown
    fireEvent.click(button);
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });

  it("calls onSelect with full object when simple=false", () => {
    render(<SelectDropdown options={options} onSelect={mockOnSelect} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    fireEvent.click(screen.getByText("Option 1"));

    expect(mockOnSelect).toHaveBeenCalledWith({ id: "1", name: "Option 1" });
  });

  it("calls onSelect with id when simple=true", () => {
    render(<SelectDropdown options={options} onSelect={mockOnSelect} simple />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    fireEvent.click(screen.getByText("Option 2"));

    expect(mockOnSelect).toHaveBeenCalledWith("2");
  });

  it("highlights selected option in dropdown menu", () => {
    const { container } = render(
        <SelectDropdown options={options} selectedOption="2" onSelect={mockOnSelect} />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button); // open dropdown

    // Scope query to the dropdown menu only
    const dropdownMenu = container.querySelector("ul"); // your menu is a <ul>
    const selectedOption = within(dropdownMenu).getByText("Option 2");

    expect(selectedOption).toHaveClass("tw-bg-[#8737A9]");
  });

  it("closes dropdown when clicking outside", () => {
    render(
          <div>
              <SelectDropdown options={options} onSelect={mockOnSelect} />
              <button>Outside</button>
          </div>
      );

    const button = screen.getByRole("button", { name: /Select/i }) || screen.getByRole("button");
    fireEvent.click(button); // Open dropdown
    expect(screen.getByText("Option 1")).toBeInTheDocument();

    const outsideButton = screen.getByText("Outside");
    fireEvent.mouseDown(outsideButton); // simulate outside click

    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });
});
