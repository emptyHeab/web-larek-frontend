import { IView } from "./view";

export interface IProductModalView extends IView {
  id: string;
  description: HTMLElement;
  image: HTMLImageElement;
  title: HTMLElement;
  category: HTMLElement;
  price: HTMLElement;
  toBasketBtn: HTMLButtonElement;
  addToBasket():void;
}