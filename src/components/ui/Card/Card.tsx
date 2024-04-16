import React, { useCallback } from "react";
import styled from "styled-components";
import FavButton from "@components/ui/FavButton/FavButton";
import { useAppState } from "@context/state/Global";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ itemInfo }: CardProps) => {
  const { id, name, thumbnail } = itemInfo;
  const { favs, dispatchFavs } = useAppState();
  const isFav = favs.list.includes(Number(id));
  const img = `${thumbnail.path}.${thumbnail.extension}`;
  const favAriaLabel = `${isFav ? "Remove" : "Add"} ${
    itemInfo.name
  } to favourite list`;
  const handleFav = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (!isFav) {
        dispatchFavs({ type: "ADD_FAV", payload: id });
      } else {
        dispatchFavs({ type: "REMOVE_FAV", payload: id });
      }
    },
    [dispatchFavs, id, isFav]
  );

  return (
    <StyledCard>
      <StyledCardImage src={img} alt={itemInfo.name} />
      <StyledCardFooter>
        <StyledCardTitle>{name}</StyledCardTitle>
        <FavButton
          areaLabel={favAriaLabel}
          handleClick={handleFav}
          isFav={isFav}
          size="small"
        ></FavButton>
      </StyledCardFooter>
    </StyledCard>
  );
};

const StyledCardImage = styled.img`
  width: 188.57px;
  height: 189.97px;
`;
const StyledCardFooter = styled.div`
  background-color: #000000;
  padding: 16px 16px 24px 16px;
  width: 100%;
  height: 56px;
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 5.38px;
    background-color: red;
    top: 0;
    left: 0;
    z-index: 0;
    transition: height 0.5s;
  }
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 12.86px solid transparent;
    border-right: 12.86px solid #ffffff;
    border-top: 12.86px solid transparent;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
`;
const StyledCardTitle = styled.h3`
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 400;
  z-index: 1;
`;

const StyledCard = styled.div`
  display: grid;
  height: 245.97px;
  width: 188.57px;

  &:hover {
    ${StyledCardFooter} {
      &::before {
        height: 100%; // 1
      }
    }
  }
`;
export default Card;
