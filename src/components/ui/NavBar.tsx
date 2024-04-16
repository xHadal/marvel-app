import React, { FC } from "react";
import styled from "styled-components";
import marvelIcon from "@assets/marvel-logo.svg";
import { NavLink } from "react-router-dom";
import { useAppState } from "@context/Global";
import FavButton from "@components/ui/FavButton";

const NavBar: FC = () => {
  /**TODO:
   * Add test for the NavBar.tsx component
   */
  const { favs, heroesList, dispatchHeroesList } = useAppState();
  const favAriaLabel = `View favourite list`;
  const handleFavListClick = () => {
    const favHeroes = heroesList.data.filter((item) => {
      return favs.list.includes(item.id);
    });
    if (favHeroes.length) {
      dispatchHeroesList({
        type: "SET_HEROES_LIST",
        payload: favHeroes,
      });
    }
  };
  return (
    <StyledHeader>
      <NavLink
        to={`/`}
        aria-label="Go to Dashboard page."
        role="link"
        title={`Go to Dashboard page.`}
      >
        <img src={marvelIcon} alt="Marvel logo." title="Marvel logo."></img>
      </NavLink>
      <FavWrapper>
        <FavButton
          areaLabel={favAriaLabel}
          handleClick={handleFavListClick}
          size="large"
          aria-label={favAriaLabel}
        ></FavButton>
        <StyledFavText>{favs.list.length}</StyledFavText>
      </FavWrapper>
    </StyledHeader>
  );
};

export default NavBar;

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 20px 50px;
`;
const StyledFavText = styled.span`
  margin-left: 10px;
  color: #ffffff;
`;

const FavWrapper = styled.div`
  display: flex;
  align-items: center;
`;
