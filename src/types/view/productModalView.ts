import { IProductView } from "./productView";

export interface IProductModalView extends IProductView {
  description: HTMLElement;
  toBasketBtn: HTMLButtonElement;
  addToBasket():void;
  changeButtonState():void;
}