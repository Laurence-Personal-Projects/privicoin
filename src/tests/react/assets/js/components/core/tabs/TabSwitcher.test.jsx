import { render, screen, fireEvent } from "@testing-library/react";
import TabSwitcher from "@/assets/js/components/core/tabs/TabSwitcher";

// Sample tabs
const tabs = [
  { name: "tab1", label: "Tab 1" },
  { name: "tab2", label: "Tab 2" }
];

// Test scenario for TabSwitcher component
describe("TabSwitcher", () => {
  it("renders all tabs and switches content", () => {
    const mockOnTabChange = jest.fn();
    
    render(
      <TabSwitcher tabs={tabs} onTabChange={mockOnTabChange}>
        <div id="tab1">Content 1</div>
        <div id="tab2">Content 2</div>
      </TabSwitcher>
    );

    // Initial active tab
    expect(screen.getByText("Content 1")).toBeVisible();
    expect(screen.queryByText("Content 2")).toBeNull();

    // Click second tab
    fireEvent.click(screen.getByText("Tab 2"));
    expect(mockOnTabChange).toHaveBeenCalledWith("tab2");
    expect(screen.getByText("Content 2")).toBeVisible();
    expect(screen.queryByText("Content 1")).toBeNull();
  });
});
