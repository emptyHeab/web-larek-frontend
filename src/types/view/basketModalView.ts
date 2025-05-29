import { BasketEventData } from "..";
import { IView } from "./view";

export interface IBasketModalView extends IView {
  updateView(data:BasketEventData): void;
}