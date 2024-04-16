import "@testing-library/jest-dom/extend-expect";
import { JSDOM } from "jsdom";
import jest from "jest"; // Add this line to import the 'jest' package
import { URL } from "url";

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
});
Object.defineProperty(URL, "createObjectURL", {
  writable: true,
  value: jest.fn(),
});
