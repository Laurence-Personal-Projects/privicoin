import { render, screen } from "@testing-library/react";
import RoadMapList from "@/assets/js/components/home/RoadMapList";

const sampleRoamMapData = [
    {
      title: "Phase 1\nLaunch",
      mapList: [
        { text: "Task 1" },
        { text: "Task 2" },
      ],
    },
    {
      title: "Phase 2\nGrowth",
      mapList: [
        { text: "Task A" },
        { text: "Task B" },
      ],
    },
  ];

// Test scenario for RoadMapList component
describe("RoadMapList component", () => {

  it("renders all roadmap items", () => {
    const { container } = render(<RoadMapList itemList={sampleRoamMapData} />);

    // Check main wrapper
    const timeline = container.querySelector(".road-map-timeline");
    expect(timeline).toBeInTheDocument();

    // Check all headings
    expect(screen.getByText(/Phase 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Phase 2/i)).toBeInTheDocument();

    // Check line breaks
    const phase1Heading = screen.getByText(/Phase 1/i);
    expect(phase1Heading.innerHTML).toContain("<br>");

    // Check all list items
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.getByText("Task A")).toBeInTheDocument();
    expect(screen.getByText("Task B")).toBeInTheDocument();
  });

  it("renders empty timeline when itemList is empty", () => {
    const { container } = render(<RoadMapList itemList={[]} />);
    const timeline = container.querySelector(".road-map-timeline");
    expect(timeline).toBeInTheDocument();
    expect(timeline.childElementCount).toBe(0);
  });
});
