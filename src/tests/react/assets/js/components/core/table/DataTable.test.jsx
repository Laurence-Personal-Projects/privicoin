import { render, screen, fireEvent } from "@testing-library/react";
import DataTable from "@/assets/js/components/core/table/DataTable";

// Sample headers
const headers = [
  { text: "Name", value: "name", sortable: true },
  { text: "APR", value: "apr", sortable: true },
  { text: "Votes", value: "totalVotes", sortable: false },
];

// Sample data items
const dataItems = [
  { name: "Item 1", apr: 5, totalVotes: 100, votePercentage: 50, rewards: 100, my_vote: 10, my_percentage: "10%", available_votes: 90 },
  { name: "Item 2", apr: -2, totalVotes: 200, votePercentage: 60, rewards: 200, my_vote: 20, my_percentage: "10%", available_votes: 180 },
];

// Test scenario for DataTable component
describe("DataTable", () => {
  it("renders headers", () => {
    render(<DataTable headers={headers} dataItems={dataItems} />);
    
    headers.forEach(header => {
      expect(screen.getByText(header.text)).toBeInTheDocument();
    });
  });

  it("calls onSort when sortable header is clicked", () => {
    const mockSort = jest.fn();
    render(<DataTable headers={headers} dataItems={dataItems} onSort={mockSort} />);
    
    fireEvent.click(screen.getByText("Name"));
    expect(mockSort).toHaveBeenCalledWith("name", "asc");
    
    fireEvent.click(screen.getByText("Name"));
    expect(mockSort).toHaveBeenCalledWith("name", "desc");
  });

  it("loads more items on button click", () => {
    render(<DataTable headers={headers} dataItems={dataItems} initialCount={1} />);
    
    // Initially, only 1 item visible
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.queryByText("Item 2")).not.toBeInTheDocument();
    
    fireEvent.click(screen.getByText("Load More"));
    
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("renders 'No Data Found' when dataItems is empty", () => {
    render(<DataTable headers={headers} dataItems={[]} />);
    expect(screen.getByText("No Data Found...")).toBeInTheDocument();
  });
});