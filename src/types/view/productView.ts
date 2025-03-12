import { IView } from "./view";

export interface IProductView extends IView {
  id: string;
  image: HTMLImageElement;
  title: HTMLElement;
  category: HTMLElement;
  price: HTMLElement;
}