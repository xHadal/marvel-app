import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../../ui/SearchBar"; // Assuming SearchBar is in the same directory
import "@testing-library/jest-dom";
import "jest-styled-components";

// Define a mock function for handleOnchange
const mockHandleOnchange = jest.fn();

describe("SearchBar component", () => {
  test("should render correctly with placeholder text", () => {
    render(
      <SearchBar handleOnchange={mockHandleOnchange} resultsCounter={0} />
    );
    const searchInput = screen.getByPlaceholderText("SEARCH A CHARACTER...");
    expect(searchInput).toBeInTheDocument();
  });

  test("should update input value on change", () => {
    render(
      <SearchBar handleOnchange={mockHandleOnchange} resultsCounter={0} />
    );
    const searchInput = screen.getByPlaceholderText(
      "SEARCH A CHARACTER..."
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "ironman" } });
    expect(searchInput.value).toBe("ironman");
  });

  test("should call handleOnchange function on input change", () => {
    render(
      <SearchBar handleOnchange={mockHandleOnchange} resultsCounter={0} />
    );
    const searchInput = screen.getByPlaceholderText("SEARCH A CHARACTER...");
    fireEvent.change(searchInput, { target: { value: "thor" } });
    expect(mockHandleOnchange).toHaveBeenCalledTimes(1);
    expect(mockHandleOnchange).toHaveBeenCalledWith("thor");
  });

  test("should display results counter", () => {
    render(
      <SearchBar handleOnchange={mockHandleOnchange} resultsCounter={10} />
    );
    const resultsCounter = screen.getByText("10 RESULTS");
    expect(resultsCounter).toBeInTheDocument();
  });
});
