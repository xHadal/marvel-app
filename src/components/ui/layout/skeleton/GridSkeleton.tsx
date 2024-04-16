import styled from "styled-components";
import React, { FC } from "react";

interface GridProps {}

const GridSkeleton: FC<GridProps> = () => {
  return (
    <GridContainer>
      {Array.from({ length: 20 }).map((_, i) => (
        <GridItem key={i}></GridItem>
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(188px, 1fr));
  gap: 15px;
  list-style: none;
  padding: 40px 0;
  width: 100%;
`;

const GridItem = styled.li`
  background-color: #f0f0f0;
  height: 300px;
  max-width: 188.57px;
`;
export default GridSkeleton;
