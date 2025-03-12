import { IView } from "./view";

export interface IBasketView extends IView{
  basketList: HTMLUListElement;
  total:HTMLElement;
  makeOrderBtn:HTMLButtonElement;
  basketIcon: HTMLElement;
  makeOrder(): void;
  openModal(): void;
}