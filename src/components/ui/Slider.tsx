import { FC, Fragment } from "react";
import styled from "styled-components";
import SliderSkeleton from "@components/ui/layout/skeleton/SliderSkeleton";
interface ISliderItem {
  img: string;
  title: string;
  note: string;
}
interface SliderProps {
  items: ISliderItem[];
  isLoading: boolean;
}

const Slider: FC<SliderProps> = ({ items, isLoading }) => {
  return (
    <Fragment>
      {isLoading ? (
        <SliderSkeleton />
      ) : (
        <StyledSlider>
          {items.map((item: ISliderItem, i: number) => (
            <li key={i}>
              <img
                src={item.img}
                alt={`Portrait of ${item.title} comic.`}
                title={`Portrait of ${item.title} comic.`}
              />
              <StyledSliderTitle>{item.title}</StyledSliderTitle>
              <StyledSliderNote>{item.note}</StyledSliderNote>
            </li>
          ))}
        </StyledSlider>
      )}
    </Fragment>
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
  img {
    width: 100%;
    min-height: 268.8px;
  }
  li {
    min-width: 179.2px;
  }
`;
const StyledSliderTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #000000;
`;

const StyledSliderNote = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #000000;
`;
export default Slider;
