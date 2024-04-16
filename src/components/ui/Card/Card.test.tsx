import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

import { useAppState } from "@state/Global";

jest.mock("@context/state/Global", () => ({
  useAppState: jest.fn(),
}));

describe("Card component", () => {
  const mockDispatchFavs = jest.fn();
  const mockUseAppState = () => ({
    favs: { list: [1, 2, 3] },
    dispatchFavs: mockDispatchFavs,
  });

  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (useAppState as any).mockReturnValue(mockUseAppState());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const itemInfo = {
    id: 1,
    name: "Spider-Man",
    isFav: false,
    description: "",
    thumbnail: {
      path: "path/to/image",
      extension: "jpg",
    },
  };

  it("renders card correctly", () => {
    const { getByAltText, getByText } = render(<Card itemInfo={itemInfo} />);
    expect(getByAltText("Spider-Man")).toBeInTheDocument();
    expect(getByText("Spider-Man")).toBeInTheDocument();
  });

  it("calls dispatchFavs with correct arguments when FavButton is clicked", () => {
    const { getByTestId } = render(<Card itemInfo={itemInfo} />);
    const favButton = getByTestId("fav-button");

    fireEvent.click(favButton);

    expect(mockDispatchFavs).toHaveBeenCalledTimes(1);
    expect(mockDispatchFavs).toHaveBeenCalledWith({
      type: "REMOVE_FAV",
      payload: 1,
    });
  });
});
