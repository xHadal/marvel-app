/* eslint-disable no-undef */
module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/mocks/**",
  ],
  coveragePathIgnorePatterns: [],

  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
    /*   "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js", */
    /*  "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.cjs", */
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy",
    "styled-components":
      "<rootDir>/node_modules/styled-components/dist/styled-components.cjs.js",
    "^.+\\.svg$": "jest-transformer-svg",
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "assets/(.*)": ["<rootDir>/src/assets/$1"],
    "components/(.*)": ["<rootDir>/src/components/$1"],
    "utils/(.*)": ["<rootDir>/src/utils/$1"],
    "context/(.*)": ["<rootDir>/src/context/$1"],
    "state/(.*)": ["<rootDir>/src/context/state/$1"],
  },
  moduleFileExtensions: [
    "tsx",
    "ts",
    "web.js",
    "js",
    "web.ts",
    "web.tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  resetMocks: true,
};
