import { IView } from "./view";

export interface IProductsListView extends IView{
  productsPlace: HTMLElement;
  openModal(productId:string): void;
}