import { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  mode?: "fullwidth" | "centered";
}
