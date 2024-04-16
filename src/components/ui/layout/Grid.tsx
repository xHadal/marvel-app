import { FC } from "react";
import styled from "styled-components";
interface GridProps {
  items: JSX.Element[];
}

const Grid: FC<GridProps> = ({ items }) => {
  return (
    <GridContainer>
      {items.map((item, i) => {
        return <GridItem key={i}>{item}</GridItem>;
      })}
    </GridContainer>
  );
};

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(188px, 1fr));
  gap: 15px;
  list-style: none;
  padding: 40px 0;
`;

const GridItem = styled.li`
  background-color: #f0f0f0;
  max-width: 188.57px;
`;

export default Grid;
