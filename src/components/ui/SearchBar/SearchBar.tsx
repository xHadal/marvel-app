import React, { Fragment, useRef } from "react";
import styled from "styled-components";
import { SearchBarProps } from "./types";

const SearchBar: React.FC<SearchBarProps> = ({
  handleOnchange,
  resultsCounter,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Fragment>
      <StyledSearchBarWrapper>
        <StyledSearchBar
          type="text"
          placeholder="SEARCH A CHARACTER..."
          onChange={() => handleOnchange(inputRef.current?.value as string)}
          ref={inputRef}
          aria-label="Search a character..."
          role="search"
        ></StyledSearchBar>
      </StyledSearchBarWrapper>
      <StyledResultsCounter>{resultsCounter} RESULTS</StyledResultsCounter>
    </Fragment>
  );
};
const StyledSearchBarWrapper = styled.div`
  width: 100%;
  position: relative;
  &::before {
    content: "";
    display: block;
    position: absolute;
    background-image: url('data:image/svg+xml,<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9062 11.0522C12.0234 11.1694 12.0234 11.3569 11.9062 11.4507L11.3672 11.9897C11.2734 12.1069 11.0859 12.1069 10.9688 11.9897L8.13281 9.15381C8.08594 9.0835 8.0625 9.01318 8.0625 8.94287V8.63818C7.19531 9.36475 6.09375 9.81006 4.875 9.81006C2.17969 9.81006 0 7.63037 0 4.93506C0 2.26318 2.17969 0.0600586 4.875 0.0600586C7.54688 0.0600586 9.75 2.26318 9.75 4.93506C9.75 6.15381 9.28125 7.27881 8.55469 8.12256H8.85938C8.92969 8.12256 9 8.16943 9.07031 8.21631L11.9062 11.0522ZM4.875 8.68506C6.9375 8.68506 8.625 7.021 8.625 4.93506C8.625 2.87256 6.9375 1.18506 4.875 1.18506C2.78906 1.18506 1.125 2.87256 1.125 4.93506C1.125 7.021 2.78906 8.68506 4.875 8.68506Z" fill="black"/></svg>');
    background-repeat: no-repeat;
    background-size: cover;
    width: 12px;
    height: 12px;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

const StyledSearchBar = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  padding: 10px 10px 10px 30px;
  width: 100%;
  text-transform: uppercase;
  font-size: 16px;
  position: relative;
  &:focus,
  &:focus-visible {
    outline: none;
  }
`;
const StyledResultsCounter = styled.p`
  font-size: 12px;
  margin-top: 15px;
`;

export default SearchBar;
