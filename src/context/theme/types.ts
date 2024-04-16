import { ICommonTheme } from "styled-components";

export interface IThemeContextProvider {
  children: React.ReactNode;
}
export interface IThemeContext {
  mode: ICommonTheme;
  toggle: () => void;
}
