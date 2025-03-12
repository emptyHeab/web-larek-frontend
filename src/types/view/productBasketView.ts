import { IView } from "./view";

export interface IProductBasketView extends IView{
  id: string;
  productNumber: HTMLElement;
  title: HTMLElement;
  price: HTMLElement;
  deletBtn: HTMLButtonElement;
  deleteFromBasket(): void;
}