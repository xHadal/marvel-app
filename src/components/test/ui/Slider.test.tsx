import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Slider from "../../ui/Slider";

describe("Slider component", () => {
  it("renders slider with items", () => {
    const items = [
      {
        img: "image1.jpg",
        title: "Title 1",
        note: "Note 1",
      },
      {
        img: "image2.jpg",
        title: "Title 2",
        note: "Note 2",
      },
    ];

    const { getByAltText, getByText } = render(
      <Slider isLoading={false} items={items} />
    );

    // Ensure each item is rendered with correct data
    items.forEach((item) => {
      expect(
        getByAltText(`Portrait of ${item.title} comic.`)
      ).toBeInTheDocument();
      expect(getByText(item.title)).toBeInTheDocument();
      expect(getByText(item.note)).toBeInTheDocument();
    });
  });

  it("renders slider skeleton when items are empty", () => {
    const { getByTestId } = render(<Slider isLoading={true} items={[]} />);
    expect(getByTestId("slider-skeleton")).toBeInTheDocument();
  });
});
