import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "@/assets/js/components/core/form/SearchInput";

// Test scenario for SearchInput component
describe("SearchInput component", () => {
  const mockOnSearch = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders input with correct placeholder", () => {
    render(<SearchInput placeholder="Search here" onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText("Search here");
    expect(input).toBeInTheDocument();
  });

  it("calls onSearch when pressing Enter", () => {
    render(<SearchInput placeholder="Search" onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText("Search");

    fireEvent.change(input, { target: { value: "test value" } });
    fireEvent.keyUp(input, { key: "Enter", code: "Enter" });

    expect(mockOnSearch).toHaveBeenCalledWith("test value");
  });

  it("calls onSearch when clicking the search button", () => {
    render(<SearchInput placeholder="Search" onSearch={mockOnSearch} />);
    const input = screen.getByPlaceholderText("Search");

    fireEvent.change(input, { target: { value: "button click" } });

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith("button click");
  });

  it("does not render search button when hasSearchButton is false", () => {
    render(<SearchInput placeholder="Search" onSearch={mockOnSearch} hasSearchButton={false} />);
    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });

  it("renders input as disabled when disabled prop is true", () => {
    render(<SearchInput placeholder="Search" onSearch={mockOnSearch} disabled />);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeDisabled();
  });
});
