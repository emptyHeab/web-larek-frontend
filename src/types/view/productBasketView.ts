import { IProductView } from "./productView";
import { IView } from "./view";

export interface IProductBasketView extends IProductView{
  productNumber: HTMLElement;
  deletBtn: HTMLButtonElement;
  deleteFromBasket(): void;
}