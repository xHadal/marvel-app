export interface ISliderItem {
  img: string;
  title: string;
  note: string;
}
export interface ISliderProps {
  items: ISliderItem[];
  isLoading: boolean;
}
