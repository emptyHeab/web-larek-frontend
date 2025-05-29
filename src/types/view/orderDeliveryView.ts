import { IOrderFormView } from "./orderFormView";

export interface IOrderDeliveryView extends IOrderFormView {
  updateView(result:number): void;
}