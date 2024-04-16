import React from "react";

export interface FavButtonProps {
  size: "small" | "large";
  areaLabel: string;
  isFav?: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}
