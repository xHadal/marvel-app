import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@theme/index";
import { IThemeContextProvider, IThemeContext } from "@context/theme/types";

const defaultMode = lightTheme;

export const ManageThemeContext: React.Context<IThemeContext> = createContext({
  mode: defaultMode,
  toggle: () => {},
});

export const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
  const [themeState, setThemeState] = React.useState({
    mode: defaultMode,
  });
  const toggleTheme = (): void => {
    setThemeState({
      mode: themeState.mode === lightTheme ? darkTheme : lightTheme,
    });
  };
  return (
    <ManageThemeContext.Provider
      value={{ mode: themeState.mode, toggle: toggleTheme }}
    >
      <ThemeProvider theme={themeState.mode}>{children}</ThemeProvider>
    </ManageThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ManageThemeContext);
