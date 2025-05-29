import { IProductView } from "./productView";

export interface IProductModalView extends IProductView {
  updateView(): void;
}