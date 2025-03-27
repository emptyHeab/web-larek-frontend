import { IView } from "./view";

export interface IBasketModalView extends IView {
  basketList: HTMLUListElement;
  total:HTMLElement;
  makeOrderBtn:HTMLButtonElement;
  makeOrder(): void;
}