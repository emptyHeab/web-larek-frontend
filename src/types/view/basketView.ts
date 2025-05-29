import { View } from "../../components/view/view";

export interface IBasketView extends View {
  updateView(value:number): void;
}