import { render, screen, fireEvent } from "@testing-library/react";
import DataCards from "@/assets/js/components/core/cards/DataCards";

const mockData = [
  {
    name: "Item 1",
    rank: 1,
    totalVotes: 100,
    votePercentage: 50,
    description: "Description 1",
    apr: 10,
    rewards: 50,
    my_vote: 5,
    my_percentage: "5%",
    available_votes: 95,
  },
  {
    name: "Item 2",
    rank: 2,
    totalVotes: 80,
    votePercentage: 40,
    description: "Description 2",
    apr: -5,
    rewards: 30,
    my_vote: 3,
    my_percentage: "3%",
    available_votes: 77,
  },
  {
    name: "Item 3",
    rank: 3,
    totalVotes: 60,
    votePercentage: 20,
    description: "Description 3",
    apr: 0,
    rewards: 20,
    my_vote: 2,
    my_percentage: "2%",
    available_votes: 58,
  }
];

// Test scenario for DataCards component
describe("DataCards component", () => {
  it("renders the correct number of items initially", () => {
    render(<DataCards dataItems={mockData} initialCount={2} />);
    const cards = screen.getAllByText(/Total Votes/i);
    expect(cards.length).toBe(2); // only 2 items initially
  });

  it("shows 'Load More' button if more items exist", () => {
    render(<DataCards dataItems={mockData} initialCount={2} />);
    const loadMoreButton = screen.getByRole("button", { name: /Load More/i });
    expect(loadMoreButton).toBeInTheDocument();
  });

  it("loads more items when 'Load More' is clicked", () => {
    render(<DataCards dataItems={mockData} initialCount={2} />);
    const loadMoreButton = screen.getByRole("button", { name: /Load More/i });
    fireEvent.click(loadMoreButton);

    const cards = screen.getAllByText(/Total Votes/i);
    expect(cards.length).toBe(3); // now all 3 items visible
  });

  it("renders 'No Data Found' when dataItems is empty", () => {
    render(<DataCards dataItems={[]} />);
    expect(screen.getByText(/No Data Found/i)).toBeInTheDocument();
  });

  it("renders loading placeholders when loading is true", () => {
    render(<DataCards dataItems={mockData} loading={true} initialCount={2} />);
    const placeholders = screen.getAllByText((content, element) => 
      element.className.includes("loading-bg")
    );
    expect(placeholders.length).toBe(2); // same as initialCount
  });
});
