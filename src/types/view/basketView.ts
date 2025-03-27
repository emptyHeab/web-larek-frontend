import { View } from "../../components/view/view";

export interface IBasketView extends View{
  icon: HTMLElement;
  openModal(): void;
}