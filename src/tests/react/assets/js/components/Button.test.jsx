import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/assets/js/components/Button";

// Test scenario for Button component
describe("Button component", () => {
  it("renders with title text", () => {
    render(<Button title="Click Me" />);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("renders children instead of title", () => {
    render(<Button>Child Text</Button>);
    expect(screen.getByText("Child Text")).toBeInTheDocument();
  });

  it("renders as an anchor tag when isAnchor = true", () => {
    render(<Button title="Link" href="/test-link" isAnchor={true} />);
    const link = screen.getByRole("link", { name: /Link/i });
    expect(link).toHaveAttribute("href", "/test-link");
  });

  it("adds target='_blank' when targetBlank is true", () => {
    render(<Button title="External" href="https://example.com" targetBlank={true} />);
    const link = screen.getByRole("link", { name: /External/i });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders as a button element when isAnchor = false", () => {
    render(<Button title="Submit" isAnchor={false} />);
    const button = screen.getByRole("button", { name: /Submit/i });
    expect(button).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    const handleClick = jest.fn();
    render(<Button title="Click" isAnchor={false} onClick={handleClick} />);
    fireEvent.click(screen.getByRole("button", { name: /Click/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("shows an icon when hasIcon is true", () => {
    render(<Button title="With Icon" hasIcon={true} />);
    expect(screen.getByText(/With Icon/i)).toBeInTheDocument();
    expect(screen.getByRole("link")).toContainHTML("fa-arrow-right");
  });
});
