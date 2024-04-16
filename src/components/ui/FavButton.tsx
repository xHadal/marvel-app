import { FC } from "react";
import styled from "styled-components";
import favIcon from "@assets/fav-icon.svg";
import favIconFilled from "@assets/fav-icon-filled.svg";

interface FavButtonProps {
  size: "small" | "large";
  areaLabel: string;
  isFav?: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const FavButton: FC<FavButtonProps> = ({
  areaLabel,
  handleClick,
  size = "small",
  isFav,
}) => {
  /**TODO:
   * Add test for the FavButton.tsx component
   */
  return (
    <StyledFavButton
      $isFav={isFav || false}
      aria-label={areaLabel}
      onClick={handleClick}
      className={size}
      data-testid="fav-button"
    ></StyledFavButton>
  );
};

const StyledFavButton = styled.button<{ $isFav: boolean }>`
  background-color: transparent;
  background-image: url(${(props) => (props.$isFav ? favIconFilled : favIcon)});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: transparent;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  cursor: pointer;
  &.small {
    width: 12px;
    height: 10.84px;
  }
  &.large {
    width: 24px;
    height: 21.68px;
  }
  &:hover {
    cursor: pointer;
    background-color: transparent;
    color: red;
  }
  img {
    height: 10.84px;
    width: 12px;
  }
`;
export default FavButton;
