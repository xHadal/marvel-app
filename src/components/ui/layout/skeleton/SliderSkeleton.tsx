import styled from "styled-components";
import React, { FC } from "react";

interface SliderProps {}

const SliderSkeleton: FC<SliderProps> = () => {
  return (
    <StyledSlider data-testid="slider-skeleton">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i}></li>
      ))}
    </StyledSlider>
  );
};

const StyledSlider = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px 0;
  min-height: 340.8px;
  max-width: 960px;
  margin: 0 auto;
  li {
    min-width: 179.2px;
    background-color: #f0f0f0;
  }
`;
export default SliderSkeleton;
