import { ReactNode, FC, Fragment } from "react";
import styled from "styled-components";
import NavBar from "~/src/components/ui/NavBar";

interface SectionProps {
  children: ReactNode;
  mode?: "fullwidth" | "centered";
}

export const Section: FC<SectionProps> = ({
  children,
  mode = "fullwidth",
}: SectionProps) => {
  return (
    <Fragment>
      <NavBar />
      <StyledSection mode={mode}>{children}</StyledSection>
    </Fragment>
  );
};

const StyledSection = styled.section<{ mode: string }>`
  background-color: ${(props) => props.theme.common.background};
  height: 100%;
  overflow-y: scroll;
  padding: ${(props) => (props.mode === "centered" ? "48px" : "0")};
  position: fixed;
  width: 100%;
  @media screen and (max-width: 544px) {
    padding: ${(props) => (props.mode === "centered" ? "16px" : "0")};
  }
`;
